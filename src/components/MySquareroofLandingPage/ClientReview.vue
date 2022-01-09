<template>
  <!-- Welcome Page -->
  <section id="details" class="relative mt-12 lg:mt-20 py-5 px-5 lg:px-15">
    <div class="container grid grid-cols-3 lg:mt-8 gap-6 mx-auto px-2">
      <!-- Contect -->
      <div
        class="col-span-3 lg:col-span-1 flex flex-col items-center lg:items-start sm:w-3/4 lg:w-full mx-auto"
      >
        <h1
          class="text-gray-800 text-2xl mt-10 mx-auto md:text-3xl lg:text-4xl font-semibold text-center lg:text-left pr-4 mb-4 lg:mb-8"
        >
          What clients say about us
        </h1>

        <p class="text-gray-600 text-center lg:text-left text-lg mb-3 lg:mb-6">
          Squareroof is a modern property technology platform on a mission to
          simplify and make real estate affordable
        </p>

        <div class="">
          <button
            type="button"
            class="mysqr-btn mysqr-btn-black-bg mysqr-btn-hover-main-bg py-3 px-6"
          >
            About Squareroof
          </button>
        </div>
      </div>

      <div
        class="col-span-3 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2"
      >
        <div
          v-for="client_review in client_reviews"
          :key="client_review"
          class="rounded-2xl bg-mysqr-semi-light flex flex-col justify-center px-8 py-6"
        >
          <p class="text-gray-600 text-lg font-light mb-4">
            {{ client_review.review }}
          </p>

          <div class="flex flex-col mt-3">
            <div class="flex p-1 my-1 justify-center items-center">
              <span>
                <img
                  :src="require('@/assets/mysquareroof/quote.svg')"
                  alt="logo"
                  class="h-10 w-10 mr-2 p-1 rounded-full bg-white shadow-xs"
                />
              </span>

              <div
                class="flex flex-col flex-1 font-semibold mx-2 text-mysqr-dark-dark"
              >
                <span class="font-semibold font-sm">
                  {{ client_review.name }}
                </span>
                <span class="font-light font-xs">
                  {{ client_review.stack }}
                </span>
              </div>
            </div>
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
    const client_reviews = ref([
      {
        name: 'Test Name',
        stack: 'Developer',
        review:
          'thiw idgeskj oshfs;fsyi;fjo;eges/;fhsflsfgflsfgf   kjfkjfke.sgwel;uevdlu  idiudu',
      },
      {
        name: 'Test Name',
        stack: 'Developer',
        review:
          'thiw idgeskj oshfs;fsyi;fjo;eges/;fhsflsfgflsfgf   kjfkjfke.sgwel;uevdlu  idiudu',
      },
      {
        name: 'Test Name',
        stack: 'Developer',
        review:
          'thiw idgeskj oshfs;fsyi;fjo;eges/;fhsflsfgflsfgf   kjfkjfke.sgwel;uevdlu  idiudu',
      },
      {
        name: 'Test Name',
        stack: 'UI/UX Designer',
        review:
          'thiw idgeskj oshfs;fsyi;fjo;eges/;fhsflsfgflsfgf   kjfkjfke.sgwel;uevdlu  idiudu',
      },
    ])

    return {
      client_reviews,
    }
  },
}
</script>
