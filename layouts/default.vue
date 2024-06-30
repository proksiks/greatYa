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
  import { useWindowSize } from "@vueuse/core";
  import Lenis from "@studio-freight/lenis";

  const { width } = useWindowSize();
  const app = useNuxtApp();
  const lenis = new Lenis({
    //content: document.querySelector("#scene"),
    lerp: 0.05,
    orientation: width.value >= 768 ? "vertical" : "horizontal",
    gestureOrientation: "vertical",
    smoothWheel: true,
  });

  onMounted(() => {
    lenis.on("scroll", app.$ScrollTrigger.update);

    app.$gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    app.$gsap.ticker.lagSmoothing(0);
  });
</script>
