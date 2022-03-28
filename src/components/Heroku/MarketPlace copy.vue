<template>
  <section id="welcome" class="relative mt-14 lg:mt-16">
    <div class="container lg:mt-8 mx-auto px-5 sm:px-2">
      <h2 class="text-2xl md:text-4xl font-semibold md-8 text-gray-600">
        Explore the Marketplace
      </h2>

      <div
        class="grid grid-cols-4 gap-8 mx-4 md:mx-6 lg:mx-8"
        v-for="(marketplace, index) in marketplaces"
        :key="`${marketplace}_${index}`"
      >
        <span>
          <img
            :src="marketplace.image_url"
            alt=""
            :title="marketplace.title"
            class="h-8 md:h-10 lg:h-14"
          />
          <span class="">Test me</span>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const marketplaces = ref([
      {
        title: 'Facebook',
        link: '',
        image_url: require('@/assets/fiverr/trustee_facebook.png'),
      },
      {
        title: 'Google',
        link: '',
        image_url: require('@/assets/fiverr/trustee_google.png'),
      },
      {
        title: 'Netflix',
        link: '',
        image_url: require('@/assets/fiverr/trustee_netflix.png'),
      },
      {
        title: 'Google',
        link: '',
        image_url: require('@/assets/fiverr/trustee_google.png'),
      },
      {
        title: 'Netflix',
        link: '',
        image_url: require('@/assets/fiverr/trustee_netflix.png'),
      },
      {
        title: 'P&G',
        link: '',
        image_url: require('@/assets/fiverr/trustee_pandg.png'),
      },
      {
        title: 'Paypal',
        link: '',
        image_url: require('@/assets/fiverr/trustee_paypal.png'),
      },
    ])

    return {
      marketplaces,
    }
  },
}
</script>
