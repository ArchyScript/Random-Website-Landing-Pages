<template>
  <!-- Welcome Page -->
  <section id="get-started" class="relative mt-16 lg:mt-24 py-5 px-5 lg:px-15">
    <div class="container flex items-center lg:mt-8 mx-auto px-2">
      <!-- Contect -->
      <div class="flex flex-1 flex-col items-center justify-center">
        <h1
          class="text-mysqr-dark-dark text-3xl sm:w-3/4 lg:w-7/12 mx-auto md:text-4xl lg:text-5xl font-medium text-center mb-4 lg:mb-6"
        >
          Get Started in Real Estate
        </h1>

        <div
          class="grid grid-cols-4 mt-2 gap-6 justify-center text-center mx-auto"
        >
          <div
            v-for="quick_link in quick_links"
            :key="quick_link"
            class="col-span-4 sm:col-span-2 lg:col-span-1 flex flex-col justify-center p-2"
          >
            <img
              class="mb-4 lg:mb-8 rounded-2xl shadow-md flex justify-center items-center mx-auto p-2 bg-white"
              :src="quick_link.image_url"
              alt=""
            />

            <span
              class="text-mysqr-main font-semibold items-center self-center bg-mysqr-semi-light rounded-lg px-4 py-2 mb-2 lg:mb-4"
            >
              learn
            </span>

            <span
              class="text-mysqr-dark-dark hover:text-mysqr-main cursor-pointer text-xl lg:text-2xl font-medium text-center mb-2 sm:mb-0"
            >
              <a :href="quick_link.link">
                {{ quick_link.title }}
              </a>
            </span>
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
    const quick_links = ref([
      {
        title: 'Getting into Affordable Real Estate Investing',
        link:
          'https://www.mysquareroof.com/academy/getting-into-affordable-real-estate-investing',
        image_url: require('@/assets/mysquareroof/gs-1.svg'),
      },
      {
        title: 'Learn about Real Estate Investing on your own',
        link:
          'https://www.mysquareroof.com/academy/learn-about-real-estate-investing-on-your-own',
        image_url: require('@/assets/mysquareroof/gs-2.svg'),
      },
      {
        title: 'Explained: What exactly is Co-ownership?',
        link:
          'https://www.mysquareroof.com/academy/what-exactly-is-co-ownership',
        image_url: require('@/assets/mysquareroof/gs-3.svg'),
      },
      {
        title: 'Real Estate Cash Flow or Capital Appreciation',
        link:
          'https://www.mysquareroof.com/academy/understanding-real-estate-cash-flow-or-capital-appreciation',
        image_url: require('@/assets/mysquareroof/gs-4.svg'),
      },
    ])

    return {
      quick_links,
    }
  },
}
</script>
