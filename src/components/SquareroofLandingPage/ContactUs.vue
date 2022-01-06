<template>
  <!-- Contact Us -->
  <section id="contact" class="bg-green-100 text-green-800 py-20">
    <div class="container">
      <div class="sm:3/4 lg:w-2/4 mx-auto">
        <p class="font-light uppercase text-center mb-8">
          50,000 + active users
        </p>

        <h1 class="text-center text-3xl">
          Subscribe to our weekly new letter
        </h1>

        <div
          class="flex flex-col items-center justify-center sm:flex-row gap-6 mt-8"
        >
          <input
            type="text"
            placeholder="Enter your E-mail Address"
            class="focus:outline-none flex-1 px-2 py-3 rounded-md text-red-800"
          />

          <button type="button" class="flex self-center btn btn-black-bg">
            Send Email
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
