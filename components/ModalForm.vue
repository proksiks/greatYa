<template>
  <VueFinalModal
    content-class=" max-w-[44.8125rem] ml-auto relative h-full flex-1 md:py-0 md:px-0 py-[3.9375rem] px-2.5"
    swipe-to-close="right"
    content-transition="vfm-slide-right"
    overlay-transition="vfm-fade"
  >
    <div class="bg-black text-white md:p-20 sm:p-10 p-5 h-full overflow-auto flex flex-col">
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
      <Form class="flex-1" :title="title" />
    </div>
  </VueFinalModal>
</template>

<script setup>
  import { VueFinalModal } from "vue-final-modal";

  const props = defineProps({
    title: { type: String },
  });
</script>
