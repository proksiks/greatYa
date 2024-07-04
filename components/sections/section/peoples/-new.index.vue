<template>
  <div class="md:px-10 px-2.5 xl:my-26 my-25">
    <div
      class="md:grid grid-cols-8 md:mb-20 mb-10 2xl:text-2xl xl:text-xl md:text-[4.5rem] text-[2.1875rem] tracking-[-0.07em] 2xl:leading-[7.3125rem] leading-[100%] ml-5 md:ml-0"
      id="peoples"
    >
      <div class="col-start-3 col-end-9">харизмы</div>
      <p class="ml-5 md:ml-0 col-start-4 col-end-9 text-orange">в людях</p>
    </div>

    <div class="xl:grid xl:grid-cols-8 gap-5">
      <div
        class="xl:col-start-1 xl:col-end-5 max-w-[15.625rem] md:max-w-[46.5625rem] xl:ml-0 ml-auto sm:ml-0 xl:mb-0 mb-[3.75rem]"
      >
        <div class="flex pr-5">
          <div>
            <span class="block mb-3 text-[0.875rem]"> { 1 } </span>
            <img
              class="object-cover xl:max-w-none min-w-[15.5625rem] 2xl:w-[27.8125rem] xl:w-[21.75rem] w-auto"
              src="/images/peoples/people-1.png"
              alt="Ильяс Койносов"
              width="445"
              height="500"
              loading="lazy"
            />
            <div class="flex items-start justify-between md:pt-5 pt-2.5">
              <p class="font-medium md:text-lg text-sm mt-auto">
                Ильяс <br />
                Койносов
              </p>
              <button @click="() => console.log(321)" aria-label="Модальное окно">
                <img src="/images/icons/more.svg" width="51" height="51" loading="lazy" alt="Подробнее" />
              </button>
            </div>
            <p class="font-petrov mt-2.5 text-[0.75rem] md:text-[1rem]">Генеральный директор</p>
          </div>
        </div>
      </div>
      <div
        class="xl:row-start-1 xl:row-end-3 xl:col-start-6 xl:col-end-9 items-start xl:mt-[10.25rem] row-span max-w-[16.0625rem] sm:ml-auto md:ml-0 md:max-w-[43.75rem] xl:max-w-none mb-[3.75rem] lx:mb-0"
      >
        <div class="flex md:flex-row flex-col gap-5 pr-5">
          <div>
            <span class="block mb-3 text-[0.875rem]"> { 2 } </span>
            <img
              class="object-cover xl:max-w-none min-w-[15.5625rem] 2xl:w-[34.875rem] xl:w-[23.75rem] w-auto"
              src="/images/peoples/people-2.png"
              alt="Ильяс Койносов"
              width="558"
              height="445"
              loading="lazy"
            />
            <div class="flex flex-col">
              <div class="flex items-start justify-between md:pt-5 pt-2.5">
                <p class="font-medium md:text-lg text-sm mt-auto">
                  Максим <br />
                  Долгушин
                </p>
                <button @click="() => console.log(321)" aria-label="Модальное окно">
                  <img src="/images/icons/more.svg" width="51" height="51" loading="lazy" alt="Подробнее" />
                </button>
              </div>
              <p class="font-petrov mt-2.5 text-[0.75rem] md:text-[1rem]">Генеральный директор</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="xl:row-start-3 xl:row-end-3 gap-5 xl:col-start-2 xl:col-end-6 xl:mt-[5rem] ml-[3.25rem] xl:ml-0 max-w-[19.5625rem] md:max-w-none"
      >
        <div class="flex md:flex-row flex-col gap-5 pr-5">
          <div>
            <span class="block mb-3 text-[0.875rem]"> { 3 } </span>
            <img
              class="object-cover xl:max-w-none min-w-[15.5625rem] 2xl:w-[34.875rem] xl:w-[23.75rem] w-auto"
              src="/images/peoples/people-3.png"
              alt="Олег Кондрашин"
              width="558"
              height="445"
              loading="lazy"
            />
            <div class="flex flex-col">
              <div class="flex items-start justify-between md:pt-5 pt-2.5">
                <p class="font-medium md:text-lg text-sm mt-auto">
                  Олег <br />
                  Кондрашин
                </p>
                <button @click="() => console.log(321)" aria-label="Модальное окно">
                  <img src="/images/icons/more.svg" width="51" height="51" loading="lazy" alt="Подробнее" />
                </button>
              </div>
              <p class="font-petrov mt-2.5 text-[0.75rem] md:text-[1rem]">Генеральный директор</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
