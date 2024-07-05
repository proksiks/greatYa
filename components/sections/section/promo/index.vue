<template>
  <div class="xl:pt-26 md:pt-[11.25rem] pt-25 xl:px-10 px-2.5">
    <di
      id="about"
      class="promo-title-wrap grid sm:grid-cols-8 grid-cols-2 text-nowrap 2xl:leading-[7.3125rem] leading-[100%] tracking-tighter 2xl:text-[8.125rem] xl:text-xl md:text-[3.25rem] text-[2.1875rem] uppercase"
    >
      <div class="promo-title sm:col-start-3 col-end-9">харизмы</div>
      <div class="promo-title sm:col-start-4 col-end-9 sm:ml-0 ml-8 text-orange" char>
        в том <br />
        что делаем
      </div>
    </di>
    <div class="grid sm:grid-cols-8 grid-cols-2">
      <div class="promo-descr font-petrov md:text-[1.125rem] sm:col-start-3 col-end-9 xl:pt-24 pt-20 leading-[100%] sm:ml-0 max-w-[26.875rem]">
        <div class="promo-text">
          Мы верим, что истинная сила кроется в том, как мы делаем свою работу — с любовью, страстью и харизмой.
        </div>
        <div class="promo-text mt-5">
          Мы делаем все возможное, чтобы наша работа оставляла яркие следы в сердцах клиентов. Каждый проект — это
          возможность дать нечто большее, чем они ожидают.
        </div>
      </div>
      <div
        class="promo-descr font-medium sm:col-start-4 col-end-9 xl:pt-24 pt-20 2xl:text-[2.75rem] md:text-[1.5rem] text-sm leading-[100%] sm:ml-0"
      >
        <div class="promo-text">Наша команда — это союз</div>
        <div class="promo-text">харизматичных людей, привносящих в</div>
        <div class="promo-text">работу свою индивидуальность,</div>
        <div class="promo-text">творчество и фанатизм к делу. Мы не</div>
        <div class="promo-text">просто выполняем задачи, мы</div>
        <div class="promo-text">создаем наследие для потомков.</div>
        <div class="promo-text">Достойная цель, чтобы жить!</div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const { $gsap: gsap } = useNuxtApp();

  onNuxtReady(() => {
    gsap.from(".promo-title", {
      y: 200,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.05,

      scrollTrigger: {
        trigger: ".promo-title-wrap",
        start: "top bottom",
        end: "bottom top+=200px",
        scrub: true,
      },
    });

    gsap.from(".promo-text", {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.075,

      scrollTrigger: {
        trigger: ".promo-descr",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
</script>
