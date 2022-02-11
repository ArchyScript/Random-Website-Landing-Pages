<template>
  <!-- Welcome Page -->
  <section id="details" class="relative mt-16 lg:mt-24">
    <div class="container grid grid-cols-3 lg:mt-8 gap-6 mx-auto px-2">
      <!-- Contect -->
      <div
        class="col-span-3 lg:col-span-1 flex flex-col items-center lg:items-start sm:w-3/4 lg:w-full mx-auto px-5 sm:px-0"
      >
        <h1
          class="text-mysqr-dark-dark text-2xl mt-10 mx-auto md:text-3xl lg:text-4xl font-semibold text-center lg:text-left pr-4 mb-4 lg:mb-8"
        >
          A whole world of freelance talent at your fingertips
        </h1>

        <p
          class="text-mysqr-dark-dark font-normal text-center lg:text-left text-lg mb-3 lg:mb-6"
        >
          Squareroof is a new and secure way for you to build long term wealth
          with real estate. We are making it easy for anyone to build real
          wealth one square foot per month.
        </p>

        <div class="">
          <button
            type="button"
            class="mysqr-btn mysqr-btn-dark-bg mysqr-btn-hover-main-bg lg:py-4 lg:px-10"
          >
            <a href="https://app.mysquareroof.com/auth/register">
              Get Started
            </a>
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
