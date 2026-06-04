// ============================================================
// PROGRESS.JS — localStorage Progress Tracking
// ============================================================

const STORAGE_KEYS = {
  COMPLETED_TOPICS: 'const_completed',
  BOOKMARKS: 'const_bookmarks',
  NOTES: 'const_notes',
  EXAM_HISTORY: 'const_exam_history',
  FC_MASTERED: 'const_fc_mastered',
  STREAK: 'const_streak',
  LAST_VISIT: 'const_last_visit',
  THEME: 'const_theme',
  TOTAL_STUDY_TIME: 'const_study_time'
};

  // Safe localStorage wrapper — handles Private Browsing SecurityError
  function safeGet(key) {
    try { return localStorage.getItem(key); }
    catch(e) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); }
    catch(e) { /* silently ignore — Private Browsing or quota exceeded */ }
  }

const Progress = (() => {
  // ── Completed Topics ───────────────────────────────────────
  function getCompleted() {
    return JSON.parse(safeGet(STORAGE_KEYS.COMPLETED_TOPICS) || '[]');
  }
  function markComplete(topicId) {
    const completed = getCompleted();
    if (!completed.includes(topicId)) {
      completed.push(topicId);
      safeSet(STORAGE_KEYS.COMPLETED_TOPICS, JSON.stringify(completed));
    }
  }
  function markIncomplete(topicId) {
    const completed = getCompleted().filter(id => id !== topicId);
    safeSet(STORAGE_KEYS.COMPLETED_TOPICS, JSON.stringify(completed));
  }
  function isCompleted(topicId) {
    return getCompleted().includes(topicId);
  }
  function getUnitProgress(unit) {
    const topics = TOPICS.filter(t => t.unit === unit);
    const completed = getCompleted();
    const count = topics.filter(t => completed.includes(t.id)).length;
    const total = topics.length || 1;  // prevent division by zero
    return { count, total: topics.length, percent: Math.round((count / total) * 100) };
  }

  // ── Bookmarks ──────────────────────────────────────────────
  function getBookmarks() {
    return JSON.parse(safeGet(STORAGE_KEYS.BOOKMARKS) || '[]');
  }
  function addBookmark(topicId) {
    const bookmarks = getBookmarks();
    if (!bookmarks.includes(topicId)) {
      bookmarks.push(topicId);
      safeSet(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    }
  }
  function removeBookmark(topicId) {
    const bookmarks = getBookmarks().filter(id => id !== topicId);
    safeSet(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
  }
  function isBookmarked(topicId) {
    return getBookmarks().includes(topicId);
  }
  function toggleBookmark(topicId) {
    if (isBookmarked(topicId)) { removeBookmark(topicId); return false; }
    else { addBookmark(topicId); return true; }
  }

  // ── Notes ──────────────────────────────────────────────────
  function getNotes(topicId) {
    const notes = JSON.parse(safeGet(STORAGE_KEYS.NOTES) || '{}');
    return notes[topicId] || '';
  }
  function saveNotes(topicId, text) {
    const notes = JSON.parse(safeGet(STORAGE_KEYS.NOTES) || '{}');
    notes[topicId] = text;
    safeSet(STORAGE_KEYS.NOTES, JSON.stringify(notes));
  }

  // ── Exam History ───────────────────────────────────────────
  function getExamHistory() {
    return JSON.parse(safeGet(STORAGE_KEYS.EXAM_HISTORY) || '[]');
  }
  function saveExamResult(result) {
    const history = getExamHistory();
    history.unshift({ ...result, date: new Date().toISOString() });
    if (history.length > 20) history.pop();
    safeSet(STORAGE_KEYS.EXAM_HISTORY, JSON.stringify(history));
  }
  function getAverageScore() {
    const h = getExamHistory();
    if (!h.length) return 0;
    return Math.round(h.reduce((acc, r) => acc + r.percent, 0) / h.length);
  }

  // ── Flashcard Mastery ──────────────────────────────────────
  function getMastered() {
    return JSON.parse(safeGet(STORAGE_KEYS.FC_MASTERED) || '[]');
  }
  function markMastered(fcId) {
    const m = getMastered();
    if (!m.includes(fcId)) { m.push(fcId); safeSet(STORAGE_KEYS.FC_MASTERED, JSON.stringify(m)); }
  }
  function unmarkMastered(fcId) {
    const m = getMastered().filter(id => id !== fcId);
    safeSet(STORAGE_KEYS.FC_MASTERED, JSON.stringify(m));
  }
  function isMastered(fcId) { return getMastered().includes(fcId); }

  // ── Study Streak ───────────────────────────────────────────
  function updateStreak() {
    const today = new Date().toDateString();
    const lastVisit = safeGet(STORAGE_KEYS.LAST_VISIT);
    let streak = parseInt(safeGet(STORAGE_KEYS.STREAK) || '0');
    if (!lastVisit) { streak = 1; }
    else {
      const last = new Date(lastVisit);
      const now = new Date();
      const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));
      if (diffDays === 0) { /* same day */ }
      else if (diffDays === 1) { streak++; }
      else { streak = 1; }
    }
    safeSet(STORAGE_KEYS.LAST_VISIT, today);
    safeSet(STORAGE_KEYS.STREAK, streak.toString());
    return streak;
  }
  function getStreak() {
    return parseInt(safeGet(STORAGE_KEYS.STREAK) || '0');
  }

  // ── Theme ──────────────────────────────────────────────────
  function getTheme() { return safeGet(STORAGE_KEYS.THEME) || 'dark'; }
  function setTheme(theme) { safeSet(STORAGE_KEYS.THEME, theme); }

  // ── Global Stats ───────────────────────────────────────────
  function getGlobalStats() {
    return {
      totalTopics: TOPICS.length,
      completedTopics: getCompleted().length,
      totalPYQs: PYQS.length,
      totalFlashcards: FLASHCARDS.length,
      bookmarksCount: getBookmarks().length,
      masteredFlashcards: getMastered().length,
      avgScore: getAverageScore(),
      streak: getStreak(),
      examsCount: getExamHistory().length
    };
  }

  return {
    getCompleted, markComplete, markIncomplete, isCompleted, getUnitProgress,
    getBookmarks, addBookmark, removeBookmark, isBookmarked, toggleBookmark,
    getNotes, saveNotes,
    getExamHistory, saveExamResult, getAverageScore,
    getMastered, markMastered, unmarkMastered, isMastered,
    updateStreak, getStreak,
    getTheme, setTheme,
    getGlobalStats
  };
})();

window.Progress = Progress;
