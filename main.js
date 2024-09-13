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
            .to(loadingElement, { opacity: 0, duration: 0.5, delay: 3 })  // Keep .loading for 3 seconds, then fade out
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
