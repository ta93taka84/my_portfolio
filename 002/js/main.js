gsap.registerPlugin(ScrollTrigger);

// ヒーローヘッダーのパララックス効果
// スクロールすると背景画像が少し遅れて動く演出
gsap.to(".hero-bg-img", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// スナップ写真がスクロールで浮き上がるアニメーション
// staggerを使って順番に表示させる
gsap.utils.toArray('.js-snap-trigger').forEach((item, index) => {
    gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: item,
            start: "top 85%", // 画面の下から15%の位置に来たら開始
            toggleActions: "play none none reverse"
        },
        delay: (index % 3) * 0.1 // 横並びの要素で少しずつタイミングをずらす
    });
});