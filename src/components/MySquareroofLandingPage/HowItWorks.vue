<template>
  <section id="how-it-works" class="relative mt-12 lg:mt-20 py-5 px-5 lg:px-15">
    <div class="container flex items-center lg:mt-8 mx-auto px-2">
      <!-- Contect -->
      <div class="flex flex-1 flex-col items-center justify-center">
        <h1
          class="text-gray-800 text-3xl sm:w-3/4 lg:w-7/12 mx-auto md:text-4xl lg:text-5xl font-medium text-center mb-4 lg:mb-8 px-5 sm:px-0"
        >
          How it Works
        </h1>

        <div
          class="grid grid-cols-6 gap-6 justify-center items-center text-center mx-auto mb-4 lg:mb-6"
        >
          <div
            v-for="how_it_work in how_it_works"
            :key="how_it_work"
            class="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col justify-center p-3"
          >
            <img
              class="w-full lg:h-20 lg:w-20 mb-4 rounded-2xl shadow-md flex justify-center items-center mx-auto p-5 bg-white"
              :src="how_it_work.image_url"
              alt=""
            />

            <h3 class="w-full text-xl font-medium text-gray-700 mb-2">
              {{ how_it_work.title }}
            </h3>

            <p class="text-gray-600 text-sm text-center mb-2 sm:mb-0">
              {{ how_it_work.how_it_works }}
            </p>
          </div>
        </div>

        <div class="flex items-center justify-center text-center mx-auto mt-2">
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
    const how_it_works = ref([
      {
        title: 'Quick Links',
        image_url: require('@/assets/mysquareroof/hand-pick.svg'),
        how_it_works: 'Test how_it_works lorem ipsum test',
      },
      {
        title: 'Nav',
        image_url: require('@/assets/mysquareroof/hand-pick.svg'),
        how_it_works: 'Test how_it_works lorem ipsum test',
      },
      {
        title: 'Thhird Link Links',
        image_url: require('@/assets/mysquareroof/hand-pick.svg'),
        how_it_works: 'Test description lorem ipsum test',
      },
    ])

    return {
      how_it_works,
    }
  },
}
</script>
