<template>
  <form @submit.prevent>
    <label class="block relative group">
      <input
        class="peer py-2.5 w-full md:text-lg text-[0.875rem] bg-transparent placeholder:text-transparent group-hover:border-orange transition-all outline-none border-b-2"
        type="text"
        placeholder="Имя*"
      />
      <span
        class="peer-[&:not(:placeholder-shown)]:text-[14px] peer-[&:not(:placeholder-shown)]:top-[-1.625rem] peer-[&:not(:placeholder-shown)]:text-orange transition-all absolute left-0 top-0 md:text-lg text-[0.875rem] pt-2.5 text-white/40 pointer-events-none"
      >
        Имя*
      </span>
    </label>
    <label class="block relative group mt-[3.75rem]">
      <input
        class="peer py-2.5 w-full md:text-lg text-[0.875rem] bg-transparent placeholder:text-transparent group-hover:border-orange transition-all outline-none border-b-2"
        type="tel"
        placeholder="Телефон*"
      />
      <span
        class="peer-[&:not(:placeholder-shown)]:text-[14px] peer-[&:not(:placeholder-shown)]:top-[-1.625rem] peer-[&:not(:placeholder-shown)]:text-orange transition-all absolute left-0 top-0 md:text-lg text-[0.875rem] pt-2.5 text-white/40 pointer-events-none"
      >
        Телефон*
      </span>
    </label>
    <div class="mt-10">
      <label class="flex items-center flex-wrap gap-y-2 font-petrov cursor-pointer">
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
      <button class="relative uppercase group text-lg" @click="$emit('confirm')">
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
</template>

<script setup></script>
