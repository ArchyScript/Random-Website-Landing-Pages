<template>
  <!-- Welcome Page -->
  <section id="details" class="relative mt-24">
    <div class="container grid grid-cols-3 lg:mt-8 gap-6 mx-auto px-2">
      <!-- Contect -->
      <div
        class="col-span-3 lg:col-span-1 flex flex-col items-center lg:items-start sm:w-3/4 lg:w-full mx-auto"
      >
        <h1
          class="text-gray-800 text-2xl lg:leading-loose mt-10 mx-auto md:text-3xl lg:text-4xl font-semibold text-center lg:text-left pr-4 mb-4 lg:mb-8"
        >
          Build real wealth beyond stocks for
          <span
            class="test-mysqr-main items-center bg-mysqr-semi-light rounded-lg px-1"
          >
            1 sq. ft. per share
          </span>
        </h1>

        <p class="text-gray-600 text-center lg:text-left text-lg mb-3 lg:mb-6">
          Squareroof is a new and secure way for you to build long term wealth
          with real estate. We are making it easy for anyone to build real
          wealth one square foot per month.
        </p>

        <div class="">
          <button
            type="button"
            class="mysqr-btn mysqr-btn-black-bg mysqr-btn-hover-main-bg py-3 px-6"
          >
            Get Started
          </button>
        </div>
      </div>

      <div class="col-span-3 lg:col-span-2 flex flex-1 relative">
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
    const test = ref('test')

    return {
      test,
    }
  },
}
</script>
