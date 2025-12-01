gsap.registerPlugin(ScrollTrigger);

// メインビジュアルの画像がゆっくりズームアウトする穏やかな効果
// yoyo: true でズームイン・アウトを繰り返す
gsap.to(".main-visual-img", {
    scale: 1.0,
    duration: 10,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
});

 // メインビジュアルのテキストがふわっと浮き出る
 gsap.from(".js-text-fade", {
    opacity: 0,
    y: 30,
    duration: 1.5,
    ease: "power2.out",
    delay: 0.5
 });

// 商品一覧が順番にフェードイン
// back.out を使って少しバウンドするような優しい動き
gsap.utils.toArray('.js-product-fade').forEach((item, index) => {
    gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)", 
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        delay: index * 0.15 // 商品ごとに0.15秒ずつ遅らせて表示
    });
});