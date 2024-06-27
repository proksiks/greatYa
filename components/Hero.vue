<template>
  <video class="w-full h-svh" src="/images/hero/screen.mp4" muted loop ref="video"></video>
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
