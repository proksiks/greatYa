<template>
  <div class="overflow-hidden">
    <div
      class="md:grid grid-cols-8 md:pb-20 pb-10 2xl:text-2xl xl:text-xl md:text-[4.5rem] text-[2.1875rem] tracking-[-0.07em] leading-[100%] ml-5 md:ml-0"
      id="projects"
    >
      <div class="col-start-3 col-end-9">харизмы</div>
      <div class="ml-5 md:ml-0 col-start-4 col-end-9 text-orange">в проектах</div>
    </div>

    <div class="md:px-10 px-2.5">
      <div class="projects flex items-center md:h-svh">
        <div class="flex flex-nowrap relative z-20">
          <div class="project-1 flex-shrink-0 flex w-screen md:w-auto md:min-w-[50%] justify-start">
            <div class="pr-[5%] md:pr-[14%]">
              <div class="text-[0.625rem] md:text-[1rem]">{ 1 }</div>
              <div class="py-2.5 md:py-5">
                <img src="/images/projects/project-1.png" width="676" height="445" alt="Проект" loading="lazy" />
              </div>
              <div>
                <div class="flex items-start justify-between pb-2.5">
                  <span class="text-sm md:text-lg mr-5 font-medium uppercase leading-none">
                    new <br />
                    white house
                  </span>
                  <button @click="() => open()" aria-label="Модальное окно">
                    <img src="/images/icons/more.svg" width="51" height="51" loading="lazy" alt="Подробнее" />
                  </button>
                </div>
                <div class="max-w-[17.125rem] font-manrope md:text-[1rem] text-[0.75rem]">
                  от 3,7 млн ₽ <br />
                  ввод в эксплутацию: II квартал 2024 г. Тюмень
                </div>
              </div>
            </div>
          </div>
          <div class="project-1 flex-shrink-0 flex w-screen md:w-auto md:min-w-[50%] justify-start">
            <div class="pr-[5%] md:pr-[14%]">
              <div class="text-[0.625rem] md:text-[1rem]">{ 2 }</div>
              <div class="py-2.5 md:py-5">
                <img src="/images/projects/project-2.png" width="676" height="445" alt="Проект" loading="lazy" />
              </div>
              <div>
                <div class="flex items-start justify-between pb-2.5">
                  <span class="text-sm md:text-lg mr-5 font-medium uppercase leading-none">
                    Норден. <br />
                    это комфорт
                  </span>
                  <button @click="() => open()" aria-label="Модальное окно">
                    <img src="/images/icons/more.svg" width="51" height="51" loading="lazy" alt="Подробнее" />
                  </button>
                </div>
                <div class="max-w-[17.125rem] font-manrope md:text-[1rem] text-[0.75rem]">
                  от 12,7 млн ₽ <br />
                  ввод в эксплутацию: IV квартал 2024 г. Тюмень
                </div>
              </div>
            </div>
          </div>
          <div class="project-1 flex-shrink-0 flex w-screen md:w-auto md:min-w-[50%] justify-start">
            <div class="pr-[5%] md:pr-[14%]">
              <div class="text-[0.625rem] md:text-[1rem]">{ 3 }</div>
              <div class="py-2.5 md:py-5">
                <img src="/images/projects/project-3.png" width="558" height="445" alt="Проект" loading="lazy" />
              </div>
              <div>
                <div class="flex items-start justify-between pb-2.5">
                  <span class="text-sm md:text-lg mr-5 font-medium uppercase leading-none">
                    малоэтажный <br />
                    мини город 2024
                  </span>
                  <button @click="() => open()" aria-label="Модальное окно">
                    <img src="/images/icons/more.svg" width="51" height="51" loading="lazy" alt="Подробнее" />
                  </button>
                </div>
                <div class="max-w-[17.125rem] font-manrope md:text-[1rem] text-[0.75rem]">
                  от 12,7 млн ₽ <br />
                  начало строительства: 2024 г. Тюмень
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ModalsContainer, useModal } from "vue-final-modal";
  import ModalForm from "~/components/forms/modals/header/index.vue";

  const { open, close } = useModal({
    component: ModalForm,
    attrs: {
      title: "Этот проект находится на стадии планирования, чтобы узнать подробнее, напишите нам.",
      teleportTo: "body",
      onClose() {
        close();
      },
      onConfirm() {
        close();
      },
    },
  });

  const app = useNuxtApp();

  onMounted(() => {
    const projects = app.$gsap.utils.toArray(".project-1");

    app.$gsap.to(projects, {
      xPercent: -100 * (projects.length - 1),
      yPercent: 10,
      ease: "linear",
      scrollTrigger: {
        trigger: ".projects",
        pin: true,
        scrub: 1,
      },
    });
  });
</script>
