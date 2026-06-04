// ============================================================
// MINDMAP.JS — Stable Vector Pill Mind Map (v6)
// Crisp dotted links, pill capsule nodes, all branches fully visible
// ============================================================

const MindMap = (() => {
  let svg, g, zoom;
  let currentUnit = 1;

  // ── Color palettes per unit (vibrant vector colors) ──
  const unitPalettes = {
    1: {
      root: '#f59e0b', // Amber for the sun
      branches: ['#22c55e', '#3b82f6', '#ec4899', '#a855f7', '#06b6d4', '#eab308', '#6366f1']
    },
    2: {
      root: '#f59e0b',
      branches: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ec4899', '#14b8a6', '#f43f5e']
    },
    3: {
      root: '#f59e0b',
      branches: ['#8b5cf6', '#d946ef', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b', '#4f46e5']
    },
    4: {
      root: '#f59e0b',
      branches: ['#f97316', '#eab308', '#84cc16', '#06b6d4', '#6366f1', '#ec4899', '#10b981']
    }
  };

  // ── Build radial tree data ───────────────────────────────────
  function buildTreeData(unit) {
    const topics = DataUtils.getTopicsByUnit(unit);
    const freq = DataUtils.computeTopicFrequency();
    const unitMeta = UNIT_META[unit - 1];

    const children = topics.map(t => ({
      id: t.id,
      label: t.title,
      importance: t.importanceScore,
      frequency: freq[t.id] || 0,
      difficulty: t.difficulty,
      unit: t.unit,
      // Show up to 4 subtopics to ensure completeness while preserving layout elegance
      children: (t.subtopics || []).slice(0, 4).map((sub, i) => ({
        id: `${t.id}_sub${i}`,
        label: sub,
        importance: 0,
        frequency: 0,
        parentTopic: t.id
      }))
    }));

    return {
      id: `root_${unit}`,
      label: `Unit ${unit}`,
      icon: unitMeta.icon,
      subtitle: unitMeta.title,
      children
    };
  }

  // ── Render modern vector mindmap ────────────────────────────
  function render(unit) {
    currentUnit = unit;
    const container = document.getElementById('mindmap-svg');
    if (!container) return;

    d3.select('#mindmap-svg').selectAll('*').remove();

    // Spaced coordinate system for layout safety
    const W = 1600;
    const H = 1200;
    const cx = W / 2;
    const cy = H / 2;

    const palette = unitPalettes[unit];
    const treeData = buildTreeData(unit);
    const topics   = treeData.children;
    const N        = topics.length;

    // Viewbox for responsive layout
    svg = d3.select('#mindmap-svg').attr('viewBox', `0 0 ${W} ${H}`);

    // Check theme
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    // Zoom behavior
    zoom = d3.zoom().scaleExtent([0.3, 3.5]).on('zoom', e => g.attr('transform', e.transform));
    svg.call(zoom).on('dblclick.zoom', null);

    // Hide tooltip on background click
    svg.on('click', () => {
      hideTooltip();
    });

    g = svg.append('g');

    // ── Elliptical & Staggered positions to prevent any overlap ──
    const R1 = 365; // Base topic radius
    const R2 = 650; // Reference radius for layout scale calculation
    const aspectY = 0.76; // Landscape aspect scaling factor

    const topicPositions = topics.map((t, i) => {
      const angle = (2 * Math.PI * i / N) - Math.PI / 2; // start at top
      // Alternate radius to prevent horizontal overlap
      const r_node = R1 + (i % 2 === 0 ? -45 : 45);
      return {
        topic: t,
        angle,
        r_node,
        x: cx + r_node * Math.cos(angle),
        y: cy + r_node * Math.sin(angle) * aspectY,
        color: palette.branches[i % palette.branches.length]
      };
    });

    // ── Gather all nodes for overlap resolution ──
    const layoutNodes = [];
    
    // 1. Root node obstacle (fixed)
    layoutNodes.push({
      id: 'root',
      x: cx,
      y: cy,
      w: 180,
      h: 220,
      fixed: true
    });

    // 2. Parent topic nodes (fixed)
    topicPositions.forEach(tp => {
      const imp = tp.topic.importance || 5;
      const r = 28 + imp * 1.5;
      const rx = r * 1.25;
      const ry = r * 0.72;
      layoutNodes.push({
        id: tp.topic.id,
        x: tp.x,
        y: tp.y,
        w: rx * 2 + 10, // include safety margin
        h: ry * 2 + 10,
        fixed: true
      });
    });

    // 3. Subtopic nodes (movable, initialized along radial rays)
    topicPositions.forEach((tp, idx) => {
      const topic = tp.topic;
      if (topic.children?.length) {
        const subCount = topic.children.length;
        const S = 2 * Math.PI / N;
        const da = Math.min(0.24, S * 0.32);
        
        topic.children.forEach((sub, si) => {
          const spreadAngle = tp.angle + (si - (subCount - 1) / 2) * da;
          const isEvenTopic = (idx % 2 === 0);
          const isEvenChild = (si % 2 === 0);
          
          const separation = isEvenTopic
            ? (isEvenChild ? 160 : 220)
            : (isEvenChild ? 280 : 340);
          const sx = cx + (tp.r_node + separation) * Math.cos(spreadAngle);
          const sy = cy + (tp.r_node + separation) * Math.sin(spreadAngle) * aspectY;
          
          const subW = 45 + sub.label.length * 4;
          const subH = 12;
          
          layoutNodes.push({
            id: sub.id,
            x: sx,
            y: sy,
            initX: sx,
            initY: sy,
            w: subW * 2 + 12,
            h: subH * 2 + 12,
            fixed: false,
            subData: sub
          });
        });
      }
    });

    // ── Run deterministic iterative overlap resolution ──
    const movableNodes = layoutNodes.filter(n => !n.fixed);
    const iterations = 150;
    const pullBack = 0.005;

    for (let iter = 0; iter < iterations; iter++) {
      for (let i = 0; i < layoutNodes.length; i++) {
        for (let j = i + 1; j < layoutNodes.length; j++) {
          const n1 = layoutNodes[i];
          const n2 = layoutNodes[j];
          if (n1.fixed && n2.fixed) continue;
          
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const absDx = Math.abs(dx);
          const absDy = Math.abs(dy);
          
          const minDistanceX = (n1.w + n2.w) / 2;
          const minDistanceY = (n1.h + n2.h) / 2;
          
          if (absDx < minDistanceX && absDy < minDistanceY) {
            const overlapX = minDistanceX - absDx;
            const overlapY = minDistanceY - absDy;
            
            let pushX = 0, pushY = 0;
            if (overlapX < overlapY) {
              if (absDx > 0.1) {
                pushX = (dx / absDx) * overlapX;
              } else {
                pushX = (n1.fixed ? -1 : 1) * overlapX * 0.5;
              }
            } else {
              if (absDy > 0.1) {
                pushY = (dy / absDy) * overlapY;
              } else {
                pushY = (n1.fixed ? -1 : 1) * overlapY * 0.5;
              }
            }
            
            if (n1.fixed) {
              n2.x -= pushX;
              n2.y -= pushY;
            } else if (n2.fixed) {
              n1.x += pushX;
              n1.y += pushY;
            } else {
              n1.x += pushX * 0.5;
              n1.y += pushY * 0.5;
              n2.x -= pushX * 0.5;
              n2.y -= pushY * 0.5;
            }
          }
        }
      }
      
      // Pull back to initial radial rays to maintain logical flow structure
      movableNodes.forEach(n => {
        n.x += (n.initX - n.x) * pullBack;
        n.y += (n.initY - n.y) * pullBack;
        // Keep within viewport boundaries
        n.x = Math.max(100, Math.min(W - 100, n.x));
        n.y = Math.max(80, Math.min(H - 80, n.y));
      });
    }

    // Write back resolved coordinates
    movableNodes.forEach(n => {
      n.subData._x = n.x;
      n.subData._y = n.y;
    });

    // ── Draw connections: root → topic ───────────────────────
    const linkGroup = g.append('g').attr('class', 'mm-links');

    topicPositions.forEach(({ x, y, color, angle, topic, r_node }, idx) => {
      // Main branch line control points
      const mx = cx + (r_node * 0.45) * Math.cos(angle);
      const my = cy + (r_node * 0.45) * Math.sin(angle) * aspectY;

      // Clean dotted branch line
      linkGroup.append('path')
        .attr('d', `M${cx},${cy} Q${mx},${my} ${x},${y}`)
        .attr('fill', 'none')
        .attr('stroke', color)
        .attr('stroke-width', 3.5)
        .attr('stroke-dasharray', '4,4') // Dotted style!
        .attr('class', `mm-branch-link mm-branch-link-${topic.id} mm-branch-marker-${idx}`)
        .attr('stroke-opacity', isDark ? 0.45 : 0.55);

      // Subtopic connectors (dashed wavy lines, always visible)
      if (topic.children?.length) {
        topic.children.forEach((sub, si) => {
          const ctrlX = (x + sub._x) / 2;
          const ctrlY = (y + sub._y) / 2 - 8;

          linkGroup.append('path')
            .datum(sub)
            .attr('d', `M${x},${y} Q${ctrlX},${ctrlY} ${sub._x},${sub._y}`)
            .attr('fill', 'none')
            .attr('stroke', color)
            .attr('stroke-width', 2.2)
            .attr('stroke-opacity', 0.65) // Always visible!
            .attr('stroke-dasharray', '2,3')
            .attr('class', `mm-sub-link mm-sub-link-${topic.id}`);
        });
      }
    });

    // ── Draw subtopic nodes (pills, always visible) ─────────────
    topicPositions.forEach(({ color, topic }) => {
      if (!topic.children?.length) return;
      topic.children.forEach(sub => {
        if (sub._x === undefined) return;
        const subG = g.append('g')
          .attr('transform', `translate(${sub._x},${sub._y})`)
          .attr('class', `mm-sub-node mm-sub-node-${topic.id}`)
          .datum(sub)
          .style('cursor', 'pointer')
          .style('opacity', 1) // Always visible!
          .on('click', (event) => {
            event.stopPropagation();
            window.App?.openTopicPanel(sub.parentTopic);
          });

        // Subtopic capsule pill
        const subW = 45 + sub.label.length * 4;
        const subH = 12;
        subG.append('rect')
          .attr('x', -subW)
          .attr('y', -subH)
          .attr('width', subW * 2)
          .attr('height', subH * 2)
          .attr('rx', subH)
          .attr('fill', isDark ? d3.color(color).darker(1.2).toString() : d3.color(color).brighter(1.4).toString())
          .attr('stroke', color)
          .attr('stroke-width', 1.5);

        // Sub label text
        subG.append('text')
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', '10.5px')
          .attr('font-family', 'Inter, system-ui, sans-serif')
          .attr('fill', isDark ? '#ffffff' : '#0f172a')
          .attr('font-weight', '700')
          .text(sub.label);
      });
    });

    // ── Draw topic nodes (Capsules / Pills) ───────────────────
    topicPositions.forEach(({ x, y, color, angle, topic }, idx) => {
      const imp = topic.importance || 5;
      const freq = topic.frequency || 0;
      const r = 28 + imp * 1.5;
      const rx = r * 1.25;
      const ry = r * 0.72;
      const isHigh = imp >= 9;

      const nodeG = g.append('g')
        .attr('transform', `translate(${x},${y})`)
        .attr('class', 'mm-topic-node')
        .style('cursor', 'pointer')
        .datum({ label: topic.label, importance: imp, frequency: freq, topicId: topic.id });

      // Outer pill capsule (high importance accent)
      if (isHigh) {
        nodeG.append('rect')
          .attr('x', -rx - 4)
          .attr('y', -ry - 4)
          .attr('width', rx * 2 + 8)
          .attr('height', ry * 2 + 8)
          .attr('rx', ry + 4)
          .attr('fill', 'none')
          .attr('stroke', '#ef4444')
          .attr('stroke-opacity', 0.6)
          .attr('stroke-width', 2);
      }

      // Main capsule pill shape
      nodeG.append('rect')
        .attr('x', -rx)
        .attr('y', -ry)
        .attr('width', rx * 2)
        .attr('height', ry * 2)
        .attr('rx', ry)
        .attr('fill', isDark ? d3.color(color).darker(0.8).toString() : d3.color(color).brighter(1.2).toString())
        .attr('stroke', color)
        .attr('stroke-width', 2.5)
        .attr('class', 'mm-node-bubble');

      // Word wrapping inside bubble
      const words = topic.label.split(' ');
      const maxCharsPerLine = Math.floor(rx * 0.5);
      let lines = [''];
      words.forEach(w => {
        const test = lines[lines.length - 1] + (lines[lines.length - 1] ? ' ' : '') + w;
        if (test.length > maxCharsPerLine && lines[lines.length - 1]) {
          lines.push(w);
        } else {
          lines[lines.length - 1] = test;
        }
      });
      lines = lines.slice(0, 3);
      const lineH = 13;
      const totalH = (lines.length - 1) * lineH;

      const textG = nodeG.append('text')
        .attr('text-anchor', 'middle')
        .attr('font-family', 'Inter, system-ui, sans-serif')
        .attr('font-size', lines.length > 2 ? '11px' : '13px')
        .attr('font-weight', '700')
        .attr('fill', isDark ? '#ffffff' : '#0f172a')
        .attr('pointer-events', 'none');

      lines.forEach((line, li) => {
        textG.append('tspan')
          .attr('x', 0)
          .attr('dy', li === 0 ? -totalH / 2 + 2 : lineH)
          .text(line);
      });

      // PYQ count badge (yellow capsule)
      if (freq > 0) {
        const badgeG = nodeG.append('g').attr('transform', `translate(${rx - 3}, ${-ry + 3})`);
        badgeG.append('circle')
          .attr('r', 10.5)
          .attr('fill', '#fbbf24')
          .attr('stroke', isDark ? '#fff' : '#000')
          .attr('stroke-width', 1);
        
        badgeG.append('text')
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', '10px')
          .attr('font-weight', '800')
          .attr('font-family', 'Inter, system-ui, sans-serif')
          .attr('fill', '#000')
          .text(freq);
      }

      // Interactive hover effects
      nodeG
        .on('mouseover', function(event) {
          d3.select(this).select('.mm-node-bubble')
            .transition().duration(200)
            .attr('stroke-width', isHigh ? 4 : 3.5)
            .attr('transform', 'scale(1.05)');
          
          showTooltip(event, { label: topic.label, importance: imp, frequency: freq });
        })
        .on('mouseout', function() {
          d3.select(this).select('.mm-node-bubble')
            .transition().duration(200)
            .attr('stroke-width', isHigh ? 3 : 2)
            .attr('transform', 'scale(1)');
          
          hideTooltip();
        })
        .on('click', (event) => {
          event.stopPropagation();
          window.App?.openTopicPanel(topic.id);
        });
    });

    // ── Draw center (root) node (Vector Sunburst Icon) ────────
    const rootG = g.append('g').attr('transform', `translate(${cx},${cy})`).style('cursor', 'pointer');

    // Draw clean vector sunburst rays
    const numRays = 16;
    const rayGroup = rootG.append('g').attr('class', 'mm-root-rays');
    for (let i = 0; i < numRays; i++) {
      const angle = (2 * Math.PI * i) / numRays;
      const x1 = Math.cos(angle) * 58;
      const y1 = Math.sin(angle) * 58;
      const x2 = Math.cos(angle) * 78;
      const y2 = Math.sin(angle) * 78;
      
      rayGroup.append('line')
        .attr('x1', x1)
        .attr('y1', y1)
        .attr('x2', x2)
        .attr('y2', y2)
        .attr('stroke', '#f97316') // sun orange
        .attr('stroke-width', 4)
        .attr('stroke-linecap', 'round');
    }

    // Double Ring for central sun icon
    rootG.append('circle')
      .attr('r', 55)
      .attr('fill', '#f59e0b')
      .attr('stroke', '#ca8a04')
      .attr('stroke-width', 2.5);

    rootG.append('circle')
      .attr('r', 47)
      .attr('fill', '#fbbf24')
      .attr('stroke', '#d97706')
      .attr('stroke-width', 1.5);

    // Center icon emoji
    rootG.append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '28px')
      .text(treeData.icon);

    // Title above the sun icon (Holiday style)
    const titleGroup = rootG.append('g').attr('transform', 'translate(0, -90)');
    
    titleGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', '24px')
      .attr('font-weight', '900')
      .attr('fill', isDark ? '#ffffff' : '#0f172a')
      .attr('font-family', 'Inter, system-ui, sans-serif')
      .text(`Unit ${unit}`);

    const subtitleText = treeData.subtitle.length > 35 ? treeData.subtitle.slice(0, 32) + '…' : treeData.subtitle;
    titleGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('y', 20)
      .attr('font-size', '13.5px')
      .attr('font-weight', '600')
      .attr('fill', isDark ? '#94a3b8' : '#475569')
      .attr('font-family', 'Inter, system-ui, sans-serif')
      .text(subtitleText);

    rootG.on('click', (event) => {
      event.stopPropagation();
      svg.transition().duration(600).call(zoom.transform, d3.zoomIdentity.translate(cx, cy).scale(0.85).translate(-cx, -cy));
    });

    // ── Entrance animation ────────────────────────────────────
    g.style('opacity', 0)
      .transition().duration(600).ease(d3.easeCubicOut)
      .style('opacity', 1);

    // Auto fit
    const scale = Math.min(W, H) / (R2 * 2.3);
    setTimeout(() => {
      svg.transition().duration(700).ease(d3.easeCubicOut)
        .call(zoom.transform, d3.zoomIdentity
          .translate(W / 2, H / 2)
          .scale(scale)
          .translate(-cx, -cy));
    }, 100);

    // Controls & panels
    addZoomControls();
    addInfoPanel(treeData, palette);
  }

  // ── Tooltip ───────────────────────────────────────────────────
  function showTooltip(event, d) {
    const tt = document.getElementById('mm-tooltip');
    if (!tt) return;
    const imp = DataUtils.getImportanceLevel(d.importance);
    const stars = '★'.repeat(Math.round(d.importance / 2)) + '☆'.repeat(5 - Math.round(d.importance / 2));
    tt.innerHTML = `
      <div class="mm-tooltip-title">${d.label}</div>
      <div class="mm-tooltip-stars">${stars}</div>
      ${d.frequency > 0 ? `<div class="mm-tooltip-freq">📊 ${d.frequency} PYQ${d.frequency > 1 ? 's' : ''} from past exams</div>` : '<div class="mm-tooltip-freq" style="color:var(--text-muted)">No PYQs yet</div>'}
      <div class="mm-tooltip-hint">Tap/Click to study this topic 📖</div>
    `;
    const rect = document.getElementById('mindmap-svg').getBoundingClientRect();
    let lx = event.clientX - rect.left + 16;
    let ly = event.clientY - rect.top - 30;
    if (lx + 220 > rect.width) lx = event.clientX - rect.left - 220;
    if (ly < 0) ly = event.clientY - rect.top + 20;
    tt.style.left = lx + 'px';
    tt.style.top  = ly + 'px';
    tt.classList.add('visible');
  }

  // Hide Tooltip
  function hideTooltip() {
    const tt = document.getElementById('mm-tooltip');
    if (tt) tt.classList.remove('visible');
  }

  // ── Info panel (legend overlay) ──────────────────────────────
  function addInfoPanel(treeData, palette) {
    const wrapper = document.getElementById('mindmap-svg')?.parentElement;
    document.getElementById('mm-info-panel')?.remove();

    const freq = DataUtils.computeTopicFrequency();
    const totalPYQ = treeData.children.reduce((s, t) => s + (freq[t.id] || 0), 0);
    const highTopics = treeData.children.filter(t => t.importance >= 8).length;

    const panel = document.createElement('div');
    panel.id = 'mm-info-panel';
    panel.className = 'mm-info-panel';
    panel.innerHTML = `
      <div class="mm-info-row"><span class="mm-info-dot" style="background:#fbbf24"></span><span>Badge = PYQ count</span></div>
      <div class="mm-info-row"><span class="mm-info-dot" style="background:#ef4444"></span><span>Red border = High importance</span></div>
      <div class="mm-info-row"><span class="mm-info-dot" style="background:#3b82f6"></span><span>Dotted lines connect subtopics</span></div>
      <div class="mm-info-divider"></div>
      <div class="mm-info-stat"><span>${treeData.children.length}</span> Topics</div>
      <div class="mm-info-stat"><span>${totalPYQ}</span> PYQs</div>
      <div class="mm-info-stat"><span>${highTopics}</span> High-imp</div>
    `;
    wrapper?.appendChild(panel);
  }

  // ── Zoom controls ─────────────────────────────────────────────
  function addZoomControls() {
    const wrapper = document.getElementById('mindmap-svg')?.parentElement;
    document.getElementById('mm-zoom-controls')?.remove();

    const ctrl = document.createElement('div');
    ctrl.id = 'mm-zoom-controls';
    ctrl.className = 'mm-zoom-controls';
    ctrl.innerHTML = `
      <button class="mm-zoom-btn" id="mm-zoom-in"  title="Zoom In">+</button>
      <button class="mm-zoom-btn" id="mm-zoom-fit" title="Reset View">⊙</button>
      <button class="mm-zoom-btn" id="mm-zoom-out" title="Zoom Out">−</button>
    `;
    wrapper?.appendChild(ctrl);

    document.getElementById('mm-zoom-in').onclick  = () => svg.transition().duration(300).call(zoom.scaleBy, 1.35);
    document.getElementById('mm-zoom-out').onclick = () => svg.transition().duration(300).call(zoom.scaleBy, 0.75);
    document.getElementById('mm-zoom-fit').onclick = () => {
      const el = document.getElementById('mindmap-svg');
      const W = el.clientWidth, H = el.clientHeight;
      svg.transition().duration(600).call(zoom.transform, d3.zoomIdentity.translate(W / 2, H / 2).scale(0.85).translate(-W / 2, -H / 2));
    };
  }

  // ── Search highlight ──────────────────────────────────────────
  function searchNodes(term) {
    if (!g) return;
    const q = term.toLowerCase().trim();

    // Highlight matching topics
    g.selectAll('.mm-topic-node')
      .style('opacity', d => !q || !d ? 1 : d.label?.toLowerCase().includes(q) ? 1 : 0.2)
      .select('.mm-node-bubble')
      .attr('stroke', d => !q || !d ? null
        : d.label?.toLowerCase().includes(q) ? '#fbbf24' : null)
      .attr('stroke-width', d => !q || !d ? null
        : d.label?.toLowerCase().includes(q) ? 4.5 : null);
        
    // Show/highlight matching subtopics
    if (q) {
      g.selectAll('.mm-sub-node').each(function(sub) {
        if (!sub) return;
        const matches = sub.label.toLowerCase().includes(q);
        d3.select(this)
          .transition().duration(200)
          .style('opacity', matches ? 1 : 0.1);
      });
      g.selectAll('.mm-sub-link').each(function(sub) {
        if (!sub) return;
        const matches = sub.label.toLowerCase().includes(q);
        d3.select(this)
          .transition().duration(200)
          .attr('stroke-opacity', matches ? 0.85 : 0.15);
      });
    } else {
      g.selectAll('.mm-sub-node').style('opacity', 1);
      g.selectAll('.mm-sub-link').attr('stroke-opacity', 0.65);
    }
  }

  // ── Event listeners ───────────────────────────────────────────
  function initEventListeners() {
    document.querySelectorAll('.mindmap-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.mindmap-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        render(parseInt(tab.dataset.unit));
      });
    });

    const searchEl = document.getElementById('mindmap-search');
    if (searchEl) {
      searchEl.addEventListener('input', e => searchNodes(e.target.value));
    }
  }

  function init() {
    initEventListeners();

    const wrapper = document.getElementById('mindmap-svg')?.parentElement;
    if (wrapper && !document.getElementById('mm-tooltip')) {
      const tt = document.createElement('div');
      tt.id = 'mm-tooltip';
      tt.className = 'mm-tooltip';
      wrapper.appendChild(tt);
    }

    render(currentUnit || 1);
  }

  return { init, render, searchNodes };
})();

window.MindMap = MindMap;
