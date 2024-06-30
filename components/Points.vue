<template>
  <div class="points-scene relative overflow-hidden md:px-10 px-2.5 xl:mt-26 mt-25">
    <div class="points flex flex-nowrap relative z-20">
      <div class="point-1 shrink-0">
        <div class="relative z-10 max-w-[26.875rem] min-w-[14rem] xl:mr-[9.375rem] md:mr-[5rem] mr-[1.6875rem]">
          <p class="md:mb-5 mb-2.5 md:text-sm text-[0.625rem]">{ 1 }</p>
          <p class="mb-2.5 md:text-lg text-sm uppercase font-medium">Синергия</p>
          <p class="font-petrov md:text-[1rem] text-[0.75rem]">
            Гармоничное объединение для движения к результату, когда 1+1=5
          </p>
        </div>
      </div>
      <div class="point-1 shrink-0">
        <div class="relative z-10 mt-20 xl:mr-[16.625rem] md:mr-[7.5rem] mr-[1.6875rem]">
          <img
            class="block xl:mb-[10.25rem] md:mb-[5.625rem] mb-[3.5625rem] min-w-[13.4375rem]"
            width="445"
            height="269"
            src="/images/points/point-1.png"
            alt="Здание"
            loading="lazy"
          />
          <div class="max-w-[26.875rem] min-w-[14rem] xl:ml-[7.5625rem] md:ml-[2.5rem] ml-[1.25rem] mb-5">
            <p class="md:mb-5 mb-2.5 md:text-sm text-[0.625rem]">{ 2 }</p>
            <p class="mb-2.5 md:text-lg text-sm uppercase font-medium">Любовь</p>
            <p class="font-petrov md:text-[1rem] text-[0.75rem]">
              Искренняя заинтересованность в жизни и развитии дела, клиентов, жизни людей. Мы делаем все важное для
              результата сами, проактивно
            </p>
          </div>
        </div>
      </div>
      <div class="point-1 shrink-0">
        <div class="relative z-10">
          <div class="max-w-[26.875rem] min-w-[14rem]">
            <p class="md:mb-5 mb-2.5 md:text-sm text-[0.625rem]">{ 3 }</p>
            <p class="mb-2.5 md:text-lg text-sm uppercase font-medium">Развитие</p>
            <p class="font-petrov md:text-[1rem] text-[0.75rem]">
              Постоянные изменения себя через знания, опыт и обучение. Каждый день быть лучше, чем вчера. Обогатить
              города проектами
            </p>
          </div>
          <img
            class="block md:mt-[8.4375rem] mt-[5rem] xl:ml-[12.0625rem] md:ml-[5.625rem] ml-[1.875rem] min-w-[13.4375rem]"
            width="445"
            height="269"
            src="/images/points/point-2.png"
            alt="Здание"
            loading="lazy"
          />
        </div>
      </div>
      <div class="point-1 shrink-0 flex items-end">
        <div
          class="relative z-20 max-w-[26.875rem] min-w-[14rem] xl:ml-[16.25rem] md:ml-[7.5rem] ml-[5rem] pr-5 mt-auto mb-5"
        >
          <p class="md:mb-5 mb-2.5 md:text-sm text-[0.625rem]">{ 4 }</p>
          <p class="mb-2.5 md:text-lg text-sm uppercase font-medium">Эффективность</p>
          <p class="font-petrov md:text-[1rem] text-[0.75rem]">
            С наименьшим вложением усилий и ресурсов получение максимального резльтата
          </p>
        </div>
      </div>
    </div>
    <div
      class="words flex flex-nowrap absolute top-[3.75rem] lg:text-[21.3125rem] md:text-[13.75rem] text-[8.5rem] text-orange uppercase"
    >
      <span class="word-1 block xl:pr-[18.8125rem] pr-[7.5rem] shrink-0">ха</span>
      <span class="word-1 block xl:pr-[18.8125rem] pr-[7.5rem] shrink-0">риз</span>
      <span class="word-1 block pr-[3.125rem] shrink-0">мы</span>
    </div>
  </div>
</template>

<script setup>
  const app = useNuxtApp();

  onMounted(() => {
    const words = app.$gsap.utils.toArray(".word-1");
    const points = app.$gsap.utils.toArray(".point-1");

    app.$gsap.to(points, {
      xPercent: -300,
      scrollTrigger: {
        trigger: ".points",
        endTrigger: '.quality-black',
        pin: true,
        scrub: 1,
        markers: true,
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: '+=500',
      },
    });

    app.$gsap.to(words, {
      xPercent: -300,
      yPercent: 90,
      scrollTrigger: {
        trigger: ".words",
        pin: true,
        scrub: 1,
      },
    });
  });
</script>
