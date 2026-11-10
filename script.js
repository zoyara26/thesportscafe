// Mobile nav
const toggle = document.querySelector('.nav__toggle');
const links = document.getElementById('nav-links');
const setNav = (open) => {
  toggle.setAttribute('aria-expanded', String(open));
  links.classList.toggle('is-open', open);
};
toggle.addEventListener('click', () => setNav(toggle.getAttribute('aria-expanded') !== 'true'));
links.addEventListener('click', (e) => { if (e.target.closest('a')) setNav(false); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && links.classList.contains('is-open')) { setNav(false); toggle.focus(); }
});

// Menu tabs (WAI-ARIA tabs pattern, arrow keys + Home/End)
const tabs = [...document.querySelectorAll('[role="tab"]')];
const select = (tab, focus = true) => {
  tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    const panel = document.getElementById(t.getAttribute('aria-controls'));
    panel.hidden = !on;
    panel.classList.toggle('is-in', on);
  });
  if (focus) tab.focus();
  tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
};
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => select(tab, false));
  tab.addEventListener('keydown', (e) => {
    const map = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    select(tabs[(map[e.key] + tabs.length) % tabs.length]);
  });
});

// Reveal sections on scroll
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.section__head, .games__media, .games__copy, .gallery, .visit > *').forEach((el) => {
    el.classList.add('reveal'); io.observe(el);
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
