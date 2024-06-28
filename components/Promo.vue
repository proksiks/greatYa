<template>
  <div class="xl:my-26 md:my-[11.25rem] my-25 xl:px-15 px-5">
    <div class="grid sm:grid-cols-8 grid-cols-2 text-nowrap">
      <p
        class="sm:col-start-3 col-end-9 xl:leading-[7.3125rem] leading-[100%] tracking-tighter xl:text-[8.125rem] md:text-[3.25rem] text-[2.1875rem] uppercase"
        char
      >
        харизмы
      </p>
      <p
        class="sm:col-start-4 col-end-9 xl:leading-[7.3125rem] leading-[100%] tracking-tighter xl:text-[8.125rem] md:text-[3.25rem] text-[2.1875rem] uppercase text-orange sm:ml-0 ml-8"
        char
      >
        в том <br />
        что делаем
      </p>
    </div>
    <div class="grid sm:grid-cols-8 grid-cols-2">
      <p
        class="sm:col-start-4 col-end-9 xl:mt-24 mt-20 xl:text-[2.75rem] md:text-[1.5rem] xl:leading-[3rem] leading-[100%] sm:ml-0 ml-8"
        word
      >
        Мы делаем все возможное, чтобы наша работа не только удивляла, но и захватывала дух, оставляя яркие следы в
        сердцах клиентов. Каждый проект — это возможность дать каждому из них нечто большее, чем они ожидают.
      </p>
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
      y: 200,
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
