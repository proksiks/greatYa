<template>
  <div id="viewport">
    <Loader />
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
  import Lenis from "@studio-freight/lenis";

  const { $gsap: gsap } = useNuxtApp();

  onMounted(() => {
    const scrollLenis = new Lenis({
      duration: 5,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    gsap.ticker.add((time) => {
      scrollLenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  });
</script>
