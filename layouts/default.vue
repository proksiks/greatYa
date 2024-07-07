<template>
  <div>
    <Loader />
    <Header />
    <div id="scene">
      <div class="bg-white">
        <slot />
      </div>
      <div :style="{ marginTop: `${footerHeight}px` }">
        <div class="fixed bottom-0 left-0 w-full bg-white -z-10" ref="footer">
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const footer = ref(null);
  const footerHeight = ref(0);
  onMounted(() => {
    footerHeight.value = footer.value.offsetHeight;
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
