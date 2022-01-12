<template>
  <!-- Welcome Page -->
  <section id="welcome" class="relative mt-16 lg:mt-20">
    <div class="container flex items-center lg:mt-8 mx-auto px-5 sm:px-2">
      <!-- Contect -->
      <div class="flex flex-1 flex-col items-center justify-center">
        <h1
          class="text-mysqr-dark-dark text-3xl sm:w-3/4 lg:w-7/12 mx-auto md:text-4xl lg:text-5xl font-medium text-center mb-4 lg:mb-8"
        >
          Own your share of income producing properties
        </h1>

        <p
          class="text-mysqr-dark-dark font-normal sm:w-3/4 lg:w-2/4 text-lg text-center mb-3 lg:mb-6"
        >
          Start investing in high-quality real estate portfolio with a minimum
          of one square foot per share
        </p>

        <div
          class="grid grid-cols-4 mt-2 gap-6 justify-center text-center mx-auto"
        >
          <div
            v-for="my_squareroof_description in my_squareroof_descriptions"
            :key="my_squareroof_description"
            class="col-span-4 sm:col-span-2 lg:col-span-1 flex flex-col justify-center p-2"
          >
            <img
              class="h-20 w-20 lg:h-20 lg:w-20 mb-4 rounded-2xl shadow-md flex justify-center items-center mx-auto p-5 bg-white"
              :src="my_squareroof_description.image_url"
              alt=""
            />

            <h3 class="text-mysqr-dark-dark w-full text-xl font-medium mb-2">
              {{ my_squareroof_description.title }}
            </h3>

            <p
              class="text-mysqr-dark-dark font-light text-sm text-center mb-2 sm:mb-0"
            >
              {{ my_squareroof_description.description }}
            </p>
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
    const my_squareroof_descriptions = ref([
      {
        title: 'Hand Picked for You',
        image_url: require('@/assets/mysquareroof/hand-pick.svg'),
        description:
          'Choose from a well-diversified portfolio of high-value properties',
      },
      {
        title: 'Own Your Share',
        image_url: require('@/assets/mysquareroof/share.svg'),
        description:
          'Buy a minimum of one square foot per property to enjoy benefits',
      },
      {
        title: 'Earn Rental Dividends',
        image_url: require('@/assets/mysquareroof/rental-dividens.png'),
        description:
          'Each property rent is guaranteed to pay you regular income',
      },
      {
        title: 'Enjoy Capital Gains',
        image_url: require('@/assets/mysquareroof/capital-gain.svg'),
        description:
          'Watch your money grow as the value of your property rises',
      },
    ])

    return {
      my_squareroof_descriptions,
    }
  },
}
</script>
