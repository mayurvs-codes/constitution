// ============================================================
// FLASHCARDS.JS — Flashcard Study System
// ============================================================

const Flashcards = (() => {
  let state = {
    deck: [],
    current: 0,
    flipped: false,
    unit: 'all',
    mastered: [],
    remaining: []
  };

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildDeck(unit) {
    state.unit = unit;
    let cards = unit === 'all' ? [...FLASHCARDS] : FLASHCARDS.filter(f => f.unit === parseInt(unit));
    state.deck = shuffle(cards);
    state.current = 0;
    state.flipped = false;
    state.remaining = [...state.deck];
    state.mastered = [];
  }

  function render() {
    const el = document.getElementById('page-flashcards');
    if (!el) return;

    const mastered = Progress.getMastered();
    const totalMastered = FLASHCARDS.filter(f => mastered.includes(f.id)).length;

    el.innerHTML = `
      <div style="padding:1.5rem;max-width:1000px;margin:0 auto;">
        <div class="section-header" style="text-align:left;margin-bottom:1.5rem;">
          <div class="section-label">🃏 Flashcards</div>
          <h2>Study Flashcards</h2>
          <p>Click the card to reveal the answer. Mark as Known or Unknown to track progress.</p>
        </div>

        <!-- Unit Filter -->
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1.5rem;align-items:center;">
          <span style="font-size:0.875rem;font-weight:600;color:var(--text-muted);">Filter:</span>
          ${[{val:'all',label:'All Units'},{val:1,label:'Unit 1'},{val:2,label:'Unit 2'},{val:3,label:'Unit 3'},{val:4,label:'Unit 4'}].map(u => `
            <button class="btn btn-outline btn-sm fc-unit-btn ${state.unit == u.val ? 'btn-primary' : ''}" data-unit="${u.val}">${u.label}</button>
          `).join('')}
          <button class="btn btn-outline btn-sm" id="shuffle-btn" style="margin-left:auto;">🔀 Shuffle</button>
        </div>

        <!-- Stats Row -->
        <div style="display:flex;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap;">
          <div class="card" style="flex:1;padding:1rem;text-align:center;min-width:100px;">
            <div style="font-size:1.5rem;font-weight:800;font-family:var(--font-heading);">${state.deck.length}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);">Total Cards</div>
          </div>
          <div class="card" style="flex:1;padding:1rem;text-align:center;min-width:100px;">
            <div style="font-size:1.5rem;font-weight:800;font-family:var(--font-heading);color:#10b981;">${state.mastered.length}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);">Session Known</div>
          </div>
          <div class="card" style="flex:1;padding:1rem;text-align:center;min-width:100px;">
            <div style="font-size:1.5rem;font-weight:800;font-family:var(--font-heading);color:var(--gold-300);">${totalMastered}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);">All-time Mastered</div>
          </div>
        </div>

        <!-- Flashcard -->
        <div class="flashcard-deck">
          ${state.remaining.length === 0 ? `
            <div class="empty-state">
              <div class="empty-state-icon">🎉</div>
              <h3>You've mastered all cards!</h3>
              <p style="margin-bottom:1rem;">Great job! Review them again or try more units.</p>
              <button class="btn btn-primary" id="restart-fc-btn">🔄 Start Over</button>
            </div>
          ` : renderCard()}

          ${state.remaining.length > 0 ? `
            <!-- Progress -->
            <div class="fc-progress" style="margin-top:1.5rem;">
              <div class="fc-progress-fill" style="width:${Math.round((state.mastered.length / state.deck.length) * 100)}%"></div>
            </div>
            <div class="fc-counter">${state.current + 1} / ${state.remaining.length} remaining · ${state.mastered.length} known</div>
          ` : ''}
        </div>
      </div>
    `;

    attachEvents();
  }

  function renderCard() {
    if (!state.remaining.length) return '';
    const card = state.remaining[state.current];
    const topic = DataUtils.getTopicById(card.topic);
    const unitMeta = UNIT_META[card.unit - 1];
    const isMast = Progress.isMastered(card.id);

    return `
      <div class="flashcard-scene" id="fc-scene" title="Click to flip">
        <div class="flashcard-card ${state.flipped ? 'flipped' : ''}" id="fc-card">
          <div class="flashcard-front">
            <div class="flashcard-label">Question</div>
            <div class="flashcard-text">${card.front}</div>
            <div class="flashcard-hint">Click to reveal answer</div>
            <div style="margin-top:1rem;display:flex;gap:0.5rem;justify-content:center;flex-wrap:wrap;">
              <span class="tag tag-blue">Unit ${card.unit}</span>
              ${topic ? `<span class="tag tag-gold">${topic.title}</span>` : ''}
            </div>
          </div>
          <div class="flashcard-back">
            <div class="flashcard-label">Answer</div>
            <div class="flashcard-text">${card.back}</div>
            ${isMast ? '<div style="margin-top:0.75rem;font-size:0.75rem;color:#10b981;">✓ Previously mastered</div>' : ''}
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="flashcard-controls">
        <button class="btn btn-danger" id="fc-unknown-btn" ${!state.flipped ? 'disabled style="opacity:0.5"' : ''}>
          ✗ Don't Know
        </button>
        <button class="btn btn-outline" id="fc-prev-btn" ${state.current === 0 ? 'disabled style="opacity:0.5"' : ''}>
          ← Prev
        </button>
        <button class="btn btn-success" id="fc-known-btn" ${!state.flipped ? 'disabled style="opacity:0.5"' : ''}>
          ✓ Know It
        </button>
      </div>

      <div style="text-align:center;margin-top:0.5rem;">
        <button class="btn btn-outline btn-sm" id="fc-skip-btn">Skip →</button>
      </div>
    `;
  }

  function attachEvents() {
    // Unit filter buttons
    document.querySelectorAll('.fc-unit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        buildDeck(btn.dataset.unit);
        render();
      });
    });

    // Shuffle
    document.getElementById('shuffle-btn')?.addEventListener('click', () => {
      state.remaining = shuffle(state.remaining);
      state.current = 0;
      state.flipped = false;
      render();
    });

    // Restart
    document.getElementById('restart-fc-btn')?.addEventListener('click', () => {
      buildDeck(state.unit);
      render();
    });

    // Flip card
    document.getElementById('fc-scene')?.addEventListener('click', () => {
      state.flipped = !state.flipped;
      const card = document.getElementById('fc-card');
      if (card) card.classList.toggle('flipped', state.flipped);

      // Enable action buttons after flip
      if (state.flipped) {
        document.getElementById('fc-unknown-btn')?.removeAttribute('disabled');
        document.getElementById('fc-unknown-btn')?.removeAttribute('style');
        document.getElementById('fc-known-btn')?.removeAttribute('disabled');
        document.getElementById('fc-known-btn')?.removeAttribute('style');
      }
    });

    // Known
    document.getElementById('fc-known-btn')?.addEventListener('click', () => {
      const card = state.remaining[state.current];
      if (card) {
        state.mastered.push(card.id);
        Progress.markMastered(card.id);
        removeCurrentCard();
      }
    });

    // Unknown
    document.getElementById('fc-unknown-btn')?.addEventListener('click', () => {
      nextCard();
    });

    // Skip
    document.getElementById('fc-skip-btn')?.addEventListener('click', () => {
      nextCard();
    });

    // Prev
    document.getElementById('fc-prev-btn')?.addEventListener('click', () => {
      if (state.current > 0) {
        state.current--;
        state.flipped = false;
        render();
      }
    });
  }

  function removeCurrentCard() {
    state.remaining.splice(state.current, 1);
    if (state.current >= state.remaining.length) {
      state.current = Math.max(0, state.remaining.length - 1);
    }
    state.flipped = false;
    render();
  }

  function nextCard() {
    if (state.current + 1 < state.remaining.length) {
      state.current++;
    } else {
      state.current = 0;
    }
    state.flipped = false;
    render();
  }

  function init() {
    buildDeck('all');
    render();
  }

  return { init, render };
})();

window.Flashcards = Flashcards;
