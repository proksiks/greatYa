<template>
  <div class="points-block relative overflow-hidden md:px-10 px-2.5" id="value">
    <div
      class="words flex flex-nowrap items-center absolute h-svh top-0 lg:text-[21.3125rem] md:text-[13.75rem] text-[8.5rem] text-orange uppercase"
      ref="scrollPointsWords"
    >
      <span class="word-1 block xl:pr-25 shrink-0">ха</span>
      <span class="word-1 block xl:pr-25 shrink-0 text-center"> риз </span>
      <span class="word-1 block">мы</span>
    </div>
    <div class="points flex items-center" ref="scrollPoints">
      <div class="flex flex-nowrap relative z-20 md:py-25 py-20">
        <div class="point-1 shrink-0 max-w-[16.5rem] md:max-w-none md:w-auto w-screen">
          <div class="z-10 max-w-[26.875rem] min-w-[14rem] xl:mr-[9.375rem] md:mr-[5rem] mr-[1.6875rem]">
            <div class="md:pb-5 pb-2.5 pd:text-sm text-[0.625rem]">{ 1 }</div>
            <div class="pb-2.5 md:text-lg text-sm uppercase font-medium">Синергия</div>
            <div class="font-petrov md:text-[1.25rem] text-[0.75rem]">
              Гармоничное объединение для движения к результату, когда 1+1=5
            </div>
          </div>
        </div>
        <div class="point-1 shrink-0 max-w-[16.5rem] md:max-w-none md:w-auto w-screen">
          <div class="z-10 mt-20 xl:mr-26 mr-10">
            <img
              class="block xl:mb-[10.25rem] md:mb-[5.625rem] mb-[3.5625rem] min-w-[13.4375rem] md:w-[27.8125rem] w-[13.4375rem]"
              width="445"
              height="269"
              src="/images/points/point-1.png"
              alt="Здание"
            />
            <div class="max-w-[26.875rem] min-w-[14rem] xl:ml-[7.5625rem] md:ml-[2.5rem] ml-[1.25rem] mb-5">
              <p class="md:mb-5 mb-2.5 md:text-sm text-[0.625rem]">{ 2 }</p>
              <p class="mb-2.5 md:text-lg text-sm uppercase font-medium">Любовь</p>
              <p class="font-petrov md:text-[1.25rem] text-[0.75rem]">
                Искренняя заинтересованность в жизни и развитии дела, клиентов, жизни людей. Мы делаем все важное для
                результата сами, проактивно
              </p>
            </div>
          </div>
        </div>
        <div class="point-1 shrink-0 max-w-[16.5rem] md:max-w-none md:w-auto w-screen">
          <div class="z-10">
            <div class="max-w-[26.875rem] min-w-[14rem]">
              <p class="md:mb-5 mb-2.5 md:text-sm text-[0.625rem]">{ 3 }</p>
              <p class="mb-2.5 md:text-lg text-sm uppercase font-medium">Развитие</p>
              <p class="font-petrov md:text-[1.25rem] text-[0.75rem]">
                Постоянные изменения себя через знания, опыт и обучение. Каждый день быть лучше, чем вчера. Обогатить
                города проектами
              </p>
            </div>
            <img
              class="block md:mt-[8.4375rem] mt-[5rem] xl:ml-26 md:ml-25 ml-[1.875rem] min-w-[13.4375rem] md:w-[27.8125rem] w-[13.4375rem]"
              width="445"
              height="410"
              src="/images/points/point-2.png"
              alt="Здание"
            />
          </div>
        </div>
        <div class="point-1 shrink-0 max-w-[16.5rem] md:max-w-none md:w-auto w-screen flex items-end">
          <div class="relative z-20 max-w-[26.875rem] min-w-[14rem] xl:ml-25 ml-20 pr-5 mt-auto mb-5">
            <p class="md:mb-5 mb-2.5 md:text-sm text-[0.625rem]">{ 4 }</p>
            <p class="mb-2.5 md:text-lg text-sm uppercase font-medium">Эффективность</p>
            <p class="font-petrov md:text-[1.25rem] text-[0.75rem]">
              Получение максимального результата с приложением максимальных усилий
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="md:pt-25 md:pb-26 sm:pb-25 pb-10">
      <div
        class="points-text font-medium max-w-[75rem] 2xl:text-[2.75rem] md:text-[1.5rem] text-sm md:leading-[125%] ml-auto"
      >
        Наша команда — это союз харизматичных людей, привносящих в работу свою индивидуальность, творчество и фанатизм к
        делу. Мы не просто выполняем задачи, мы создаем наследие для потомков. Достойная цель, чтобы жить!
      </div>
    </div>
  </div>
</template>

<script setup>
  import SplitType from "split-type";

  const app = useNuxtApp();
  const scrollPoints = ref(null);
  const scrollPointsWords = ref(null);

  // onNuxtReady ||
  onMounted(() => {
    app.$gsap.to(scrollPoints.value, {
      xPercent: -115,
      ease: "none",
      scrollTrigger: {
        trigger: scrollPoints.value,
        pin: true,
        scrub: 3,
        end: "+=" + scrollPoints.value.offsetWidth,
      },
    });
    app.$gsap.to(scrollPointsWords.value, {
      xPercent: -70,
      ease: "none",
      scrollTrigger: {
        trigger: scrollPointsWords.value,
        pin: true,
        scrub: 3,
        end: "+=" + scrollPoints.value.offsetWidth,
      },
    });

    new SplitType(".points-text", {
      types: "words",
      tagName: "span",
    });

    app.$gsap.from(".points-text .word", {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.075,

      scrollTrigger: {
        trigger: ".points-text",
        scrub: true,
      },
    });
  });
</script>
