<template>
  <VueFinalModal
    content-class=" max-w-[44.8125rem] ml-auto relative h-full flex-1 "
    swipe-to-close="right"
    content-transition="vfm-slide-right"
    overlay-transition="vfm-fade"
  >
    <div class="bg-black text-white p-20 h-full overflow-auto">
      <div class="mb-[2.25rem] sticky -top-20 z-10">
        <button class="relative w-[3.1875rem] h-[3.1875rem] ml-auto block" @click="$emit('close')">
          <span
            class="block w-full h-1 bg-orange absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"
          ></span>
          <span
            class="block w-full h-1 bg-orange absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"
          ></span>
        </button>
      </div>
      <div class="text-lg mb-[6.75rem] pr-5">{{ title }}</div>
      <div class="bg-black absolute top-1/2" v-if="!sucess">Спасибо, ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.</div>
      <Form v-else />
    </div>
  </VueFinalModal>
</template>

<script setup>
  import { VueFinalModal } from "vue-final-modal";

  const props = defineProps({
    title: {
      type: String,
      default: "Хотите узнать о нас больше? Напишите нам!",
    },
  });
</script>
