<template>
  <div class="md:mt-26 mt-25 md:mx-10 mx-2.5" ref="footer">
    <div class="md:grid md:grid-cols-8 md:mb-[8rem] mb-[1.8125rem]">
      <div class="col-start-1 col-end-4 hidden md:block">
        <a class="block" href="https://t.me/senior_frontender">telegram app</a>
        <a class="block mt-5" href="https://www.youtube.com/?app=desktop&hl=ru" target="_blank">youtube</a>
        <a class="block mt-5" href="https://vk.com/login?u=2&to=L3dlYi5hcHBz" target="_blank">вконтакте</a>
      </div>
      <div class="col-start-4 col-end-9">
        <p class="xl:text-[2.75rem] md:text-[1.5rem] font-medium">
          У нас происходит много всего! Подпишись, чтобы быть в курсе
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse pb-10 md:grid md:grid-cols-8">
      <div class="md:col-start-1 md:col-end-4">
        <div class="flex flex-col justify-end md:mt-0 mt-[4.75rem] h-full">
          <div class="flex justify-center w-full text-[0.75rem] md:hidden">
            <a class="block" href="tg://t.me/USERNAME">telegram app</a>
            <a class="block mx-[2.9375rem]" href="https://www.youtube.com/?app=desktop&hl=ru" target="_blank">
              youtube
            </a>
            <a class="block" href="https://vk.com/login?u=2&to=L3dlYi5hcHBz" target="_blank">вконтакте</a>
          </div>
          <div class="justify-center md:justify-start my-2.5 md:my-0">
            <!--<img src="/images/big-logo.svg" alt="Логотип" loading="lazy" />-->
            <video muted loop ref="footerVideo">
              <source src="/images/hero/screen.webm" type="video/webm" />
              <source src="/images/hero/screen.mp4" type="video/mp4" />
              <track src="/images/hero/screen.mp4" kind="captions" srclang="ru" label="Описание" />
            </video>
          </div>
          <div class="flex items-end w-full col-span-5 md:hidden">
            <div class="flex items-center justify-between font-petrov w-full text-[0.75rem]">
              <nuxt-link class="hover:no-underline underline" to="#">Политика конфиденциальности</nuxt-link>
              <span class="">© {{ year }} отличны</span>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-5 md:col-start-4 md:col-end-9">
        <forms-footer />
        <div class="col-start-2 col-end-6 w-full hidden md:flex items-end">
          <div class="flex items-center justify-between w-full">
            <nuxt-link class="hover:no-underline underline" to="#">Политика конфиденциальности</nuxt-link>
            <span>© {{ year }} отличны</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const footer = ref(null);
  const footerVideo = ref(null);

  const date = new Date();
  const year = computed(() => {
    return date.getFullYear();
  });

  onMounted(() => {
    nextTick(() => {
      const startVideo = async () => {
        try {
          await footerVideo.value.play();
          footerVideo.value.setAttribute("autoplay", true);
        } catch (err) {
          console.error(err);
        }
      };
      const pauseVideo = async () => {
        try {
          await footerVideo.value.pause();
        } catch (err) {
          console.error(err);
        }
      };
      const loadVideo = async () => {
        try {
          await footerVideo.value.load();
        } catch (err) {
          console.error(err);
        }
      };

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setTimeout(startVideo, 1000);
          } else {
            setTimeout(pauseVideo, 500);
            footerVideo.currentTime = 0;
            setTimeout(loadVideo, 500);
          }
        },
        {
          threshold: 0.1,
        }
      );

      observer.observe(footer.value);
    });
  });
</script>
