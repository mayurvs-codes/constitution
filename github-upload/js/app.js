// ============================================================
// APP.JS — Router, State Manager, Topic Panel, Homepage
// ============================================================

const App = (() => {
  let currentPage = 'home';
  let topicPanelOpen = false;

  // ── Toast Notifications ─────────────────────────────────
  function toast(message, type = 'info', icon = '') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const icons = { success: '✅', error: '❌', info: 'ℹ️', bookmark: '🔖', complete: '✔️' };
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.innerHTML = `<span>${icon || icons[type] || '📌'}</span>${message}`;
    container.appendChild(t);
    setTimeout(() => {
      t.style.animation = 'toastOut 0.3s ease forwards';
      setTimeout(() => t.remove(), 300);
    }, 2800);
  }

  // ── Theme ────────────────────────────────────────────────
  function initTheme() {
    const saved = Progress.getTheme();
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
  }
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    Progress.setTheme(next);
    updateThemeIcon(next);
    // Re-render analytics charts if on analytics page
    if (currentPage === 'analytics') {
      setTimeout(() => Analytics.render(), 100);
    }
  }
  function updateThemeIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // ── Navigation ───────────────────────────────────────────
  function navigate(page) {
    if (currentPage === page) return;

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    const pageEl = document.getElementById(`page-${page}`);
    if (pageEl) pageEl.classList.add('active');

    const navBtn = document.querySelector(`.nav-btn[data-page="${page}"]`);
    if (navBtn) navBtn.classList.add('active');

    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Initialize page-specific modules
    switch (page) {
      case 'mindmap':
        setTimeout(() => MindMap.init(), 50);
        break;
      case 'exam':
        Exam.init();
        break;
      case 'flashcards':
        Flashcards.init();
        break;
      case 'analytics':
        Analytics.init();
        break;
      case 'revision':
        renderRevision();
        break;
      case 'bookmarks':
        renderBookmarks();
        break;
      case 'home':
        refreshHomeStats();
        break;
    }

    // Close mobile nav
    document.getElementById('navbar-nav')?.classList.remove('mobile-open');
  }

  // ── Reading Progress Bar ──────────────────────────────────
  function initReadingProgress() {
    const bar = document.getElementById('reading-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / (total || 1)) * 100;
      bar.style.width = progress + '%';
    });
  }

  // ── Scroll to Top ─────────────────────────────────────────
  function initScrollTop() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ── Particle Animation ────────────────────────────────────
  function initParticles() {
    const container = document.querySelector('.hero-particles');
    if (!container) return;
    const colors = ['rgba(59,130,246,0.6)', 'rgba(251,191,36,0.5)', 'rgba(139,92,246,0.5)', 'rgba(255,255,255,0.3)'];
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 6 + 2;
      p.style.cssText = `
        width:${size}px;height:${size}px;
        left:${Math.random()*100}%;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        animation-duration:${Math.random()*15+10}s;
        animation-delay:${Math.random()*10}s;
      `;
      container.appendChild(p);
    }
  }

  // ── Homepage ──────────────────────────────────────────────
  function refreshHomeStats() {
    const stats = Progress.getGlobalStats();
    // Update progress bars
    [1,2,3,4].forEach(u => {
      const prog = Progress.getUnitProgress(u);
      const pct = Math.min(100, prog.percent || 0);  // guard against NaN/over 100
      const fill = document.querySelector(`.unit-card-${u} .unit-progress-fill`);
      if (fill) fill.style.width = pct + '%';
      const pctEl = document.querySelector(`.unit-card-${u} .unit-progress-percent`);
      if (pctEl) pctEl.textContent = pct + '%';
    });

    // Streak
    const streakEl = document.getElementById('streak-count');
    if (streakEl) streakEl.textContent = stats.streak + ' 🔥';

    // Global stats
    const topicsDone = document.getElementById('stat-topics-done');
    if (topicsDone) topicsDone.textContent = `${stats.completedTopics}/${stats.totalTopics}`;
    const avgScore = document.getElementById('stat-avg-score');
    if (avgScore) avgScore.textContent = (stats.avgScore || 0) + '%';
  }

  // ── Topic Panel ───────────────────────────────────────────
  function openTopicPanel(topicId) {
    const topic = DataUtils.getTopicById(topicId);
    if (!topic) {
      toast('Topic not found', 'error');
      return;
    }

    const overlay = document.getElementById('topic-panel-overlay');
    const panel = document.getElementById('topic-panel');
    if (!overlay || !panel) return;

    renderTopicPanel(topic, panel);
    overlay.classList.add('open');
    panel.classList.add('open');
    topicPanelOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function closeTopicPanel() {
    const overlay = document.getElementById('topic-panel-overlay');
    const panel = document.getElementById('topic-panel');
    overlay?.classList.remove('open');
    panel?.classList.remove('open');
    topicPanelOpen = false;
    document.body.style.overflow = '';
  }

  function renderTopicPanel(topic, panel) {
    const freq = DataUtils.computeTopicFrequency();
    const topicPYQs = DataUtils.getPYQsByTopic(topic.id);
    const imp = DataUtils.getImportanceLevel(topic.importanceScore);
    const isBookmarked = Progress.isBookmarked(topic.id);
    const isCompleted = Progress.isCompleted(topic.id);
    const unitMeta = UNIT_META[topic.unit - 1];
    const unitColors = ['#3b82f6','#10b981','#8b5cf6','#f59e0b'];
    const unitColor = unitColors[topic.unit - 1];
    const pyqYears = [...new Set(topicPYQs.map(q => q.year))].sort();
    const notes = Progress.getNotes(topic.id);
    const diffClass = { easy: 'diff-easy', medium: 'diff-medium', hard: 'diff-hard' }[topic.difficulty] || 'diff-medium';

    panel.innerHTML = `
      <div class="topic-panel-header">
        <div class="topic-panel-header-info">
          <span class="topic-panel-unit-badge" style="background:${unitColor}22;color:${unitColor};border:1px solid ${unitColor}44;">
            ${unitMeta.icon} Unit ${topic.unit}
          </span>
          <h2 class="topic-panel-title">${topic.title}</h2>
          <div style="display:flex;gap:0.5rem;align-items:center;margin-top:0.4rem;flex-wrap:wrap;">
            <span class="diff-badge ${diffClass}">${topic.difficulty}</span>
            <span style="font-size:0.75rem;color:var(--text-muted);">${imp.emoji} ${imp.label} Importance</span>
            ${topicPYQs.length ? `<span style="font-size:0.75rem;font-weight:700;color:var(--gold-300);">📊 ${topicPYQs.length} PYQ${topicPYQs.length>1?'s':''}</span>` : ''}
            ${pyqYears.map(y => `<span class="pyq-year-badge y${y}">${y}</span>`).join('')}
          </div>
        </div>
        <button class="topic-panel-close" id="panel-close-btn">✕</button>
      </div>

      <div class="topic-panel-body">
        <!-- Action Buttons -->
        <div class="topic-actions">
          <button class="topic-action-btn ${isBookmarked?'active':''}" id="bookmark-btn">
            🔖 ${isBookmarked?'Bookmarked':'Bookmark'}
          </button>
          <button class="topic-action-btn ${isCompleted?'completed':''}" id="complete-btn">
            ${isCompleted?'✅ Completed':'☑️ Mark Complete'}
          </button>
        </div>

        <!-- Importance Bar -->
        <div class="importance-bar" style="margin-bottom:1.25rem;">
          <span style="font-size:0.75rem;color:var(--text-muted);">Importance:</span>
          <div class="importance-dots">
            ${Array.from({length:10},(_,i) => `
              <div class="importance-dot ${i < topic.importanceScore ? 'filled' : ''}"></div>
            `).join('')}
          </div>
          <span style="font-size:0.75rem;font-weight:700;color:var(--gold-300);">${topic.importanceScore}/10</span>
        </div>

        <!-- Tabs Navigation -->
        <div class="panel-tabs">
          <button class="panel-tab-btn active" data-tab="study">📖 Study Content</button>
          <button class="panel-tab-btn" data-tab="facts">⚖️ Key Facts</button>
          <button class="panel-tab-btn" data-tab="pyqs">
            📊 PYQs & Notes
            ${topicPYQs.length ? `<span class="tab-badge">${topicPYQs.length}</span>` : ''}
          </button>
        </div>

        <!-- Tabs Contents Container -->
        <div class="panel-tab-container">
          <!-- TAB 1: STUDY CONTENT -->
          <div id="tab-study" class="panel-tab-content active">
            <!-- Overview -->
            <div class="topic-section">
              <div class="topic-section-title">📋 Overview</div>
              <p class="topic-explanation">${topic.explanation}</p>
            </div>

            <!-- Detailed Explanation -->
            <div class="topic-section">
              <div class="topic-section-title">📖 Detailed Explanation</div>
              <div class="topic-detailed">${renderMarkdown(topic.detailed)}</div>
            </div>

            <!-- Mnemonics -->
            ${topic.mnemonics ? `
              <div class="topic-section">
                <div class="topic-section-title">🧠 Memory Trick</div>
                <div class="mnemonic-box">
                  <p style="font-size:0.875rem;line-height:1.7;">${topic.mnemonics}</p>
                </div>
              </div>
            ` : ''}
          </div>

          <!-- TAB 2: KEY FACTS -->
          <div id="tab-facts" class="panel-tab-content">
            <!-- Important Articles -->
            ${topic.articles && topic.articles.length ? `
              <div class="topic-section">
                <div class="topic-section-title">📜 Important Articles / Provisions</div>
                <div class="tags-list">
                  ${topic.articles.map(a => `<span class="tag tag-blue">📜 ${a}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Amendments -->
            ${topic.amendments && topic.amendments.length && topic.amendments[0] !== 'N/A' ? `
              <div class="topic-section">
                <div class="topic-section-title">🔄 Important Amendments</div>
                <div class="tags-list">
                  ${topic.amendments.map(a => `<span class="tag tag-gold">🔄 ${a}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Cases -->
            ${topic.cases && topic.cases.length ? `
              <div class="topic-section">
                <div class="topic-section-title">🏛️ Important Cases</div>
                ${topic.cases.map(c => `
                  <div class="case-citation">
                    <span class="case-icon">⚖️</span>
                    <span>${c}</span>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            <!-- Quick Revision -->
            <div class="topic-section">
              <div class="topic-section-title">⚡ Quick Revision Notes</div>
              <div class="quick-revision-box">
                <p style="font-size:0.875rem;color:var(--text-secondary);line-height:1.7;">${topic.quickRevision}</p>
              </div>
            </div>
          </div>

          <!-- TAB 3: PYQS & NOTES -->
          <div id="tab-pyqs" class="panel-tab-content">
            <!-- PYQ Analysis -->
            <div class="topic-section">
              <div class="topic-section-title">📊 PYQ Analysis</div>
              ${topicPYQs.length ? `
                <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;flex-wrap:wrap;">
                  <span style="font-weight:700;font-size:1.1rem;color:var(--gold-300);">Appeared ${topicPYQs.length} time${topicPYQs.length>1?'s':''}</span>
                  <div class="pyq-year-badges">
                    ${pyqYears.map(y => `<span class="pyq-year-badge y${y}">${y}</span>`).join('')}
                  </div>
                </div>
                ${topicPYQs.map(q => `
                  <div class="pyq-question-card">
                    <div class="pyq-question-meta">
                      <span class="pyq-year-chip">${q.year}</span>
                      <span class="pyq-source-chip">${q.source}</span>
                    </div>
                    <div class="pyq-question-text">${q.question}</div>
                    <div class="tags-list" style="margin-top:0.5rem;">
                      ${q.options.map((opt,i) => {
                        const letter = ['A','B','C','D'][i];
                        const isAns = letter === q.answer;
                        return `<span class="tag ${isAns?'tag-green':'tag-blue'}">${isAns?'✓ ':''}${opt}</span>`;
                      }).join('')}
                    </div>
                    <div style="margin-top:0.5rem;font-size:0.8rem;color:var(--text-muted);">${q.explanation}</div>
                  </div>
                `).join('')}
              ` : `
                <div style="text-align:center;padding:1.5rem;color:var(--text-muted);font-size:0.875rem;">
                  <div style="font-size:1.5rem;margin-bottom:0.5rem;">📭</div>
                  No PYQs found for this specific topic yet. Topic may be important for upcoming exams.
                </div>
              `}
            </div>

            <!-- Notes -->
            <div class="topic-section">
              <div class="topic-section-title">📝 My Notes</div>
              <textarea class="notes-textarea" id="topic-notes" placeholder="Write your notes here...">${notes}</textarea>
              <div style="display:flex;align-items:center;justify-content:flex-end;gap:0.5rem;margin-top:0.5rem;">
                <span class="notes-saved-indicator" id="notes-saved-indicator">✓ Saved</span>
                <button class="btn btn-outline btn-sm" id="save-notes-btn">Save Notes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Panel events
    document.getElementById('panel-close-btn')?.addEventListener('click', closeTopicPanel);

    // Tab switching event handlers
    const tabBtns = panel.querySelectorAll('.panel-tab-btn');
    const tabContents = panel.querySelectorAll('.panel-tab-content');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        panel.querySelector(`#tab-${tabId}`).classList.add('active');
      });
    });

    document.getElementById('bookmark-btn')?.addEventListener('click', (e) => {
      const added = Progress.toggleBookmark(topic.id);
      e.currentTarget.innerHTML = added ? '🔖 Bookmarked' : '🔖 Bookmark';
      e.currentTarget.classList.toggle('active', added);
      toast(added ? 'Bookmarked!' : 'Bookmark removed', added ? 'success' : 'info', added ? '🔖' : '');
    });

    document.getElementById('complete-btn')?.addEventListener('click', (e) => {
      const wasCompleted = Progress.isCompleted(topic.id);
      if (wasCompleted) {
        Progress.markIncomplete(topic.id);
        e.currentTarget.innerHTML = '☑️ Mark Complete';
        e.currentTarget.classList.remove('completed');
        toast('Marked incomplete', 'info');
      } else {
        Progress.markComplete(topic.id);
        e.currentTarget.innerHTML = '✅ Completed';
        e.currentTarget.classList.add('completed');
        toast('Topic completed! 🎉', 'success');
        refreshHomeStats();
      }
    });

    // Notes auto-save
    let notesTimeout;
    document.getElementById('topic-notes')?.addEventListener('input', (e) => {
      clearTimeout(notesTimeout);
      notesTimeout = setTimeout(() => {
        Progress.saveNotes(topic.id, e.target.value);
        const ind = document.getElementById('notes-saved-indicator');
        if (ind) { ind.classList.add('visible'); setTimeout(() => ind.classList.remove('visible'), 2000); }
      }, 800);
    });

    document.getElementById('save-notes-btn')?.addEventListener('click', () => {
      const text = document.getElementById('topic-notes')?.value || '';
      Progress.saveNotes(topic.id, text);
      const ind = document.getElementById('notes-saved-indicator');
      if (ind) { ind.classList.add('visible'); setTimeout(() => ind.classList.remove('visible'), 2000); }
      toast('Notes saved!', 'success');
    });
  }

  // Simple Markdown to HTML with line-by-line parsing
  function renderMarkdown(text) {
    if (!text) return '';
    
    let html = text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
    
    const lines = html.split('\n');
    const result = [];
    let inTable = false;
    let tableRows = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      let trimmed = line.trim();
      
      // Handle table
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        inTable = true;
        if (/^\|[\s:\-|]*\|$/.test(trimmed)) {
          continue;
        }
        const cells = trimmed.split('|').slice(1, -1).map(c => c.trim());
        tableRows.push(cells);
        continue;
      } else {
        if (inTable) {
          result.push(renderTableHTML(tableRows));
          tableRows = [];
          inTable = false;
        }
      }
      
      // Handle headers
      if (trimmed.startsWith('### ')) {
        result.push(`<h5 style="color:var(--text-primary);margin:1.25rem 0 0.5rem;font-weight:700;">${trimmed.substring(4)}</h5>`);
      } else if (trimmed.startsWith('## ')) {
        result.push(`<h4 style="color:var(--blue-400);margin:1.5rem 0 0.75rem;font-weight:700;">${trimmed.substring(3)}</h4>`);
      } else if (trimmed.startsWith('# ')) {
        result.push(`<h3 style="color:var(--blue-500);margin:1.75rem 0 1rem;font-weight:700;">${trimmed.substring(2)}</h3>`);
      }
      // Handle list items (support nested lists with leading spaces)
      else if (/^\s*[-*]\s+(.+)$/.test(line)) {
        const match = line.match(/^\s*[-*]\s+(.+)$/);
        const leadingSpaces = line.match(/^(\s*)/)[0].length;
        const indent = leadingSpaces * 16 + 20;
        result.push(`<div style="padding:0.25rem 0 0.25rem ${indent}px;color:var(--text-secondary);position:relative;line-height:1.65;">` +
                    `<span style="position:absolute;left:${leadingSpaces * 16}px;color:var(--blue-400);font-weight:600;">•</span>` +
                    `${match[1]}</div>`);
      } else if (/^\s*\d+\.\s+(.+)$/.test(line)) {
        const match = line.match(/^\s*(\d+)\.\s+(.+)$/);
        const leadingSpaces = line.match(/^(\s*)/)[0].length;
        const num = match[1];
        const content = match[2];
        const indent = leadingSpaces * 16 + 20;
        result.push(`<div style="padding:0.25rem 0 0.25rem ${indent}px;color:var(--text-secondary);position:relative;line-height:1.65;">` +
                    `<span style="position:absolute;left:${leadingSpaces * 16}px;color:var(--blue-400);font-weight:600;">${num}.</span>` +
                    `${content}</div>`);
      }
      // Handle paragraphs
      else {
        if (trimmed === '') {
          continue;
        } else {
          result.push(`<p style="margin-bottom:0.75rem;line-height:1.75;">${trimmed}</p>`);
        }
      }
    }
    
    if (inTable) {
      result.push(renderTableHTML(tableRows));
    }
    
    return result.join('\n');
  }

  function renderTableHTML(rows) {
    if (!rows.length) return '';
    let html = '<div class="table-container" style="overflow-x:auto;margin:1.25rem 0;border:1px solid var(--border);border-radius:var(--radius-md);background:var(--bg-elevated);"><table style="width:100%;border-collapse:collapse;text-align:left;font-size:0.9rem;">';
    
    rows.forEach((row, rowIndex) => {
      html += '<tr style="' + (rowIndex === 0 ? 'background:rgba(59,130,246,0.1);border-bottom:2px solid var(--border);' : 'border-bottom:1px solid var(--border);') + '">';
      row.forEach(cell => {
        const tag = rowIndex === 0 ? 'th' : 'td';
        const padding = rowIndex === 0 ? '0.75rem 1rem' : '0.6rem 1rem';
        const weight = rowIndex === 0 ? '700' : '400';
        const color = rowIndex === 0 ? 'var(--text-primary)' : 'var(--text-secondary)';
        html += `<${tag} style="padding:${padding};font-weight:${weight};color:${color};border-right:1px solid var(--border);">${cell}</${tag}>`;
      });
      html += '</tr>';
    });
    
    html += '</table></div>';
    return html;
  }

  // ── Smart Revision ────────────────────────────────────────
  function renderRevision() {
    const el = document.getElementById('page-revision');
    if (!el) return;
    const ranked = DataUtils.getRankedTopics();

    el.innerHTML = `
      <div class="revision-page">
        <div class="revision-header">
          <div style="font-size:2.5rem;margin-bottom:0.75rem;">🎯</div>
          <h2>1-Day Before Exam Revision</h2>
          <p style="color:var(--text-secondary);margin-top:0.5rem;">Most important topics, repeated PYQs, and must-know facts — curated for exam day</p>
        </div>

        <div class="revision-unit-tabs">
          ${[1,2,3,4].map(u => `
            <button class="revision-unit-tab ${u===1?'active':''}" data-unit="${u}">
              ${UNIT_META[u-1].icon} Unit ${u}
            </button>
          `).join('')}
        </div>

        <div id="revision-content">
          ${renderRevisionUnit(1, ranked)}
        </div>
      </div>
    `;

    document.querySelectorAll('.revision-unit-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.revision-unit-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const unit = parseInt(tab.dataset.unit);
        document.getElementById('revision-content').innerHTML = renderRevisionUnit(unit, ranked);
        attachRevisionClicks();
      });
    });

    attachRevisionClicks();
  }

  function renderRevisionUnit(unit, ranked) {
    const unitTopics = ranked.filter(t => t.unit === unit);
    const top10 = unitTopics.slice(0, 10);
    const topPYQs = DataUtils.getPYQsByUnit(unit)
      .sort((a,b) => {
        const fa = DataUtils.computeTopicFrequency()[a.topic] || 0;
        const fb = DataUtils.computeTopicFrequency()[b.topic] || 0;
        return fb - fa;
      }).slice(0, 8);

    const importantArticles = [...new Set(
      unitTopics.flatMap(t => t.articles || [])
    )].slice(0, 10);

    return `
      <!-- Top Topics -->
      <div class="revision-section">
        <div class="revision-section-title">🔥 Top ${top10.length} Most Important Topics</div>
        <div class="revision-topic-list">
          ${top10.map((t, i) => `
            <div class="revision-topic-item" data-topic="${t.id}">
              <div class="revision-importance">${DataUtils.getImportanceLevel(t.importanceScore).emoji}</div>
              <div class="revision-topic-name">${i+1}. ${t.title}</div>
              ${t.frequency ? `<span class="revision-freq-badge">📊 ${t.frequency} PYQs</span>` : ''}
              ${t.pyqYears && t.pyqYears.length ? `<span style="font-size:0.7rem;color:var(--text-muted);">${t.pyqYears.join(', ')}</span>` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Most Repeated PYQs -->
      <div class="revision-section">
        <div class="revision-section-title">📝 Must-Practice PYQs (Top ${topPYQs.length})</div>
        ${topPYQs.map(q => `
          <div class="pyq-question-card" style="margin-bottom:0.75rem;">
            <div class="pyq-question-meta">
              <span class="pyq-year-chip">${q.year}</span>
              <span class="pyq-source-chip">${q.source}</span>
            </div>
            <div class="pyq-question-text">${q.question}</div>
            <div style="margin-top:0.5rem;">
              <span class="pyq-answer-chip">✓ Answer: ${q.answer}</span>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Must-Know Articles -->
      ${importantArticles.length ? `
        <div class="revision-section">
          <div class="revision-section-title">📜 Must-Remember Articles & Provisions</div>
          <div class="tags-list">
            ${importantArticles.map(a => `<span class="tag tag-blue">📜 ${a}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Quick Facts -->
      <div class="revision-section">
        <div class="revision-section-title">⚡ Quick Revision Snippets</div>
        ${top10.slice(0,5).map(t => `
          <div class="quick-revision-box" style="margin-bottom:0.75rem;">
            <div style="font-weight:700;font-size:0.875rem;margin-bottom:0.4rem;">${t.title}</div>
            <p style="font-size:0.825rem;color:var(--text-secondary);line-height:1.6;">${t.quickRevision}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  function attachRevisionClicks() {
    document.querySelectorAll('.revision-topic-item').forEach(el => {
      el.addEventListener('click', () => {
        const topicId = el.dataset.topic;
        if (topicId) openTopicPanel(topicId);
      });
    });
  }

  // ── Bookmarks ─────────────────────────────────────────────
  function renderBookmarks() {
    const el = document.getElementById('page-bookmarks');
    if (!el) return;
    const bookmarks = Progress.getBookmarks();
    const topics = bookmarks.map(id => DataUtils.getTopicById(id)).filter(Boolean);
    const freq = DataUtils.computeTopicFrequency();

    el.innerHTML = `
      <div style="padding:1.5rem;max-width:1200px;margin:0 auto;">
        <div class="section-header" style="text-align:left;margin-bottom:1.5rem;">
          <div class="section-label">🔖 Bookmarks</div>
          <h2>Saved Topics</h2>
          <p>${topics.length} topic${topics.length !== 1 ? 's' : ''} bookmarked</p>
        </div>
        ${topics.length ? `
          <div class="bookmarks-grid">
            ${topics.map(t => {
              const imp = DataUtils.getImportanceLevel(t.importanceScore);
              const unitMeta = UNIT_META[t.unit - 1];
              return `
                <div class="bookmark-card" data-topic="${t.id}" onclick="App.openTopicPanel('${t.id}')">
                  <button class="bookmark-remove" data-remove="${t.id}" onclick="event.stopPropagation();App.removeBookmark('${t.id}')">✕</button>
                  <div style="font-size:1.5rem;margin-bottom:0.5rem;">${unitMeta.icon}</div>
                  <div style="font-size:0.7rem;color:var(--text-muted);margin-bottom:0.25rem;">Unit ${t.unit}</div>
                  <div style="font-weight:700;margin-bottom:0.5rem;">${t.title}</div>
                  <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                    <span class="diff-badge diff-${t.difficulty}">${t.difficulty}</span>
                    <span style="font-size:0.72rem;color:var(--gold-300);">${imp.emoji} ${freq[t.id]||0} PYQs</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : `
          <div class="empty-state">
            <div class="empty-state-icon">🔖</div>
            <h3>No bookmarks yet</h3>
            <p>Open any topic and click "Bookmark" to save it here for quick access.</p>
          </div>
        `}
      </div>
    `;
  }

  function removeBookmark(topicId) {
    Progress.removeBookmark(topicId);
    renderBookmarks();
    toast('Bookmark removed', 'info');
  }

  // ── Keyboard Shortcuts ────────────────────────────────────
  function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Escape: close topic panel or mobile nav
      if (e.key === 'Escape') {
        if (topicPanelOpen) { closeTopicPanel(); return; }
        const nav = document.getElementById('navbar-nav');
        if (nav?.classList.contains('mobile-open')) {
          nav.classList.remove('mobile-open');
          const ham = document.getElementById('hamburger-btn');
          ham?.classList.remove('active');
          ham?.setAttribute('aria-expanded', 'false');
        }
      }
      // '/' to focus search (when not typing in an input)
      if (e.key === '/' && !e.target.matches('input, textarea, select')) {
        e.preventDefault();
        document.getElementById('global-search-input')?.focus();
      }
    });
  }

  // ── Init ──────────────────────────────────────────────────
  function init() {
    // Theme
    initTheme();
    Progress.updateStreak();

    // Navigation — attach to all nav buttons
    document.querySelectorAll('.nav-btn[data-page]').forEach(btn => {
      btn.addEventListener('click', () => {
        navigate(btn.dataset.page);
        // Always close mobile nav when a nav link is clicked
        document.getElementById('navbar-nav')?.classList.remove('mobile-open');
        const ham = document.getElementById('hamburger-btn');
        ham?.classList.remove('active');
        ham?.setAttribute('aria-expanded', 'false');
      });
    });

    // Theme toggle
    document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

    // Mobile hamburger — toggle open/close
    document.getElementById('hamburger-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const nav = document.getElementById('navbar-nav');
      const ham = document.getElementById('hamburger-btn');
      const isOpen = nav?.classList.toggle('mobile-open');
      ham?.classList.toggle('active', isOpen);
      ham?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
      const nav = document.getElementById('navbar-nav');
      const hamburger = document.getElementById('hamburger-btn');
      if (nav?.classList.contains('mobile-open') &&
          !nav.contains(e.target) && !hamburger?.contains(e.target)) {
        nav.classList.remove('mobile-open');
        hamburger?.classList.remove('active');
        hamburger?.setAttribute('aria-expanded', 'false');
      }
    });

    // Panel overlay close
    document.getElementById('topic-panel-overlay')?.addEventListener('click', closeTopicPanel);

    // Hero CTAs
    document.getElementById('hero-start-btn')?.addEventListener('click', () => navigate('mindmap'));
    document.getElementById('hero-exam-btn')?.addEventListener('click', () => navigate('exam'));

    // Unit cards — click to go to that unit's mind map
    document.querySelectorAll('.unit-card[data-unit]').forEach(card => {
      card.addEventListener('click', () => {
        navigate('mindmap');
        setTimeout(() => {
          const tab = document.querySelector(`.mindmap-tab[data-unit="${card.dataset.unit}"]`);
          if (tab) tab.click();
        }, 200);
      });
    });

    // Search
    Search.init();

    // Misc
    initReadingProgress();
    initScrollTop();
    initParticles();
    initKeyboardShortcuts();

    // Initial stats
    refreshHomeStats();

    // Streak badge
    const streakBadge = document.getElementById('streak-badge-count');
    if (streakBadge) streakBadge.textContent = Progress.getStreak();

    // Mark page as loaded (remove any init loading state)
    document.documentElement.classList.add('app-loaded');
  }

  return { init, navigate, openTopicPanel, closeTopicPanel, removeBookmark, refreshHomeStats, toast };
})();

window.App = App;
document.addEventListener('DOMContentLoaded', () => App.init());
