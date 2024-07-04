<template>
  <div class="md:mt-26 mt-25 md:mx-10 mx-2.5" ref="footer">
    <div class="md:grid md:grid-cols-8 md:mb-[8rem] mb-[1.8125rem]">
      <div class="col-start-1 col-end-4 hidden md:block">
        <a class="block uppercase font-medium hover:text-orange transition-all" href="https://www.youtube.com/channel/UCf1D4M-fAz75YWQugRCk4sA" target="_blank">youtube</a>
        <a class="block uppercase font-medium mt-5 hover:text-orange transition-all" href="https://vk.com/gsbktmn" target="_blank">вконтакте</a>
        <a class="block uppercase font-medium mt-5 hover:text-orange transition-all" href="https://t.me/sbk_tyumen">telegram</a>
      </div>
      <div class="col-start-4 col-end-9">
        <p class="xl:text-[2.75rem] md:text-[1.5rem] font-medium">
          У нас происходит много всего! Подпишись, чтобы быть в курсе
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:pb-10 pb-5 md:grid md:grid-cols-8">
      <div class="md:col-start-1 md:col-end-4">
        <div class="flex flex-col justify-end md:mt-0 mt-[4.75rem] h-full">
          <div class="flex justify-center w-full text-[0.75rem] md:hidden">
            <a class="block uppercase font-medium" href="tg://sbk_tyumen">telegram</a>
            <a class="block uppercase font-medium mx-[2.9375rem]" href="https://www.youtube.com/channel/UCf1D4M-fAz75YWQugRCk4sA" target="_blank">
              youtube
            </a>
            <a class="block uppercase font-medium" href="https://vk.com/gsbktmn" target="_blank">вконтакте</a>
          </div>
          <div class="justify-center md:justify-start my-2.5 md:my-0">
            <!--<img src="/images/big-logo.svg" alt="Логотип" loading="lazy" />-->
            <video muted loop ref="footerVideo" poster="/images/video-holder.png">
              <source src="/images/hero/screen.webm" type="video/webm" />
              <source src="/images/hero/screen.mp4" type="video/mp4" />
              <track src="/images/hero/screen.mp4" kind="captions" srclang="ru" label="Описание" />
            </video>
          </div>
          <div class="w-full col-span-5 md:hidden">
            <div class="flex items-center justify-between font-petrov w-full text-[0.75rem]">
              <nuxt-link class="font-petrov hover:no-underline underline" to="#">Политика конфиденциальности</nuxt-link>
              <span class="uppercase">© {{ year }} харизмы</span>
            </div>
            <a class="flex items-center justify-center uppercase text-[0.75rem] mt-5" href="https://bureausuchkov.com/" target="_blank">
              сделано в бюро сучкова
              <img class="ml-2" src="/images/dev-logo.svg" alt="бюро сучкова" loading="lazy" width="15" height="15" />
            </a>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-5 md:col-start-4 md:col-end-9 font-petrov">
        <forms-footer class="col-start-1 md:col-start-2 lg:col-end-5 col-end-6" />
        <div class="md:flex items-end col-start-1 col-end-2 uppercase hidden">© 2024 харизмы</div>
        <div class="col-start-2 col-end-6 w-full hidden md:flex items-end">
          <div class="flex items-center justify-between w-full">
            <a class="hover:no-underline underline" href="pdfs/policy.pdf" download>Политика конфиденциальности</a>
            <a class="flex items-center uppercase" href="https://bureausuchkov.com/" target="_blank">
              сделано в бюро сучкова
              <img class="ml-2" src="/images/dev-logo.svg" alt="бюро сучкова" loading="lazy" width="15" height="15" />
            </a>
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
