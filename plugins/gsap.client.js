import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
    duration: 1.2,
    lerp: 0.05,
    smoothWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

export default defineNuxtPlugin((nuxtApp) => {
    onNuxtReady(() => {
        gsap.registerPlugin(ScrollTrigger);
        requestAnimationFrame(raf);
    });
    return {
        provide: {
            gsap,
            ScrollTrigger,
        },
    };
});
