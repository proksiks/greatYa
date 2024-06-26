<template>
  <div class="pb-[11.25rem]">
    <p
      class="flex justify-between text-white md:px-10 px-2.5 pt-2.5 md:pt-10 pb-5 text-[0.875rem] tracking-[-0.03em] uppercase"
    >
      <span>результат</span>
      <span>{</span>
      <span>{ баланс }</span>
      <span>эстетика</span>
      <span>}</span>
    </p>
    <div class="md:grid md:grid-cols-8 text-white pt-2.5 md:px-10">
      <p
        class="md:col-start-1 md:col-end-7 uppercase xl:text-2xl md:text-[4.5rem] text-[2.1875rem] tracking-[-0.07em] xl:leading-[7.3125rem] leading-[100%] md:pb-[4.375rem] pb-10"
      >
        <span class="block">пригашаем</span>
        <span class="block ml-7 md:ml-[14.5rem] text-nowrap">стать частью </span>
        <span class="block ml-7 md:ml-[14.5rem] text-orange text-nowrap">нашей</span>
        <span class="block text-orange">команды</span>
      </p>
    </div>

    <div class="grid grid-cols-8">
      <div class="col-start-4 col-end-6 text-white">
        <form>
          <div class="relative group">
            <input
              class="py-2.5 w-full text-lg bg-transparent placeholder:text-white/40 group-hover:border-orange transition-all outline-none border-b-2"
              type="text"
              placeholder="Имя*"
            />
          </div>
          <div class="relative group mt-[3.75rem]">
            <input
              class="py-2.5 w-full text-lg bg-transparent placeholder:text-white/40 group-hover:border-orange transition-all outline-none border-b-2"
              type="phone"
              placeholder="Телефон*"
            />
          </div>
          <div class="mt-10">
            <label class="flex items-center font-petrov cursor-pointer">
              <span class="relative block w-5 h-5 border-2 mr-2.5">
                <input
                  class="bg-transparent border-0 peer absolute opacity-0 pointer-events-none left-[-6250rem]"
                  type="checkbox"
                />
                <svg
                  class="absolute peer-checked:opacity-100 opacity-0 transition-all top-[0.125rem] left-[0.0625rem]"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 6L4.78571 10L12.5 1" stroke="white" stroke-width="2" />
                </svg>
              </span>
              Согласен с&nbsp;
              <nuxt-link class="hover:no-underline underline" to="#"> политикой конфиденциальности </nuxt-link>
            </label>
          </div>
          <div class="mt-[3.75rem]">
            <button class="relative uppercase group text-lg" @click="showModal">
              отправить
              <span
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-white transition duration-300 origin-right scale-x-100 group-hover:scale-x-0"
              ></span>
              <span
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-white transition delay-300 duration-300 origin-left scale-x-0 group-hover:scale-x-100"
              ></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>
