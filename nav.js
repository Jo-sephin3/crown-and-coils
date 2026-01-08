document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('nav-toggle');
  const nav = document.querySelector('.nav-list');
  if (!btn || !nav) return;

  const closeNav = () => {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    btn.setAttribute('aria-expanded', expanded);
  });

  // close when clicking outside
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !nav.contains(e.target)) {
      closeNav();
    }
  });

  // close when a nav link is clicked
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeNav());
  });
});
