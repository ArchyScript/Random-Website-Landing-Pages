<template>
  <section id="welcome" class="relative mt-14 lg:mt-16">
    <div class="container lg:mt-8 mx-auto px-5 sm:px-2">
      <h2 class="text-2xl md:text-4xl font-semibold text-gray-600">
        Popular professional services
      </h2>

      <div class="flex items-center"></div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const popular_professional_services = ref([
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
      popular_professional_services,
    }
  },
}
</script>
