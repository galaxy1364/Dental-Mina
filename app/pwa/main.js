(() => {
  // SW
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }

  const q = (sel, root = document) => root.querySelector(sel);
  const qa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function setPage(name) {
    qa('.page').forEach(p => p.classList.toggle('on', p.getAttribute('data-page') === name));
    qa('.tab').forEach(t => t.classList.toggle('on', t.getAttribute('data-tab') === name));
    try { history.replaceState(null, '', '#'+name); } catch (_) {}
  }

  function wire() {
    qa('.tab').forEach(btn => {
      btn.addEventListener('click', () => setPage(btn.getAttribute('data-tab')));
    });
    qa('[data-go]').forEach(card => {
      const go = card.getAttribute('data-go');
      const act = () => setPage(go);
      card.addEventListener('click', act);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); }
      });
    });

    const hash = (location.hash || '').replace('#','').trim();
    if (hash) setPage(hash);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wire);
  } else {
    wire();
  }
})();
