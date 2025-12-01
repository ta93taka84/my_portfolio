// GSAPプラグインの登録
gsap.registerPlugin(ScrollTrigger);

// 1. ヒーローエリアのテキスト登場アニメーション
gsap.from(".js-hero-anim", {
    duration: 1.2,
    y: 50,       // 下から50pxの位置から
    opacity: 0,  // 透明度0から
    ease: "power3.out",
    delay: 0.5   // 0.5秒待ってから開始
});

// 2. 各セクションのスクロール連動アニメーション
// .js-gift-section クラスがついた要素すべてに対して処理を実行
gsap.utils.toArray('.js-gift-section').forEach((section) => {
    const img = section.querySelector('.gift-img-box');
    const text = section.querySelector('.gift-text-box');

    // A. 画像がふわっと現れるアニメーション
    gsap.from(img, {
        duration: 1,
        opacity: 0,
        scale: 0.9, // 少し縮小した状態から
        scrollTrigger: {
            trigger: section,    // このセクションが画面に来たら発火
            start: "top 70%",    // 画面の上から70%の位置に来たら開始
            toggleActions: "play none none reverse" // 行って戻ったら逆再生
        }
    });

    // B. テキストが横からスライドインするアニメーション
    // セクションが左右どちらの配置か判定して方向を変える
    gsap.from(text, {
        duration: 1,
        // CSSのflex-directionを見て、右から来るか左から来るか決める
        x: getComputedStyle(section).flexDirection === 'row-reverse' ? -50 : 50,
        opacity: 0,
        delay: 0.2, // 画像より少し遅れて開始
        scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse"
        }
    });
});