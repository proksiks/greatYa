<template>
  <div class="xl:pt-26 md:pt-[11.25rem] pt-25 xl:px-10 px-2.5 md:h-svh">
    <div
      class="grid sm:grid-cols-8 grid-cols-2 text-nowrap 2xl:leading-[7.3125rem] leading-[100%] tracking-tighter 2xl:text-[8.125rem] xl:text-xl md:text-[3.25rem] text-[2.1875rem] uppercase"
    >
      <div class="sm:col-start-3 col-end-9" char>харизмы</div>
      <div class="sm:col-start-4 col-end-9 sm:ml-0 ml-8 text-orange" char>
        в том <br />
        что делаем
      </div>
    </div>
    <div class="grid sm:grid-cols-8 grid-cols-2">
      <div
        class="font-medium sm:col-start-4 col-end-9 xl:pt-24 pt-20 2xl:text-[2.75rem] md:text-[1.5rem] text-sm leading-[100%] sm:ml-0"
      >
        <div word>Мы делаем все возможное, чтобы </div>
        <div word>наша работа не только удивляла, но и </div>
        <div word>захватывала дух, оставляя яркие </div>
        <div word>следы в сердцах клиентов. Каждый </div>
        <div word>проект — это возможность дать </div>
        <div word>каждому из них нечто большее, чем они ожидают. </div>
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
