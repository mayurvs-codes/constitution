// ============================================================
// ANALYTICS.JS — PYQ Analytics Dashboard
// ============================================================

const Analytics = (() => {
  let charts = {};

  function destroyCharts() {
    Object.values(charts).forEach(c => { try { c.destroy(); } catch(e){} });
    charts = {};
  }

  function render() {
    destroyCharts();
    const el = document.getElementById('page-analytics');
    if (!el) return;

    const freq = DataUtils.computeTopicFrequency();
    const unitWeights = DataUtils.computeUnitWeightage();
    const ranked = DataUtils.getRankedTopics().slice(0, 20);
    const years = [2023, 2024, 2025];
    const yearCounts = years.map(y => PYQS.filter(q => q.year === y).length);

    el.innerHTML = `
      <div class="analytics-page">
        <div class="section-header" style="text-align:left;margin-bottom:1.5rem;">
          <div class="section-label">📊 PYQ Analytics</div>
          <h2>Previous Year Question Analysis</h2>
          <p>Topic frequency, heat map, unit weightage, and ranked topics based on ${PYQS.length} PYQs</p>
        </div>

        <!-- Summary Cards -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;margin-bottom:2rem;">
          <div class="card" style="text-align:center;padding:1.25rem;">
            <div style="font-size:2rem;font-weight:900;font-family:var(--font-heading);color:var(--blue-400);">${PYQS.length}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);">Total PYQs</div>
          </div>
          <div class="card" style="text-align:center;padding:1.25rem;">
            <div style="font-size:2rem;font-weight:900;font-family:var(--font-heading);color:var(--gold-300);">${TOPICS.length}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);">Topics Covered</div>
          </div>
          <div class="card" style="text-align:center;padding:1.25rem;">
            <div style="font-size:2rem;font-weight:900;font-family:var(--font-heading);color:#10b981;">${yearCounts[0]}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);">2023 PYQs</div>
          </div>
          <div class="card" style="text-align:center;padding:1.25rem;">
            <div style="font-size:2rem;font-weight:900;font-family:var(--font-heading);color:#f87171;">${yearCounts[1]}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);">2024 PYQs</div>
          </div>
          <div class="card" style="text-align:center;padding:1.25rem;">
            <div style="font-size:2rem;font-weight:900;font-family:var(--font-heading);color:#a78bfa;">${yearCounts[2]}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);">2025 PYQs</div>
          </div>
        </div>

        <div class="analytics-grid">
          <!-- Frequency Bar Chart (left) -->
          <div class="analytics-chart-card analytics-col-8">
            <div class="analytics-chart-title">📈 Topic Frequency (Top 15)</div>
            <div class="chart-wrapper" style="height:380px;">
              <canvas id="freq-chart"></canvas>
            </div>
          </div>

          <!-- Unit Pie Chart (right) -->
          <div class="analytics-chart-card analytics-col-4">
            <div class="analytics-chart-title">🥧 Unit Weightage</div>
            <div class="chart-wrapper" style="height:200px;display:flex;align-items:center;justify-content:center;">
              <canvas id="pie-chart" style="max-height:200px;"></canvas>
            </div>
            <div style="margin-top:1rem;">
              ${[1,2,3,4].map(u => {
                const count = unitWeights[u];
                const pct = Math.round(count / PYQS.length * 100);
                const colors = ['#3b82f6','#10b981','#8b5cf6','#f59e0b'];
                return `
                  <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem;font-size:0.8rem;">
                    <div style="width:10px;height:10px;border-radius:50%;background:${colors[u-1]};flex-shrink:0;"></div>
                    <span style="flex:1;color:var(--text-secondary);">Unit ${u}</span>
                    <strong>${count} (${pct}%)</strong>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Year Distribution Chart -->
          <div class="analytics-chart-card analytics-col-4">
            <div class="analytics-chart-title">📅 Year Distribution</div>
            <div class="chart-wrapper" style="height:200px;display:flex;align-items:center;justify-content:center;">
              <canvas id="year-chart" style="max-height:200px;"></canvas>
            </div>
          </div>

          <!-- Ranked Topics -->
          <div class="analytics-chart-card analytics-col-8">
            <div class="analytics-chart-title">🏆 Most Important Topics (Freq + Importance)</div>
            <div class="ranked-list" id="ranked-list">
              ${ranked.slice(0,12).map((t, i) => {
                const maxScore = (ranked[0].frequency + ranked[0].importanceScore) || 1;
                const score = t.frequency + t.importanceScore;
                const pct = Math.round(score / maxScore * 100);
                const numClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : 'normal';
                const imp = DataUtils.getImportanceLevel(t.importanceScore);
                return `
                  <div class="ranked-item" data-topic="${t.id}" onclick="App.openTopicPanel('${t.id}')">
                    <div class="ranked-number ${numClass}">${i+1}</div>
                    <div class="ranked-name">
                      <div>${t.title}</div>
                      <div style="font-size:0.72rem;color:var(--text-muted);">Unit ${t.unit} · ${imp.emoji} ${imp.label}</div>
                    </div>
                    <div class="ranked-freq">${t.frequency} PYQs</div>
                    <div class="ranked-bar">
                      <div class="ranked-bar-fill" style="width:${pct}%"></div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Heat Map -->
          <div class="analytics-chart-card analytics-col-12">
            <div class="analytics-chart-title">🌡️ Importance Heat Map</div>
            <div style="display:flex;gap:1rem;margin-bottom:1rem;flex-wrap:wrap;">
              <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.75rem;"><span style="width:12px;height:12px;background:rgba(220,38,38,0.2);border:1px solid rgba(220,38,38,0.3);border-radius:3px;display:inline-block;"></span> 3+ PYQs (Very Important)</div>
              <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.75rem;"><span style="width:12px;height:12px;background:rgba(234,88,12,0.2);border:1px solid rgba(234,88,12,0.3);border-radius:3px;display:inline-block;"></span> 1-2 PYQs (Important)</div>
              <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.75rem;"><span style="width:12px;height:12px;background:rgba(22,163,74,0.15);border:1px solid rgba(22,163,74,0.25);border-radius:3px;display:inline-block;"></span> 0 PYQs (Review Needed)</div>
            </div>
            <div class="heat-map-grid" id="heat-map">
              ${TOPICS.map(t => {
                const f = freq[t.id] || 0;
                const cls = f >= 3 ? 'heat-high' : f >= 1 ? 'heat-medium' : 'heat-low';
                const years = [...new Set(PYQS.filter(q=>q.topic===t.id).map(q=>q.year))].sort();
                return `
                  <div class="heat-cell ${cls}" onclick="App.openTopicPanel('${t.id}')" title="${t.title}: ${f} PYQ(s)">
                    <div class="heat-cell-count">${f}</div>
                    <div class="heat-cell-label">${t.title.slice(0,22)}${t.title.length>22?'...':''}</div>
                    ${years.length ? `<div style="font-size:0.65rem;opacity:0.7;margin-top:0.2rem;">${years.join(', ')}</div>` : ''}
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    // Render Charts
    setTimeout(() => {
      renderFreqChart(ranked.slice(0,15), freq);
      renderPieChart(unitWeights);
      renderYearChart(years, yearCounts);
    }, 100);
  }

  function renderFreqChart(topics, freq) {
    const ctx = document.getElementById('freq-chart');
    if (!ctx) return;
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const textColor = isDark ? '#94a3b8' : '#475569';
    const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

    charts.freq = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: topics.map(t => t.title.length > 22 ? t.title.slice(0,22)+'…' : t.title),
        datasets: [{
          label: 'PYQ Frequency',
          data: topics.map(t => freq[t.id] || 0),
          backgroundColor: topics.map(t => {
            const f = freq[t.id] || 0;
            if (f >= 4) return 'rgba(220,38,38,0.75)';
            if (f >= 2) return 'rgba(245,158,11,0.75)';
            return 'rgba(59,130,246,0.75)';
          }),
          borderRadius: 6,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              afterLabel: (ctx) => {
                const topic = topics[ctx.dataIndex];
                const years = [...new Set(PYQS.filter(q=>q.topic===topic.id).map(q=>q.year))].sort();
                return years.length ? `Years: ${years.join(', ')}` : '';
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: { color: textColor, font: { size: 11 } },
            beginAtZero: true,
            max: Math.max(...topics.map(t => freq[t.id] || 0)) + 1
          },
          y: {
            grid: { display: false },
            ticks: { color: textColor, font: { size: 11 } }
          }
        }
      }
    });
  }

  function renderPieChart(unitWeights) {
    const ctx = document.getElementById('pie-chart');
    if (!ctx) return;
    charts.pie = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4'],
        datasets: [{
          data: [unitWeights[1], unitWeights[2], unitWeights[3], unitWeights[4]],
          backgroundColor: ['#3b82f6','#10b981','#8b5cf6','#f59e0b'],
          borderWidth: 2,
          borderColor: 'var(--bg-card)',
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` Unit ${ctx.dataIndex+1}: ${ctx.raw} PYQs (${Math.round(ctx.raw/PYQS.length*100)}%)`
            }
          }
        },
        cutout: '65%'
      }
    });
  }

  function renderYearChart(years, counts) {
    const ctx = document.getElementById('year-chart');
    if (!ctx) return;
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const textColor = isDark ? '#94a3b8' : '#475569';
    charts.year = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: years.map(String),
        datasets: [{
          label: 'PYQs',
          data: counts,
          backgroundColor: ['rgba(239,68,68,0.7)', 'rgba(245,158,11,0.7)', 'rgba(59,130,246,0.7)'],
          borderRadius: 8,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: textColor, font: { size: 12 } }, grid: { display: false } },
          y: { ticks: { color: textColor, font: { size: 11 } }, beginAtZero: true }
        }
      }
    });
  }

  function init() { render(); }

  return { init, render };
})();

window.Analytics = Analytics;
