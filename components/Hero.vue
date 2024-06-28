<template>
  <video class="w-full h-svh" muted loop ref="video">
    <source src="/images/hero/screen.mp4" type="video/mp4" />
    <source src="/images/hero/screen.mp4" type="video/webm" />
  </video>
</template>

<script setup>
  const video = ref(null);
  onMounted(() => {
    nextTick(() => {
      const startVideo = async () => {
        try {
          await video.value.play();
          video.value.setAttribute("autoplay", true);
        } catch (err) {
          console.error(err);
        }
      };

      setTimeout(startVideo, 800);
    });
  });
</script>
