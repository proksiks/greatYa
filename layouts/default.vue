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
  import Lenis from "@studio-freight/lenis";
  const app = useNuxtApp();
  const lenis = new Lenis({
    duration: 1.2,
    lerp: 0.05,
    smoothWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    app.$ScrollTrigger.update();
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  onMounted(() => {
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
</script>
