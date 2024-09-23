import './assets/scss/all.scss';
import 'bootstrap'

import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", (event) => {
    // Start GSAP code when the DOM is fully loaded
    window.onload = function () {
        const loadingElement = document.querySelector('.loading');
        const alertElement = document.querySelector('.alert-notion');
        const loadingImgElement = document.querySelector('.loading-img');

        // Create a GSAP timeline
        const tl = gsap.timeline();

        // Add animations to the timeline
        tl.to(loadingElement, { opacity: 1, duration: 0.5 })  // Fade in .loading
            .to(loadingElement, { opacity: 0, duration: 0.5, delay: 1.5 })  // Keep .loading for 3 seconds, then fade out
            .to(alertElement, { opacity: 1, duration: 0.5 })  // Fade in .alert-notion
            .to(alertElement, { opacity: 0, duration: 0.5, delay: 4 });  // Keep .alert-notion for 4 seconds, then fade out

        // Add rotation animation to the loading image
        gsap.to(loadingImgElement, {
            rotation: 360,
            duration: 1,
            repeat: -1, // Infinite loop
            ease: "linear" // Smooth and constant speed rotation
        });
    };
});


document.addEventListener("DOMContentLoaded", function () {

    const openCameraButton = document.querySelector('#open-camera-button');
    const cameraZone = document.querySelector('.camera-zone');

    openCameraButton.addEventListener('click', function () {

        // 顯示相機區域
        cameraZone.style.display = 'block';

        // 建立 GSAP 動畫時間軸
        const timeline_import = gsap.timeline({
            onComplete: function () {
                // window.location.href = 'myInvoice_view-data.html';
            }
        });

        // 添加動畫到時間軸
        timeline_import.to('.camera-layout-1', { autoAlpha: 1, duration: 2 }) // 淡入
            .to('.camera-layout-1', { autoAlpha: 0, duration: 1 }, "-=0.5") // 淡出並且下一個淡入效果提前0.5秒開始
            .to('.camera-layout-2', { autoAlpha: 1, duration: 2 }, "-=0.5") // 淡入
            .to('.camera-layout-2', { autoAlpha: 0, duration: 1 }, "-=0.5") // 淡出並且下一個淡入效果提前0.5秒開始
            .to('.camera-layout-3', { autoAlpha: 1, duration: 2 }, "-=0.5") // 淡入
            .to('.camera-layout-3', { autoAlpha: 0, duration: 1 }); // 最後一個淡出後再跳轉頁面
    });
});
