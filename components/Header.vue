<template>
  <header ref="header"
    class="flex items-center justify-between fixed left-0 top-0 w-full text-center lg:px-10 p-2.5 lg:py-5 duration-500 bg-white transition translate"
    :class="{ '-translate-y-full': translateHeader }">
    <nuxt-link to="/">
      <img class="md:w-[79px] w-[63px]" src="/images/logo.svg" alt="Логотип" width="79" height="49" loading="lazy" />
    </nuxt-link>
    <div class="flex-1 md:flex hidden justify-between">
      <nav class="mx-auto">
        <ul class="flex gap-5 uppercase">
          <li>
            <nuxt-link class="hover:text-orange transition text-color font-medium text-nowrap" to="#">о нас</nuxt-link>
          </li>
          <li>
            <nuxt-link class="hover:text-orange transition text-color font-medium" to="#">ценности</nuxt-link>
          </li>
          <li>
            <nuxt-link class="hover:text-orange transition text-color font-medium" to="#">основатели</nuxt-link>
          </li>
          <li>
            <nuxt-link class="hover:text-orange transition text-color font-medium" to="#">проекты</nuxt-link>
          </li>
        </ul>
      </nav>
      <button class="relative uppercase group ml-5" @click="showModal">
        связаться
        <span
          class="absolute -bottom-1 left-0 w-full h-0.5 bg-black transition duration-300 origin-right scale-x-100 group-hover:scale-x-0"></span>
        <span
          class="absolute -bottom-1 left-0 w-full h-0.5 bg-black transition delay-300 duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
      </button>
      <button class="relative ">
        <span class="w-full absolute h-0.5 left-50"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
  const header = ref(null);
  const translateHeader = ref(false);

  onMounted(() => {
    let prevScrollpos = window.pageYOffset;
    let headerBottom = header.offsetTop + header.offsetHeight;

    window.addEventListener("scroll", function (e) {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos || currentScrollPos < headerBottom) {
        translateHeader.value = false;
      } else {
        translateHeader.value = true;
      }
      prevScrollpos = currentScrollPos;
    });
  });
</script>