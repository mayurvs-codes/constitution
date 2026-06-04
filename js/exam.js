// ============================================================
// EXAM.JS — MCQ Exam Engine
// ============================================================

const Exam = (() => {
  let state = {
    questions: [],
    current: 0,
    answers: [],
    score: 0,
    timer: null,
    timeLeft: 30,
    mode: 'all',
    unit: null,
    topic: null,
    total: 20,
    running: false,
    finished: false
  };

  function getPage() { return document.getElementById('page-exam'); }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function selectQuestions() {
    let pool = [...PYQS];
    if (state.mode === 'unit' && state.unit) pool = pool.filter(q => q.unit === state.unit);
    if (state.mode === 'topic' && state.topic) pool = pool.filter(q => q.topic === state.topic);
    state.questions = shuffle(pool).slice(0, Math.min(state.total, pool.length));
  }

  function startExam() {
    selectQuestions();
    state.current = 0;
    state.answers = [];
    state.score = 0;
    state.running = true;
    state.finished = false;
    renderQuestion();
  }

  function renderSetup() {
    const el = getPage();
    el.innerHTML = `
      <div class="exam-page">
        <div class="section-header" style="text-align:left;margin-bottom:1.5rem;">
          <div class="section-label">🎓 Exam Mode</div>
          <h2>MCQ Practice</h2>
          <p>Test your knowledge with previous year questions</p>
        </div>

        <div class="exam-setup">
          <h3 style="margin-bottom:1.25rem;">Choose Exam Mode</h3>
          <div class="exam-mode-grid">
            <div class="exam-mode-card selected" data-mode="all">
              <div class="exam-mode-icon">🌐</div>
              <div class="exam-mode-label">All PYQs</div>
              <div class="exam-mode-desc">Random from all units</div>
            </div>
            <div class="exam-mode-card" data-mode="unit">
              <div class="exam-mode-icon">📚</div>
              <div class="exam-mode-label">Unit-wise</div>
              <div class="exam-mode-desc">Focus on one unit</div>
            </div>
            <div class="exam-mode-card" data-mode="topic">
              <div class="exam-mode-icon">🎯</div>
              <div class="exam-mode-label">Topic-wise</div>
              <div class="exam-mode-desc">Practice specific topic</div>
            </div>
            <div class="exam-mode-card" data-mode="custom">
              <div class="exam-mode-icon">⚙️</div>
              <div class="exam-mode-label">Custom</div>
              <div class="exam-mode-desc">Set question count</div>
            </div>
          </div>

          <div id="exam-unit-selector" class="hidden" style="margin-bottom:1rem;">
            <label style="font-size:0.875rem;font-weight:600;display:block;margin-bottom:0.5rem;">Select Unit:</label>
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
              ${[1,2,3,4].map(u => `
                <button class="btn btn-outline btn-sm unit-select-btn" data-unit="${u}">Unit ${u}</button>
              `).join('')}
            </div>
          </div>

          <div id="exam-topic-selector" class="hidden" style="margin-bottom:1rem;">
            <label style="font-size:0.875rem;font-weight:600;display:block;margin-bottom:0.5rem;">Select Topic:</label>
            <select id="topic-select" style="width:100%;padding:0.625rem 0.875rem;background:var(--bg-elevated);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:0.875rem;outline:none;">
              ${TOPICS.map(t => `<option value="${t.id}">Unit ${t.unit}: ${t.title}</option>`).join('')}
            </select>
          </div>

          <div id="exam-count-selector" class="hidden" style="margin-bottom:1.5rem;">
            <label style="font-size:0.875rem;font-weight:600;display:block;margin-bottom:0.5rem;">Number of Questions: <span id="count-display">20</span></label>
            <input type="range" id="question-count" min="5" max="100" value="20" step="5"
              style="width:100%;accent-color:var(--blue-500);">
          </div>

          <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;">
            <label style="font-size:0.875rem;font-weight:600;">Timer per question:</label>
            <div style="display:flex;gap:0.5rem;">
              ${[15,30,60,0].map((t,i) => `
                <button class="btn btn-outline btn-sm timer-select-btn ${i===1?'active':''}" data-time="${t}">${t===0?'No limit':t+'s'}</button>
              `).join('')}
            </div>
          </div>

          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
            <div style="font-size:0.875rem;color:var(--text-muted);">
              📊 Total PYQs available: ${PYQS.length} &nbsp;|&nbsp; Last score: ${Progress.getAverageScore()}%
            </div>
            <button class="btn btn-gold btn-lg" id="start-exam-btn">
              🚀 Start Exam
            </button>
          </div>
        </div>

        ${renderExamHistory()}
      </div>
    `;
    attachSetupEvents();
  }

  function renderExamHistory() {
    const history = Progress.getExamHistory().slice(0, 5);
    if (!history.length) return '';
    return `
      <div class="card" style="margin-top:1.5rem;">
        <h4 style="margin-bottom:1rem;">📋 Recent Exams</h4>
        ${history.map(h => `
          <div style="display:flex;align-items:center;gap:1rem;padding:0.75rem 0;border-bottom:1px solid var(--border);">
            <div class="score-badge" style="width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.875rem;background:${h.percent>=70?'rgba(16,185,129,0.15)':'rgba(239,68,68,0.15)'};color:${h.percent>=70?'#10b981':'#f87171'};">${h.percent}%</div>
            <div>
              <div style="font-weight:600;font-size:0.875rem;">${h.score}/${h.total} correct</div>
              <div style="font-size:0.75rem;color:var(--text-muted);">${new Date(h.date).toLocaleDateString()} · ${h.mode} mode</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function attachSetupEvents() {
    let selectedTime = 30;

    // Mode cards
    document.querySelectorAll('.exam-mode-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.exam-mode-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        state.mode = card.dataset.mode;
        document.getElementById('exam-unit-selector').classList.toggle('hidden', state.mode !== 'unit');
        document.getElementById('exam-topic-selector').classList.toggle('hidden', state.mode !== 'topic');
        document.getElementById('exam-count-selector').classList.toggle('hidden', state.mode !== 'custom');
        
        // Adjust default count
        if (state.mode === 'all') state.total = 20;
        else if (state.mode === 'unit') state.total = 15;
        else if (state.mode === 'topic') state.total = 10;
        
        const countDisplay = document.getElementById('count-display');
        const countSlider = document.getElementById('question-count');
        if (countDisplay) countDisplay.textContent = state.total;
        if (countSlider) countSlider.value = state.total;
      });
    });

    // Unit buttons
    document.querySelectorAll('.unit-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.unit-select-btn').forEach(b => b.classList.remove('btn-primary'));
        btn.classList.add('btn-primary');
        state.unit = parseInt(btn.dataset.unit);
      });
    });

    // Question count
    const countSlider = document.getElementById('question-count');
    if (countSlider) {
      countSlider.addEventListener('input', (e) => {
        state.total = parseInt(e.target.value);
        document.getElementById('count-display').textContent = state.total;
      });
    }

    // Timer buttons
    document.querySelectorAll('.timer-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.timer-select-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedTime = parseInt(btn.dataset.time);
        state.defaultTime = selectedTime;
      });
    });
    state.defaultTime = 30;

    // Topic select
    const topicSelect = document.getElementById('topic-select');
    if (topicSelect) topicSelect.addEventListener('change', e => { state.topic = e.target.value; });
    if (TOPICS.length) state.topic = TOPICS[0].id;

    // Start button
    document.getElementById('start-exam-btn')?.addEventListener('click', startExam);
  }

  function renderQuestion() {
    const el = getPage();
    const q = state.questions[state.current];
    if (!q) { renderScoreCard(); return; }

    const answered = state.answers[state.current];
    const progressPct = ((state.current) / state.questions.length) * 100;

    el.innerHTML = `
      <div class="exam-page">
        <div class="question-card">
          <div class="question-header">
            <div>
              <div class="question-count">Question ${state.current + 1} of ${state.questions.length}</div>
              <div style="font-size:0.75rem;color:var(--text-muted);">${q.year} · Unit ${q.unit} · ${q.source}</div>
            </div>
            <div class="flex items-center gap-3">
              <div id="timer-display" class="timer-display ${state.defaultTime === 0 ? 'hidden' : ''}">
                ⏱ <span id="timer-value">${state.timeLeft}</span>s
              </div>
              <button class="btn btn-outline btn-sm" id="quit-exam-btn">✕ Quit</button>
            </div>
          </div>

          <div class="question-progress">
            <div class="question-progress-fill" style="width:${progressPct}%"></div>
          </div>

          <div class="question-text">${q.question}</div>

          <div class="options-list">
            ${q.options.map((opt, i) => {
              let cls = '';
              if (answered !== undefined) {
                const letter = ['A','B','C','D'][i];
                if (letter === q.answer) cls = 'correct';
                else if (letter === answered) cls = 'wrong';
              }
              return `
                <button class="option-btn ${cls}" data-letter="${['A','B','C','D'][i]}" ${answered !== undefined ? 'disabled' : ''}>
                  <span class="option-letter">${['A','B','C','D'][i]}</span>
                  ${opt.replace(/^[A-D]\)\s*/,'')}
                </button>
              `;
            }).join('')}
          </div>

          <div class="explanation-box ${answered !== undefined ? 'visible' : ''}" id="explanation">
            <strong>Explanation:</strong> ${q.explanation}
          </div>

          <div style="display:flex;justify-content:space-between;margin-top:1.5rem;flex-wrap:wrap;gap:0.75rem;">
            <div style="font-size:0.875rem;color:var(--text-muted);">Score: ${state.score}/${state.current} correct</div>
            ${answered !== undefined ? `
              <button class="btn btn-primary" id="next-btn">
                ${state.current + 1 < state.questions.length ? 'Next Question →' : '🏆 View Results'}
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    // Attach events
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => selectAnswer(btn.dataset.letter, q));
    });
    document.getElementById('next-btn')?.addEventListener('click', nextQuestion);
    document.getElementById('quit-exam-btn')?.addEventListener('click', () => { stopTimer(); renderSetup(); });

    // Start timer
    if (state.defaultTime > 0 && answered === undefined) {
      state.timeLeft = state.defaultTime;
      startTimer(q);
    }
  }

  function selectAnswer(letter, q) {
    stopTimer();
    state.answers[state.current] = letter;
    if (letter === q.answer) state.score++;

    // Re-render to show correct/wrong
    renderQuestion();
  }

  function nextQuestion() {
    stopTimer();
    state.current++;
    if (state.current >= state.questions.length) {
      renderScoreCard();
    } else {
      state.timeLeft = state.defaultTime;
      renderQuestion();
    }
  }

  function startTimer(q) {
    stopTimer();
    state.timer = setInterval(() => {
      state.timeLeft--;
      const display = document.getElementById('timer-value');
      if (display) display.textContent = state.timeLeft;
      if (state.timeLeft <= 10) {
        document.getElementById('timer-display')?.classList.add('warning');
      }
      if (state.timeLeft <= 0) {
        stopTimer();
        // Auto-mark as wrong (no answer)
        state.answers[state.current] = 'TIMEOUT';
        renderQuestion();
      }
    }, 1000);
  }

  function stopTimer() {
    if (state.timer) { clearInterval(state.timer); state.timer = null; }
  }

  function renderScoreCard() {
    stopTimer();
    const percent = Math.round((state.score / state.questions.length) * 100);
    const grade = percent >= 80 ? '🏆 Excellent!' : percent >= 60 ? '👍 Good Job!' : percent >= 40 ? '📚 Keep Studying' : '💪 Need More Practice';
    const gradeColor = percent >= 80 ? '#10b981' : percent >= 60 ? '#3b82f6' : percent >= 40 ? '#f59e0b' : '#dc2626';

    // Save to history
    Progress.saveExamResult({ score: state.score, total: state.questions.length, percent, mode: state.mode });

    // Build wrong answers review
    const wrongAnswers = state.questions.filter((q, i) =>
      state.answers[i] !== q.answer
    );

    const el = getPage();
    el.innerHTML = `
      <div class="exam-page">
        <div class="score-card">
          <div style="font-size:2.5rem;margin-bottom:0.5rem;">${grade}</div>

          <div class="score-ring-wrapper">
            <svg width="160" height="160" style="transform:rotate(-90deg);">
              <circle cx="80" cy="80" r="70" fill="none" stroke="var(--border)" stroke-width="12"/>
              <circle cx="80" cy="80" r="70" fill="none" stroke="${gradeColor}" stroke-width="12"
                stroke-linecap="round"
                stroke-dasharray="${2 * Math.PI * 70}"
                stroke-dashoffset="${2 * Math.PI * 70 * (1 - percent/100)}"
                style="transition:stroke-dashoffset 1s ease;"/>
            </svg>
            <div class="score-ring-text">
              <span class="score-percent" style="color:${gradeColor};">${percent}%</span>
              <span class="score-label">${state.score}/${state.questions.length}</span>
            </div>
          </div>

          <div style="display:flex;justify-content:center;gap:2rem;margin-bottom:2rem;flex-wrap:wrap;">
            <div><div style="font-size:1.5rem;font-weight:800;color:#10b981;">${state.score}</div><div style="font-size:0.75rem;color:var(--text-muted);">Correct</div></div>
            <div><div style="font-size:1.5rem;font-weight:800;color:#f87171;">${state.questions.length - state.score}</div><div style="font-size:0.75rem;color:var(--text-muted);">Wrong</div></div>
            <div><div style="font-size:1.5rem;font-weight:800;color:var(--text-primary);">${state.questions.length}</div><div style="font-size:0.75rem;color:var(--text-muted);">Total</div></div>
          </div>

          <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-bottom:2rem;">
            <button class="btn btn-primary" id="retry-btn">🔄 Try Again</button>
            <button class="btn btn-gold" id="review-btn">📖 Review Answers</button>
            <button class="btn btn-outline" id="back-setup-btn">🏠 Back to Setup</button>
          </div>
        </div>

        ${wrongAnswers.length ? `
          <div class="card" style="margin-top:1.5rem;text-align:left;">
            <h4 style="margin-bottom:1rem;color:#f87171;">❌ Review Wrong Answers (${wrongAnswers.length})</h4>
            ${wrongAnswers.map(q => `
              <div class="pyq-question-card">
                <div class="pyq-question-text">${q.question}</div>
                <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.5rem;">
                  <span class="tag tag-green">✓ ${q.answer}: ${q.options.find(o=>o.startsWith(q.answer))?.replace(/^[A-D]\)\s*/,'') || ''}</span>
                </div>
                <div style="font-size:0.825rem;color:var(--text-secondary);margin-top:0.5rem;padding-top:0.5rem;border-top:1px solid var(--border);">${q.explanation}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;

    document.getElementById('retry-btn')?.addEventListener('click', startExam);
    document.getElementById('back-setup-btn')?.addEventListener('click', renderSetup);
    document.getElementById('review-btn')?.addEventListener('click', () => {
      document.querySelector('.score-card').scrollIntoView({ behavior: 'smooth' });
    });
  }

  function init() {
    renderSetup();
  }

  return { init, renderSetup };
})();

window.Exam = Exam;
