<template>
  <section id="welcome" class="relative pt-28 pb-10 bg-stranerd-main">
    <div class="container grid grid-cols-2 gap-6 mx-auto">
      <div
        class="col-span-2 lg:col-span-1 w-full flex flex-col items-center lg:items-start"
      >
        <h1
          class="text-white text-3xl mt-10 mx-auto md:text-4xl lg:text-5xl font-semibold text-center lg:text-left pr-4 mb-4 lg:mb-8"
        >
          Start Studying Better. Smarter. Faster. Anytime. Anywhere.
        </h1>

        <p class="text-white text-center lg:text-left text-lg mb-3 lg:mb-6">
          With Test preps, Flashcards, Notes and Expert Answers.
        </p>

        <div class="mt-2 lg:mt-6">
          <button type="button">
            <a
              class="stranerd-btn stranerd-btn-dark-bg stranerd-btn-hover-main-bg font-semibold text-white border-2 border-white lg:py-4 lg:px-10"
              href="https://stranerd.com/dashboard"
            >
              Get Started Now
            </a>
          </button>
        </div>
      </div>

      <div class="col-span-2 lg:col-span-1 flex flex-1 relative">
        <img
          class="flex justify-center items-center mx-auto p-2"
          :src="require('@/assets/stranerd/welcome-image.svg')"
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
