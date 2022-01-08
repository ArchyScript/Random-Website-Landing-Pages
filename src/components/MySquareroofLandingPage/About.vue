<template>
  <!-- Welcome Page -->
  <section id="welcome" class="relative mt-16">
    <div class="container flex items-center lg:mt-8 mx-auto px-2">
      <!-- Contect -->
      <div class="flex flex-1 flex-col items-center justify-center">
        <h1
          class="text-gray-800 text-3xl sm:w-3/4 lg:w-7/12 leading-loose mx-auto md:text-4xl lg:text-5xl font-medium text-center mb-8"
        >
          Own your share of income producing properties
        </h1>

        <p class="text-gray-600 sm:w-3/4 lg:w-2/4 text-lg text-center mb-6">
          Start investing in high-quality real estate portfolio with a minimum
          of one square foot per share
        </p>

        <div
          class="grid grid-cols-1 md:gid-cols-2 lg:grid-cols-4 mt-2 gap-6 justify-center text-center mx-auto"
        >
          <div v-for="x in 4" :key="x" class="flex flex-col justify-center p-2">
            <img
              class="h-8 w-8 lg:h-20 lg:w-20 mb-6 rounded-2xl shadow-md flex justify-center items-center mx-auto p-5 bg-white"
              :src="require('@/assets/mysquareroof/hand-pick.svg')"
              alt=""
            />

            <h3 class="w-full text-xl font-medium text-gray-700 mb-3">
              Hand Picked for You
            </h3>

            <p class="text-gray-600 text-sm text-center mb-4">
              Choose from a well-diversified portfolio of high-value properties
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
