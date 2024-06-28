<template>
  <p
    class="flex justify-between text-white md:px-10 px-2.5 pt-2.5 md:pt-10 pb-5 text-[0.875rem] tracking-[-0.03em] uppercase"
  >
    <span>результат</span>
    <span>{</span>
    <span>{ баланс }</span>
    <span>эстетика</span>
    <span>}</span>
  </p>
  <div class="md:grid md:grid-cols-8 text-white px-2.5 md:px-10">
    <p
      class="md:col-start-1 md:col-end-7 uppercase xl:text-2xl md:text-[4.5rem] text-[2.1875rem] tracking-[-0.07em] xl:leading-[7.3125rem] leading-[100%] md:pb-20 pb-10"
    >
      <span class="block">качественная</span>
      <span class="block ml-7 md:ml-[14.5rem] text-nowrap">работа –</span>
      <span class="block ml-7 md:ml-[14.5rem] text-orange text-nowrap">это наш</span>
      <span class="block text-orange">успех</span>
    </p>
    <p class="md:col-start-3 md:col-end-7 lg:col-end-5 font-petrov max-w-[17.6875rem] md:max-w-none">
      В основе нашей деятельности лежат инновации. Мы используем только лучшие материалы для строительства домов
    </p>
    <p
      class="md:col-start-4 md:col-end-9 xl:text-[2.75rem] md:text-28 text-[1rem] mt-[3.75rem] md:mt-[10rem] pr-10 md:max-w-none max-w-[20.1875rem] md:ml-0 ml-auto"
    >
      Благодаря сочетанию современного дизайна и традиционной эстетики, мы строим дома, которые воплощают в себе баланс
      стиля, комфорта
    </p>
  </div>
  <div class="sm:grid grid-cols-8 xl:my-26 my-25 px-2.5 md:px-10">
    <div class="col-start-1 col-end-3">
      <img
        class="xs:max-w-[9.625rem] md:max-w-[15.625rem] xl:max-w-none"
        src="/images/quality/quality-1.png"
        alt="Жилой комплекс"
        width="443"
        height="500"
        loading="lazy"
      />
    </div>
    <div class="col-start-4 col-end-8 ml-[2rem] md:ml-0 xl:mt-[17.25rem] md:mt-[7.75rem] mt-[1.5rem]">
      <img src="/images/quality/quality-2.png" alt="Жилой комплекс" width="909" height="561" loading="lazy" />
    </div>
    <div class="col-start-3 col-end-5 md:mt-[10rem] mt-[3.75rem]">
      <img
        class="xs:max-w-[9.625rem] md:max-w-[15.625rem] xl:max-w-none mx-auto"
        src="/images/quality/quality-3.png"
        alt="Жилой комплекс"
        width="443"
        height="500"
        loading="lazy"
      />
    </div>
  </div>
  <img
    class="cols-start-3 col-end-5 block"
    src="/images/quality/quality-bg.svg"
    alt="Декоративная картинка"
    loading="lazy"
  />
</template>
