<template>
  <div class="xl:my-26 md:my-[11.25rem] my-25 xl:px-10 px-2.5">
    <div
      class="grid sm:grid-cols-8 grid-cols-2 text-nowrap 2xl:leading-[7.3125rem] leading-[100%] tracking-tighter 2xl:text-[8.125rem] xl:text-xl md:text-[3.25rem] text-[2.1875rem] uppercase"
    >
      <p class="sm:col-start-3 col-end-9" char>харизмы</p>
      <p class="sm:col-start-4 col-end-9 sm:ml-0 ml-8 text-orange" char>
        в том <br />
        что делаем
      </p>
    </div>
    <div class="grid sm:grid-cols-8 grid-cols-2">
      <div
        class="font-medium sm:col-start-4 col-end-9 xl:mt-24 mt-20 2xl:text-[2.75rem] md:text-[1.5rem] text-sm 2xl:leading-[3rem] leading-[100%] sm:ml-0"
      >
        <p word>Мы делаем все возможное, чтобы</p>
        <p word>наша работа не только удивляла, но и</p>
        <p word>захватывала дух, оставляя яркие</p>
        <p word>следы в сердцах клиентов. Каждый</p>
        <p word>проект — это возможность дать</p>
        <p word>каждому из них нечто большее, чем они ожидают.</p>
      </div>
    </div>
  </div>
</template>
<script setup>
  import SplitType from "split-type";

  const { $gsap: gsap } = useNuxtApp();

  onMounted(() => {
    new SplitType("[char]", {
      types: "lines, words, chars",
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
        start: "top bottom",
        end: "bottom top+=200px",
        scrub: true,
      },
    });

    new SplitType("[word]", {
      types: "lines, words, chars",
      tagName: "span",
    });

    gsap.from("[word] .word", {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.075,

      scrollTrigger: {
        trigger: "[word]",
        start: "top bottom",
        end: "bottom top+=200px",
        scrub: true,
      },
    });
  });
</script>
