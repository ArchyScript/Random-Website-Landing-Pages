<template>
  <!-- Welcome Page -->
  <section id="welcome" class="relative mt-20">
    <div class="container flex flex-col-reverse lg:flex-row gap-12 lg:mt-20">
      <!-- Contect -->
      <div class="flex flex-1 flex-col items-center lg:items-start">
        <h2
          class="text-black text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6"
        >
          Welcome to the Page
        </h2>

        <p class="text-gray-700 text-lg text-center lg:text-left mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          eligendi eaque obcaecati dolorem reiciendis ipsam alias rem ratione a
          enim impedit officiis voluptates quod dolorum nisi, maxime pariatur
          eum. Repellendus!
        </p>

        <div class="flex flex-wrap justify-center gap-6">
          <button type="button" class="btn btn-white-bg">
            Get Started
          </button>
          <button type="button" class="btn btn-black-bg">
            Download Now
          </button>
        </div>
      </div>

      <!-- Image -->
      <div class="flex justify-center flex-1 mb-10 mb:mb-16 lg:mb-0">
        <img
          src=""
          alt=""
          class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
        />
      </div>
    </div>

    <!-- Rounded rectangle  -->
    <div
      class="hidden overflow-hidden bg-black rounded-l-full h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-26 lg: absolute"
    ></div>
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
