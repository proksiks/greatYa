<template>
  <p
    class="quality-head flex justify-between text-white md:px-10 px-2.5 pt-2.5 md:pt-10 pb-5 text-sm tracking-[-0.03em] uppercase"
  >
    <span class="quality-head-text">результат</span>
    <span class="quality-head-text">{</span>
    <span class="quality-head-text">{ баланс }</span>
    <span class="quality-head-text">эстетика</span>
    <span class="quality-head-text">}</span>
  </p>
  <div class="md:grid md:grid-cols-8 text-white px-2.5 md:px-10">
    <p
      class="md:col-start-1 md:col-end-7 uppercase 2xl:text-2xl xl:text-xl text-[2.1875rem] tracking-[-0.07em] 2xl:leading-[7.3125rem] leading-[100%] md:pb-20 pb-10"
    >
      <span class="quality-head-title block">увлеченная</span>
      <span class="quality-head-title block ml-7 md:ml-[14.5rem] text-nowrap">работа –</span>
      <span class="quality-head-title block ml-7 md:ml-[14.5rem] text-orange text-nowrap">это наш</span>
      <span class="quality-head-title block text-orange">успех</span>
    </p>
    <p
      class="quality-descr md:col-start-3 md:col-end-7 lg:col-end-5 font-petrov md:text-[1.125rem] max-w-[26.875rem] md:max-w-none"
    >
      Мы уверены, что великие компании строятся на страстных людях, увлеченных своим делом. Говорят, что наш энтузиазм
      заряжает всех вокруг, а наши идеи становятся искрами, зажигающими огонь инноваций.
    </p>
    <p
      class="quality-descr md:col-start-4 md:col-end-9 xl:text-[2.75rem] md:text-28 text-[1rem] mt-[3.75rem] md:mt-[10rem] pr-10 md:max-w-none max-w-[20.1875rem] md:ml-0 ml-auto"
    >
      Мы видим в работе не просто обязанность, а возможность воплощать смелые идеи, делая мир лучше, краше и интереснее
      в каждом дне, в каждом проекте.
    </p>
  </div>
  <div class="sm:grid grid-cols-8 xl:my-26 my-25 px-2.5 md:px-10">
    <div class="col-start-1 col-end-3">
      <div class="quality-image overflow-hidden">
        <img
          class="xs:max-w-[9.625rem] md:max-w-[15.625rem] xl:max-w-none"
          src="/images/quality/quality-1.png"
          alt="Жилой комплекс"
          width="443"
          height="500"
        />
      </div>
    </div>
    <div class="col-start-4 col-end-8 ml-[2rem] md:ml-0 xl:mt-[17.25rem] md:mt-[7.75rem] mt-[1.5rem]">
      <div class="quality-image overflow-hidden">
        <img src="/images/quality/quality-2.png" alt="Жилой комплекс" width="909" height="561" />
      </div>
    </div>
    <div class="col-start-3 col-end-5 md:mt-[10rem] mt-[3.75rem]">
      <div class="quality-image overflow-hidden">
        <img
          class="xs:max-w-[9.625rem] md:max-w-[15.625rem] xl:max-w-none mx-auto"
          src="/images/quality/quality-3.png"
          alt="Жилой комплекс"
          width="443"
          height="500"
        />
      </div>
    </div>
  </div>
  <div class="overflow-hidden">
    <div class="relative">
      <img
        class="cols-start-3 col-end-5 block"
        src="/images/quality/quality-bg.svg"
        alt="Декоративная картинка"
        width="1903"
        height="654"
      />
      <div class="quality-white-line absolute inset-0 bg-white"></div>
    </div>
  </div>
</template>

<script setup>
  const { $gsap: gsap } = useNuxtApp();

  onNuxtReady(() => {
    gsap.from(".quality-head-text", {
      y: 20,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.05,

      scrollTrigger: {
        trigger: ".quality-head",
        scrub: true,
      },
    });

    gsap.from(".quality-head-title", {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.4,

      scrollTrigger: {
        trigger: ".quality-head-title",
        scrub: true,
      },
    });

    gsap.from(".quality-descr", {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.15,

      scrollTrigger: {
        trigger: ".quality-descr",
        scrub: true,
      },
    });

    gsap.from(".quality-white-line", {
      xPercent: 140,
      duration: 2,
      ease: "sine.out",
      stagger: 0.15,

      scrollTrigger: {
        trigger: ".quality-white-line",
        start: "top bottom",
        end: "bottom -25%",
        scrub: true,
      },
    });

    let revealContainers = document.querySelectorAll(".quality-image");

    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: true,
          start: "top bottom",
          end: "bottom 80%",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        y: -100,
        yPercent: 100,
        ease: "power2.out",
      });
      tl.from(image, 1.5, {
        duration: 2,
        opacity: 0,
        yPercent: -100,
        scale: 1.3,
        delay: -1.5,
        ease: "power2.out",
      });
    });
  });
</script>
