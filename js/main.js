gsap.registerPlugin(ScrollTrigger);

// 1. ヒーローエリアのテキスト登場
gsap.from(".js-hero-anim", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power4.out",
    delay: 0.2
});

// 2. WORKセクションのカードを順番に表示
// Staggerを使って、左から順番にフワッと浮き上がらせる
gsap.utils.toArray('.js-work-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%", // 画面の下の方に来たら発火
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: i * 0.1 // 少しずつ遅らせる
    });
});

// 3. ナビゲーションのスムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 80, // ヘッダーの高さ分引く
                behavior: 'smooth'
            });
        }
    });
});