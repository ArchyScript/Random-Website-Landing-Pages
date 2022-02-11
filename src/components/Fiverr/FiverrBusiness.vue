<template>
  <!-- Contact Us -->
  <section id="contact" class="mt-12 lg:mt-20 py-5">
    <div class="grid grid-cols-2 lg:mt-8 gap-6 p-10 lg:p-20 bg-mysqr-dark-dark">
      <!-- Contect -->
      <div
        class="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start"
      >
        <h1
          class="text-white text-2xl mt-10 mx-auto md:text-3xl lg:text-4xl font-semibold text-center lg:text-left pr-4 mb-4 lg:mb-8"
        >
          Build a solid future in real estate. Join Now
        </h1>

        <p
          class="text-mysqr-gray text-center lg:text-left text-lg mb-3 lg:mb-6"
        >
          Join our exclusive community of co-owners to learn more about real
          estate investments and co-ownership.
        </p>

        <div class="flex flex-col sm:flex-row justify-center items-center">
          <input
            placeholder="Enter email address"
            type="email"
            class="py-2 px-4 rounded-full mx-2 bg-mysqr-gray text-mysqr-dark-dark focus:outline-none"
          />

          <button
            type="button"
            class="mysqr-btn mysqr-btn-dark-bg border shadow-md mt-3 sm:mt-0 border-mysqr-gray mysqr-btn-hover-main-bg mx-2 py-2 px-6"
          >
            Join
          </button>
        </div>
      </div>

      <div class="col-span-2 lg:col-span-1 flex flex-1 relative">
        <img
          class="flex justify-center items-center mx-auto p-2"
          :src="require('@/assets/mysquareroof/squareroof-dark.svg')"
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
