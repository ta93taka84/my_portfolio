gsap.registerPlugin(ScrollTrigger);

// 水平スクロール（横移動）の実装
// 縦にスクロールしている間、画面を固定し、横に移動させる
// これにより、「スクロール量」は非常に長くなるが、コンテンツは横に並ぶ
const sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".scroll-container-wrapper",
        pin: true, // 画面を固定
        scrub: 1,  // スクロールに合わせて動く（少し慣性あり）
        // snap: 1 / (sections.length - 1), // ピタッと止めるなら有効化
        end: () => "+=" + document.querySelector(".scroll-container").offsetWidth // 横幅分だけ縦スクロールを消費
    }
});

// グリッチテキストのランダムな揺れ
gsap.to(".glitch", {
    x: "random(-5, 5)",
    y: "random(-5, 5)",
    duration: 0.1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});