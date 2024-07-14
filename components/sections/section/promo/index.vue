<template>
  <div class="xl:pt-26 md:pt-[11.25rem] pt-25 xl:px-10 px-2.5 md:pb-25 pb-20">
    <div
      id="about"
      class="font-benzin grid sm:grid-cols-8 grid-cols-2 text-nowrap 2xl:leading-[7.3125rem] leading-none tracking-tighter 2xl:text-[8.125rem] xl:text-xl md:text-[3.25rem] text-[2.1875rem] uppercase"
    >
      <div class="whitespace-nowrap sm:col-start-3 col-end-9" char>харизмы</div>
      <div class="whitespace-nowrap sm:col-start-4 col-end-9 sm:ml-0 ml-8 text-orange" char>
        в том <br />
        что делаем
      </div>
    </div>
    <!-- Тот самый баг из-за которого всё скачет оч неприятный баг 2 недели -->
    <!-- Проблема в тексте стандартный шрифт грузится раньше, потом GSAP, потом шрифт tailwind хм -->
    <!--<div class="grid sm:grid-cols-8 grid-cols-2">
      <div class="sm:col-start-4 col-end-9 xl:pt-24 pt-20 sm:ml-0">
        <span class="promo-text font-medium 2xl:text-xl md:text-[1.5rem] text-sm md:leading-tight leading-none">
          Мы верим, что истинная сила кроется в том, как мы делаем свою работу — с любовью, страстью и харизмой. <br />
        </span>
        <span class="promo-text font-medium 2xl:text-xl md:text-[1.5rem] text-sm md:leading-tight leading-none">
          <br />
          Мы делаем все возможное, чтобы наша работа оставляла яркие следы в сердцах клиентов. Каждый проект — это
          возможность дать нечто большее, чем они ожидают.
        </span>
      </div>
    </div>-->
    <div class="grid sm:grid-cols-8 grid-cols-2">
      <div class="font-semibold sm:col-start-4 col-end-9 xl:pt-24 pt-20 sm:ml-0">
        <span class="promo-text 2xl:text-xl md:text-[1.5rem] text-sm md:leading-tight leading-none">
          Мы верим, что истинная сила кроется в том, как мы делаем свою работу — с любовью, страстью и харизмой. <br />
        </span>
        <span class="promo-text 2xl:text-xl md:text-[1.5rem] text-sm md:leading-tight leading-none">
          <br />
          Мы делаем все возможное, чтобы наша работа оставляла яркие следы в сердцах клиентов. Каждый проект — это
          возможность дать нечто большее, чем они ожидают.
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
  import SplitType from "split-type";

  const { $gsap: gsap } = useNuxtApp();

  onMounted(() => {
    new SplitType("[char]", {
      types: "chars",
      tagName: "span",
    });

    new SplitType(".promo-text", {
      types: "words",
      tagName: "span",
    });

    gsap.from("[char] .char", {
      y: 200,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "[char]",
        scrub: true,
      },
    });
    gsap.from(".promo-text .word", {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.075,
      scrollTrigger: {
        trigger: ".promo-text",
        scrub: true,
      },
    });
  });
</script>
