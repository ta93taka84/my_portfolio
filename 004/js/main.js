gsap.registerPlugin(ScrollTrigger);

// 優しいフェードアップ
gsap.utils.toArray('.js-fade-up').forEach(target => {
    gsap.from(target, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: target,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});

// パララックス（背景がゆっくり動く）
gsap.to(".js-parallax-img", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
        trigger: ".landscape",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});