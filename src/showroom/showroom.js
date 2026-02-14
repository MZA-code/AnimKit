// AnimKit Showroom - Tabs + Copy to clipboard
document.addEventListener('DOMContentLoaded', () => {

  // Tab toggle: click to open/close, only one open at a time per card
  document.querySelectorAll('.code-tabs-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabs = btn.closest('.code-tabs');
      const target = btn.dataset.tab;
      const panel = tabs.querySelector(`.code-tab-panel[data-tab="${target}"]`);
      const isOpen = btn.classList.contains('active');

      // Close all tabs in this card
      tabs.querySelectorAll('.code-tabs-btn').forEach(b => b.classList.remove('active'));
      tabs.querySelectorAll('.code-tab-panel').forEach(p => p.classList.remove('open'));

      // Toggle: if it was closed, open it
      if (!isOpen) {
        btn.classList.add('active');
        panel.classList.add('open');
      }
    });
  });

  // Copy to clipboard
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const code = btn.closest('.code-tab-panel').querySelector('code').textContent;
      navigator.clipboard.writeText(code).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });

  // Replay one-shot animations on click
  document.querySelectorAll('[data-replay]').forEach(el => {
    el.addEventListener('click', () => {
      const target = el.closest('.demo-card').querySelector('.demo-element');
      const classes = target.className;
      target.className = '';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          target.className = classes;
        });
      });
    });
  });
});