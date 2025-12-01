gsap.registerPlugin(ScrollTrigger);

// 画像の鋭い出現（クリップパス）
gsap.utils.toArray('.js-reveal-img').forEach(target => {
    gsap.fromTo(target, 
        { clipPath: "inset(0 100% 0 0)" },
        { 
            clipPath: "inset(0 0% 0 0)",
            duration: 1.2,
            ease: "power4.out", // キビキビした動き
            scrollTrigger: {
                trigger: target,
                start: "top 70%"
            }
        }
    );
});

// テキストのスライドイン
gsap.utils.toArray('.js-text-anim').forEach(target => {
    gsap.from(target, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: target,
            start: "top 80%"
        }
    });
});

// メニューラインのアニメーション
gsap.utils.toArray('.js-line-anim').forEach(target => {
    gsap.from(target, {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: target,
            start: "top 90%"
        }
    });
});