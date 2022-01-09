<template>
  <!-- Welcome Page -->
  <section id="get-started" class="relative mt-12 lg:mt-20 py-5 px-5 lg:px-15">
    <div class="container flex items-center lg:mt-8 mx-auto px-2">
      <!-- Contect -->
      <div class="flex flex-1 flex-col items-center justify-center">
        <h1
          class="text-gray-800 text-3xl sm:w-3/4 lg:w-7/12 mx-auto md:text-4xl lg:text-5xl font-medium text-center mb-4 lg:mb-8"
        >
          Get Started in Real Estate
        </h1>

        <div
          class="grid grid-cols-4 mt-2 gap-6 justify-center text-center mx-auto"
        >
          <div
            v-for="x in 4"
            :key="x"
            class="col-span-4 sm:col-span-2 lg:col-span-4 flex flex-col justify-center p-2"
          >
            <img
              class="w-full mb-4 lg:mb-8 rounded-2xl shadow-md flex justify-center items-center mx-auto p-5 bg-white"
              :src="require('@/assets/mysquareroof/hand-pick.svg')"
              alt=""
            />

            <span
              class="test-mysqr-main items-center self-center bg-mysqr-semi-light rounded-lg px-4 py-2 mb-2 lg:mb-4"
            >
              learn
            </span>

            <p class="text-gray-600 text-2xl font-medium text-center mb-2 sm:mb-0">
              Getting into Affordable Real Estate Investing
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const test = ref('test')

    return {
      test,
    }
  },
}
</script>
