<template>
  <!-- Contact Us -->
  <section class="mt-12 lg:mt-20 py-5" style="background-color: #0d084d;">
    <div class="container grid grid-cols-2 lg:mt-8 gap-10 lg:gap-16">
      <!-- Contect -->
      <div
        class="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start"
      >
        <h1
          class="text-white text-2xl mt-10 mx-auto md:text-3xl lg:text-4xl font-semibold text-center lg:text-left pr-4 mb-4 lg:mb-8"
        >
          A business solution
          <br />
          designed for
          <span class="italic font-medium">teams</span>
        </h1>

        <p
          class="text-mysqr-gray text-center lg:text-left text-lg mb-3 lg:mb-6"
        >
          Join our exclusive community of co-owners to learn more about real
          estate investments and co-ownership.
        </p>
        <!-- <div class="flex flex-col sm:flex-row justify-center items-center">
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
        </div> -->
      </div>

      <div class="col-span-2 lg:col-span-1 flex flex-1 relative">
        <img
          class="flex justify-center items-center mx-auto p-2"
          :src="require('@/assets/fiverr/business-desktop.png')"
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
