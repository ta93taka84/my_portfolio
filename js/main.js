gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const headerEl = document.querySelector('.header');
const getHeaderOffset = () => (headerEl ? headerEl.offsetHeight + 10 : 90);

// 1. ヒーローエリアのテキスト登場
if (!prefersReducedMotion) {
  gsap.from('.js-hero-anim', {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.2
  });
}

// 2. セクションタイトル（共通）
gsap.utils.toArray('.js-title-anim').forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    y: 24,
    opacity: 0,
    duration: prefersReducedMotion ? 0 : 0.9,
    ease: 'power2.out'
  });
});

// 3. WORKカードを順番に表示
gsap.utils.toArray('.js-work-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: prefersReducedMotion ? 0 : 0.8,
    ease: 'power2.out',
    delay: prefersReducedMotion ? 0 : i * 0.06
  });
});

// 4. STRENGTHカード
gsap.utils.toArray('.js-strength-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    y: 40,
    opacity: 0,
    duration: prefersReducedMotion ? 0 : 0.75,
    ease: 'power2.out',
    delay: prefersReducedMotion ? 0 : i * 0.07
  });
});

// 5. About / Contact ボックス
['.js-about-anim', '.js-contact-anim'].forEach((sel) => {
  const el = document.querySelector(sel);
  if (!el) return;
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: 'top 88%',
      toggleActions: 'play none none reverse'
    },
    y: 24,
    opacity: 0,
    duration: prefersReducedMotion ? 0 : 0.85,
    ease: 'power2.out'
  });
});

// 6. ナビゲーションのスムーススクロール（ヘッダー高さを動的に考慮）
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.pageYOffset - getHeaderOffset();

    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  });
});
