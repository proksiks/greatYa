<template>
  <div class="md:mt-26 mt-25 md:mx-10 mx-2.5">
    <div class="md:grid md:grid-cols-8 md:mb-[8rem] mb-[1.8125rem]">
      <div class="col-start-1 col-end-4 hidden md:block">
        <a class="block" href="https://t.me/senior_frontender">telegram app</a>
        <a class="block mt-5" href="https://www.youtube.com/?app=desktop&hl=ru" target="_blank">youtube</a>
        <a class="block mt-5" href="https://vk.com/login?u=2&to=L3dlYi5hcHBz" target="_blank">вконтакте</a>
      </div>
      <div class="col-start-4 col-end-9">
        <p class="xl:text-[2.75rem] md:text-[1.5rem] font-medium">
          У нас происходит много всего! Подпишись, чтобы быть в курсе
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse pb-10 md:grid md:grid-cols-8">
      <div class="md:col-start-1 md:col-end-4">
        <div class="flex flex-col justify-end md:mt-0 mt-[4.75rem] h-full">
          <div class="flex justify-center w-full text-[0.75rem] md:hidden">
            <a class="block" href="tg://t.me/USERNAME">telegram app</a>
            <a class="block mx-[2.9375rem]" href="https://www.youtube.com/?app=desktop&hl=ru" target="_blank">
              youtube
            </a>
            <a class="block" href="https://vk.com/login?u=2&to=L3dlYi5hcHBz" target="_blank">вконтакте</a>
          </div>
          <div class="justify-center md:justify-start my-2.5 md:my-0">
            <img src="/images/big-logo.svg" alt="Логотип" loading="lazy" />
          </div>
          <div class="flex items-end w-full col-span-5 md:hidden">
            <div class="flex items-center justify-between font-petrov w-full text-[0.75rem]">
              <nuxt-link class="hover:no-underline underline" to="#">Политика конфиденциальности</nuxt-link>
              <span class="">© {{ year }} отличны</span>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-5 md:col-start-4 md:col-end-9">
        <form class="col-start-1 md:col-start-2 lg:col-end-5 col-end-6 md:mb-10">
          <label class="block relative group mt-[3.75rem]">
            <input
              class="peer py-2.5 w-full md:text-lg text-sm bg-transparent placeholder:text-transparent group-hover:border-orange transition-all outline-none border-b-2"
              type="tel"
              placeholder="Подписаться*"
            />
            <span
              class="uppercase peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:top-[-1.625rem] peer-[&:not(:placeholder-shown)]:text-orange transition-all absolute left-0 top-0 md:text-lg text-sm pt-2.5 text-black/40 pointer-events-none"
            >
              Подписаться*
            </span>
          </label>
          <div class="md:mt-10 mt-5">
            <label class="flex items-center flex-wrap gap-y-2 font-petrov cursor-pointer">
              <span class="relative block w-[0.9375rem] md:w-5 h-[0.9375rem] md:h-5 border-2 mr-2.5">
                <input
                  class="bg-transparent border-0 peer absolute opacity-0 pointer-events-none left-[-6250rem]"
                  type="checkbox"
                />
                <svg
                  class="md:w-sm md:h-[0.75rem] w-full h-full absolute peer-checked:opacity-100 opacity-0 transition-all md:top-[0.125rem] md:left-[0.0625rem]"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 6L4.78571 10L12.5 1" stroke="black" stroke-width="2" />
                </svg>
              </span>
              Согласен с&nbsp;
              <nuxt-link class="hover:no-underline underline" to="#"> политикой конфиденциальности </nuxt-link>
            </label>
          </div>
          <div class="md:mt-[3.75rem] mt-10">
            <button class="relative uppercase group md:text-lg text-sm" @click="showModal">
              подписаться
              <span
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-black transition duration-300 origin-right scale-x-100 group-hover:scale-x-0"
              ></span>
              <span
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-black transition delay-300 duration-300 origin-left scale-x-0 group-hover:scale-x-100"
              ></span>
            </button>
          </div>
        </form>
        <div class="col-start-2 col-end-6 w-full hidden md:flex items-end">
          <div class="flex items-center justify-between w-full">
            <nuxt-link class="hover:no-underline underline" to="#">Политика конфиденциальности</nuxt-link>
            <span>© {{ year }} отличны</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const openAndroidApp = "tg://t.me/USERNAME";
  const date = new Date();
  const year = computed(() => {
    return date.getFullYear();
  });
</script>
