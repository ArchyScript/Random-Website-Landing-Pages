<template>
  <!-- Contact Us -->
  <section id="contact" class="mt-16 py-10 px-20">
    <div
      class="container grid grid-cols-2 lg:mt-8 gap-6 mx-auto p-10 rounded-2xl bg-mysqr-dark-dark"
    >
      <!-- Contect -->
      <div
        class="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start"
      >
        <h1
          class="text-white text-2xl leading-loose mt-10 mx-auto md:text-3xl lg:text-4xl font-semibold text-center lg:text-left pr-4 mb-8"
        >
          Build a solid future in real estate. Join Now
        </h1>

        <p class="text-mysqr-dark-light text-lg mb-6">
          Join our exclusive community of co-owners to learn more about real
          estate investments and co-ownership.
        </p>

        <div class="flex justify-center items-center">
          <input
            placeholder="Enter email address"
            type="email"
            class="py-2 px-4 rounded-full mx-2 bg-gray-500 text-white focus:outline-none"
          />

          <button
            type="button"
            class="mysqr-btn mysqr-btn-black-bg mysqr-btn-hover-main-bg mx-2 py-2 px-6"
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
