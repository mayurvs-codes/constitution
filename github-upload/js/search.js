// ============================================================
// SEARCH.JS — Full-text Search Engine
// ============================================================

const Search = (() => {
  let searchTimeout = null;

  function normalize(str) {
    return str.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
  }

  function score(text, query) {
    const n = normalize(text);
    const q = normalize(query);
    if (!q) return 0;
    const words = q.split(' ').filter(Boolean);
    let s = 0;
    words.forEach(w => {
      if (n.includes(w)) {
        s += n.startsWith(w) ? 10 : n.split(' ')[0] === w ? 8 : 5;
        const idx = n.indexOf(w);
        if (idx === 0) s += 5;
      }
    });
    return s;
  }

  function searchAll(query) {
    if (!query || query.length < 2) return [];
    const results = [];

    // Search Topics
    TOPICS.forEach(t => {
      const s = score(t.title, query) * 2
              + score(t.explanation, query)
              + score(t.quickRevision, query)
              + score((t.articles || []).join(' '), query) * 1.5;
      if (s > 0) results.push({
        type: 'topic',
        title: t.title,
        subtitle: `Unit ${t.unit}: ${UNIT_META[t.unit-1].title.slice(0,40)}...`,
        score: s,
        id: t.id,
        unit: t.unit
      });
    });

    // Search PYQs
    PYQS.forEach(q => {
      const s = score(q.question, query) * 2 + score(q.explanation, query);
      if (s > 0) results.push({
        type: 'pyq',
        title: q.question.slice(0, 80) + (q.question.length > 80 ? '...' : ''),
        subtitle: `${q.year} · Unit ${q.unit} · ${q.source}`,
        score: s,
        id: q.id,
        topicId: q.topic,
        unit: q.unit
      });
    });

    // Search Flashcards
    FLASHCARDS.forEach(f => {
      const s = score(f.front, query) * 1.5 + score(f.back, query);
      if (s > 0) results.push({
        type: 'flashcard',
        title: f.front,
        subtitle: `Flashcard · Unit ${f.unit}`,
        score: s,
        id: f.id,
        topicId: f.topic,
        unit: f.unit
      });
    });

    return results.sort((a, b) => b.score - a.score).slice(0, 12);
  }

  function highlight(text, query) {
    if (!query) return text;
    const words = query.split(/\s+/).filter(w => w.length > 1);
    let result = text;
    words.forEach(w => {
      const re = new RegExp(`(${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      result = result.replace(re, '<mark>$1</mark>');
    });
    return result;
  }

  function init() {
    const input = document.getElementById('global-search-input');
    const dropdown = document.getElementById('search-results-dropdown');
    if (!input || !dropdown) return;

    input.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      const q = e.target.value.trim();
      if (!q || q.length < 2) {
        dropdown.classList.remove('visible');
        return;
      }
      searchTimeout = setTimeout(() => {
        const results = searchAll(q);
        renderDropdown(results, q, dropdown);
      }, 200);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.classList.remove('visible');
        input.blur();
      }
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.global-search-wrapper')) {
        dropdown.classList.remove('visible');
      }
    });

    input.addEventListener('focus', () => {
      if (input.value.trim().length >= 2) dropdown.classList.add('visible');
    });
  }

  function renderDropdown(results, query, dropdown) {
    if (!results.length) {
      dropdown.innerHTML = `<div class="search-result-item"><span class="text-muted text-sm">No results for "${query}"</span></div>`;
      dropdown.classList.add('visible');
      return;
    }
    const typeIcons = { topic: '📚', pyq: '❓', flashcard: '🃏' };
    const typeLabels = { topic: 'Topic', pyq: 'PYQ', flashcard: 'Flashcard' };
    dropdown.innerHTML = results.map(r => `
      <div class="search-result-item" data-type="${r.type}" data-id="${r.id}" data-topic="${r.topicId || r.id}" data-unit="${r.unit}">
        <span class="search-result-type result-type-${r.type}">${typeIcons[r.type]} ${typeLabels[r.type]}</span>
        <div style="flex:1;min-width:0;">
          <div class="search-result-text">${highlight(r.title, query)}</div>
          <div class="search-result-unit">${r.subtitle}</div>
        </div>
      </div>
    `).join('');
    dropdown.classList.add('visible');

    dropdown.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        dropdown.classList.remove('visible');
        document.getElementById('global-search-input').value = '';
        const type = el.dataset.type;
        const topicId = el.dataset.topic;
        if (type === 'topic' || type === 'pyq' || type === 'flashcard') {
          window.App && window.App.openTopicPanel(topicId);
        }
      });
    });
  }

  return { init, searchAll, highlight };
})();

window.Search = Search;
