<template>
  <div>
    <Loader />
    <Header />
    <div id="scene">
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script setup>
  //import Lenis from "@studio-freight/lenis";
  const app = useNuxtApp();

  onMounted(() => {
    nextTick(() => {
      //const lenis = new Lenis({
      //  duration: 1.2,
      //  lerp: 0.05,
      //  smoothWheel: true,
      //  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      //});

      //function raf(time) {
      //  lenis.raf(time);
      //  app.$ScrollTrigger.update();
      //  requestAnimationFrame(raf);
      //}

      //requestAnimationFrame(raf);
    });

    document.querySelectorAll('a[href^="#"]').forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const id = el.getAttribute("href")?.slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });

  //import Lenis from "@studio-freight/lenis";

  //const { width } = useWindowSize();
  //const app = useNuxtApp();
  //const lenis = new Lenis({
  //  content: document.querySelector("#scene"),
  //  lerp: 0.05,
  //  orientation: width.value >= 768 ? "vertical" : "horizontal",
  //  gestureOrientation: "vertical",
  //  smoothWheel: true,
  //});

  //onNuxtReady(() => {
  //  lenis.on("scroll", app.$ScrollTrigger.update);

  //  app.$gsap.ticker.add((time) => {
  //    lenis.raf(time * 1000);
  //  });

  //  app.$gsap.ticker.lagSmoothing(0);

  //  document.querySelectorAll('a[href^="#"]').forEach((el) => {
  //    el.addEventListener("click", (e) => {
  //      e.preventDefault();
  //      const id = el.getAttribute("href")?.slice(1);
  //      if (!id) return;
  //      const target = document.getElementById(id);
  //      if (target) {
  //        target.scrollIntoView({ behavior: "smooth" });
  //      }
  //    });
  //  });
  //});
</script>
