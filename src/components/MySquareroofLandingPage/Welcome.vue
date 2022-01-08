<template>
  <!-- Welcome Page -->
  <section id="welcome" class="relative pt-20">
    <div
      class="container flex items-center lg:mt-8 sm:w-3/4 lg:w-2/4 mx-auto px-2"
    >
      <!-- Contect -->
      <div
        class="flex flex-1 flex-col items-center justify-center lg:items-start"
      >
        <h1
          class="text-gray-800 text-3xl leading-loose mx-auto md:text-4xl lg:text-5xl font-bold text-center lg:text-left mb-8"
        >
          Africa's seamless property
          <span
            class="test-mysqr-main items-center bg-mysqr-semi-light rounded-lg px-1"
          >
            co-ownership
          </span>
          platform
        </h1>

        <p class="text-gray-600 text-lg text-center mb-6">
          Squareroof is an exclusive platform to buy and own your share of
          income- producing real estate, right from your mobile phone or
          computer.
        </p>

        <div class="flex items-center justify-center text-center mx-auto">
          <button
            type="button"
            class="mysqr-btn mysqr-btn-black-bg mysqr-btn-hover-main-bg py-3 px-6"
          >
            Get Started
          </button>
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
