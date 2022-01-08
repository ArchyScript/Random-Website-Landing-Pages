<template>
  <section id="how-it-works" class="relative mt-24">
    <div class="container flex items-center lg:mt-8 mx-auto px-2">
      <!-- Contect -->
      <div class="flex flex-1 flex-col items-center justify-center">
        <h1
          class="text-gray-800 text-3xl sm:w-3/4 lg:w-7/12 leading-loose mx-auto md:text-4xl lg:text-5xl font-medium text-center mb-6"
        >
          How it Works
        </h1>

        <div
          class="grid grid-cols-1 md:gid-cols-2 lg:grid-cols-3 gap-6 justify-center text-center mx-auto"
        >
          <div v-for="x in 3" :key="x" class="flex flex-col justify-center p-3">
            <img
              class="h-8 w-8 lg:h-20 lg:w-20 mb-6 rounded-2xl shadow-md flex justify-center items-center mx-auto p-5 bg-white"
              :src="require('@/assets/mysquareroof/register.png')"
              alt=""
            />

            <h3 class="w-full text-xl font-medium text-gray-700 mb-3">
              Register
            </h3>

            <p class="text-gray-600 text-sm text-center mb-4">
              Register to become a member of Squareroof's co-ownership community
            </p>
          </div>
        </div>

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
