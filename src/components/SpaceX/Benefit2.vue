<template>
  <!-- Welcome Page -->
  <section id="details" class="relative mt-16 lg:mt-24">
    <div class="container grid grid-cols-3 lg:mt-8 gap-6 mx-auto px-2">
      <div class="col-span-3 lg:col-span-2 hidden lg:flex flex-1 relative">
        <img
          class="flex justify-center items-center mx-auto p-2 bg-white"
          :src="require('@/assets/mysquareroof/squareroof3.svg')"
          alt=""
        />
      </div>

      <!-- Contect -->
      <div
        class="col-span-3 lg:col-span-1 flex flex-col items-center lg:items-start sm:w-3/4 lg:w-full mx-auto px-5 sm:px-0"
      >
        <h1
          class="text-mysqr-dark-dark text-2xl mt-10 mx-auto md:text-3xl lg:text-4xl font-semibold text-center lg:text-left mb-4 lg:mb-8"
        >
          We ensure your ownership is well
          <span
            class="test-mysqr-main items-center bg-mysqr-semi-light rounded-lg px-1"
          >
            protected
          </span>
        </h1>

        <p
          class="text-mysqr-dark-dark font-normal text-center lg:text-left text-lg mb-3 lg:mb-6"
        >
          We follow a transparent and simplified structure that ensures your
          share of ownership is managed and protected by our institutional
          partners that include:
        </p>

        <div class="flex flex-col mt-2 text-mysqr-dark-dark">
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
        </div>
      </div>

      <div class="col-span-3 lg:col-span-2 flex flex-1 lg:hidden relative mt-2">
        <img
          class="flex justify-center items-center mx-auto p-2 bg-white"
          :src="require('@/assets/mysquareroof/squareroof3.svg')"
          alt=""
        />
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
