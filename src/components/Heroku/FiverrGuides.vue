<template>
  <!-- Welcome Page -->
  <section id="details" class="relative py-8 lg:py-12">
    <div class="container grid grid-cols-3 lg:mt-8 gap-6 mx-auto px-2">
      <div
        class="col-span-3 lg:col-span-1 flex flex-col items-center mx-auto px-5 sm:px-0"
      >
        <div class="bg-white rounded-lg border shadow-lg">
          <a href="#">
            <img
              class="rounded-t-lg"
              :src="require('@/assets/mysquareroof/squareroof3.svg')"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Noteworthy technology
              </h5>
            </a>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>

        <!-- <div class="flex flex-col mt-2 text-mysqr-dark-dark">
          <div v-for="benefit in benefits" :key="benefit" class="mb-1 text-sm">
            <div class="flex p-1 items-center">
              <span>
                <img
                  :src="require('@/assets/mysquareroof/check.svg')"
                  alt="logo"
                  class="h-7 w-7 mr-2 p-1 rounded-full bg-white shadow-xs"
                />
              </span>

              <span class="flex flex-1 font-medium mx-2">
                {{ benefit.title }}
              </span>
            </div>
          </div>
        </div> -->
      </div>
      <div
        class="col-span-3 lg:col-span-1 flex flex-col items-center mx-auto px-5 sm:px-0"
      >
        <div class="bg-white rounded-lg border shadow-lg">
          <a href="#">
            <img
              class="rounded-t-lg"
              :src="require('@/assets/mysquareroof/squareroof3.svg')"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Noteworthy technology
              </h5>
            </a>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>

        <!-- <div class="flex flex-col mt-2 text-mysqr-dark-dark">
          <div v-for="benefit in benefits" :key="benefit" class="mb-1 text-sm">
            <div class="flex p-1 items-center">
              <span>
                <img
                  :src="require('@/assets/mysquareroof/check.svg')"
                  alt="logo"
                  class="h-7 w-7 mr-2 p-1 rounded-full bg-white shadow-xs"
                />
              </span>

              <span class="flex flex-1 font-medium mx-2">
                {{ benefit.title }}
              </span>
            </div>
          </div>
        </div> -->
      </div>
      <div
        class="col-span-3 lg:col-span-1 flex flex-col items-center mx-auto px-5 sm:px-0"
      >
        <div class="bg-white rounded-lg border shadow-lg">
          <a href="#">
            <img
              class="rounded-t-lg"
              :src="require('@/assets/mysquareroof/squareroof3.svg')"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Noteworthy technology
              </h5>
            </a>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>

        <!-- <div class="flex flex-col mt-2 text-mysqr-dark-dark">
          <div v-for="benefit in benefits" :key="benefit" class="mb-1 text-sm">
            <div class="flex p-1 items-center">
              <span>
                <img
                  :src="require('@/assets/mysquareroof/check.svg')"
                  alt="logo"
                  class="h-7 w-7 mr-2 p-1 rounded-full bg-white shadow-xs"
                />
              </span>

              <span class="flex flex-1 font-medium mx-2">
                {{ benefit.title }}
              </span>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const benefits = ref([
      {
        title: 'A SEC licensed trustee',
      },
      {
        title: 'A professional property manager',
      },
      {
        title: 'A chartered  estate surveyor and valuer',
      },
    ])

    return {
      benefits,
    }
  },
}
</script>
