<template>
  <section id="home" class="relative pt-28 pb-8 lg:pb-14 bg-mysqr-semi-light">
    <div class="container flex flex-col items-center px-2">
      <div
        class="flex flex-1 flex-col items-center justify-center lg:mt-8 sm:w-3/4 lg:w-7/12 mx-auto lg:items-start px-5 sm:px-0"
      >
        <h1
          class="text-mysqr-dark-dark text-3xl se mx-auto md:text-4xl lg:text-5xl font-bold text-center mb-4 lg:mb-8"
        >
          Top Websites Landing Page Clonebfkv;uho'
        </h1>

        <p
          class="text-mysqr-dark-dark font-normal text-lg text-center mb-3 lg:mb-6"
        >
          Welcome to all top website landing page clone. Made majorly with
          tailwind Vue JS and Tailwind css.
        </p>

        <div class="flex items-center justify-center text-center mx-auto">
          <button
            type="button"
            class="mysqr-btn mysqr-btn-dark-bg mysqr-btn-hover-main-bg lg:py-4 lg:px-10"
          >
            <a href="#">
              Explore Now
            </a>
          </button>
        </div>
      </div>

      <!--
      <div class="w-full h-3/4 mt-10 lg:mt-16">
        <img
          class="flex justify-center items-center w-full mx-auto p-2 bg-white"
          :src="require('@/assets/mysquareroof/squareroof3.svg')"
          alt=""
        />
      </div> -->
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
