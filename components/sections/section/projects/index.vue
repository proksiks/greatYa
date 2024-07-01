<template>
  <div>
    <div class="xl:my-26 my-25">
      <div
        class="md:grid grid-cols-8 md:pb-20 pb-10 2xl:text-2xl xl:text-xl md:text-[4.5rem] text-[2.1875rem] tracking-[-0.07em] 2xl:leading-[7.3125rem] leading-[100%] ml-5 md:ml-0"
      >
        <div class="col-start-3 col-end-9">харизмы</div>
        <p class="ml-5 md:ml-0 col-start-4 col-end-9 text-orange">в проектах</p>
      </div>

      <div class="projects-scene overflow-hidden md:px-10 px-2.5">
        <div class="projects relative z-20 pt-25 flex flex-nowrap">
          <div class="project-1 flex-shrink-0 max-w-[15.8125rem] xl:max-w-[42.25rem] gap-[14%] xl:pr-[14%]">
            <div class="text-[0.625rem] md:text-[1rem]">{ 1 }</div>
            <div class="py-2.5 md:py-5">
              <nuxt-img
                src="/images/projects/project-1.png"
                width="676"
                height="445"
                alt="Проект"
                loading="lazy"
                placeholder
              />
            </div>
            <div>
              <div class="flex items-start justify-between pb-2.5">
                <span class="text-sm md:text-lg mr-5 font-medium uppercase leading-none">
                  new <br />
                  white house
                </span>
                <button @click="() => open()" aria-label="Модальное окно">
                  <nuxt-img
                    src="/images/icons/more.svg"
                    width="51"
                    height="51"
                    loading="lazy"
                    alt="Подробнее"
                    placeholder
                  />
                </button>
              </div>
              <div class="max-w-[17.125rem] font-manrope md:text-[1rem] text-[0.75rem]">
                от 3,7 млн ₽ <br />
                ввод в эксплутацию: II квартал 2024 г. Тюмень
              </div>
            </div>
          </div>
          <div
            class="project-1 flex-shrink-0 w-[40%] mr-[1.5625rem] sm:mr-[3.75rem] xl:mr-[8.75rem] md:mt-[6.5rem] mt-[2.25rem]"
          >
            <div class="text-[0.625rem] md:text-[1rem]">{ 2 }</div>
            <div class="py-2.5 md:py-5">
              <nuxt-img
                src="/images/projects/project-2.png"
                width="676"
                height="445"
                alt="Проект"
                loading="lazy"
                placeholder
              />
            </div>
            <div>
              <div class="flex items-start justify-between pb-2.5">
                <span class="text-sm md:text-lg mr-5 font-medium uppercase leading-none">
                  Норден. <br />
                  это комфорт
                </span>
                <button @click="() => open()" aria-label="Модальное окно">
                  <nuxt-img
                    src="/images/icons/more.svg"
                    width="51"
                    height="51"
                    loading="lazy"
                    alt="Подробнее"
                    placeholder
                  />
                </button>
              </div>
              <div class="max-w-[17.125rem] font-manrope md:text-[1rem] text-[0.75rem]">
                от 12,7 млн ₽ <br />
                ввод в эксплутацию: IV квартал 2024 г. Тюмень
              </div>
            </div>
          </div>
          <div class="project-1 flex-shrink-0 w-[40%] mr-[1.5625rem] sm:mr-[3.75rem] xl:mr-[15.875rem] md:pr-10 pr-2.5">
            <div class="text-[0.625rem] md:text-[1rem]">{ 3 }</div>
            <div class="py-2.5 md:py-5">
              <nuxt-img
                src="/images/projects/project-3.png"
                width="558"
                height="445"
                alt="Проект"
                loading="lazy"
                placeholder
              />
            </div>
            <div>
              <div class="flex items-start justify-between pb-2.5">
                <span class="text-sm md:text-lg mr-5 font-medium uppercase leading-none">
                  малоэтажный <br />
                  мини город 2024
                </span>
                <button @click="() => open()" aria-label="Модальное окно">
                  <nuxt-img
                    src="/images/icons/more.svg"
                    width="51"
                    height="51"
                    loading="lazy"
                    alt="Подробнее"
                    placeholder
                  />
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
    var tl = app.$gsap.timeline({ repeat: 2, repeatDelay: 1 });
    const projects = app.$gsap.utils.toArray(".project-1");

    tl.to(projects, {
      xPercent: -120 * (projects.length - 1),
      ease: "linear",
      scrollTrigger: {
        trigger: ".projects",
        endTrigger: ".projects-scene",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "bottom 10%",
      },
    });
  });
</script>
