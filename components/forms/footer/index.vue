<template>
  <form class="col-start-1 md:col-start-2 lg:col-end-5 col-end-6 md:mb-10" @submit.prevent="submitForm">
    <label class="block relative group mt-[3.75rem]">
      <input
        v-model="form.email"
        class="peer py-2.5 w-full md:text-lg text-sm bg-transparent placeholder:text-transparent group-hover:border-orange transition-all outline-none border-b-2"
        type="email"
        placeholder="Подписаться*"
      />
      <span
        class="uppercase peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:top-[-1.625rem] peer-[&:not(:placeholder-shown)]:text-orange transition-all absolute left-0 top-0 md:text-lg text-sm pt-2.5 text-black/40 pointer-events-none"
      >
        Подписаться*
      </span>
    </label>
    <div v-if="!isFormCorrect && !v$.form.email.required.$response" class="text-sm text-red">
      {{ v$.form.email.required.$message }}
    </div>
    <span v-if="!isFormCorrect && v$.form.email.$error" class="text-sm text-red">
      Введите корректный адрес электронной почты
    </span>

    <div class="md:mt-10 mt-5">
      <label class="flex items-center flex-wrap gap-y-2 font-petrov cursor-pointer">
        <span class="relative block w-[0.9375rem] md:w-5 h-[0.9375rem] md:h-5 border-2 mr-2.5">
          <input
            v-model="form.accept"
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
      <div v-if="!isFormCorrect && !v$.form.accept.required.$response" class="text-sm text-red mt-2">
        {{ v$.form.accept.required.$message }}
      </div>
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
</template>

<script setup>
  import useVuelidate from "@vuelidate/core";
  import { required, helpers, email } from "@vuelidate/validators";

  const openAndroidApp = "tg://t.me/USERNAME";

  const sucess = ref(false);
  const isFormCorrect = ref(true);

  const form = ref({
    email: "",
    accept: "",
  });

  const rules = computed(() => ({
    form: {
      email: {
        required: helpers.withMessage("Поле обязательно к заполнению", required),
        email,
      },
      accept: {
        required: helpers.withMessage("Поле обязательно к заполнению", required),
      },
    },
  }));

  const v$ = useVuelidate(rules, { form });

  const submitForm = async () => {
    isFormCorrect.value = await v$.value.$validate();

    if (!isFormCorrect.value) return;

    sucess.value = true;
    alert("Форма успешно отправлена");
  };
</script>
