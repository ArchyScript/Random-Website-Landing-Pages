<template>
  <section id="welcome" class="relative mt-14 lg:mt-16">
    <div class="container lg:mt-8 mx-auto px-5 sm:px-2">
      <h2 class="text-2xl md:text-4xl font-semibold md-8 text-gray-600">
        Explore the Marketplace
      </h2>
      <div class="flex flex-wrap mx-auto justify- items-center mt-2">
        <div
          class="flex mx-4 md:mx-6 lg:mx-12"
          v-for="(marketplace, index) in marketplaces"
          :key="`${marketplace}_${index}`"
        >
          <span class="mx-2 my-3">
            <img
              :src="marketplace.image_url"
              alt=""
              :title="marketplace.title"
              class="h-8 md:h-10 lg:h-14 block"
            />
            <span class="block mt-2 text-center font-semibold">
              {{ marketplace.title }}
            </span>
          </span>
          <!-- 
          <span>
            <img
              :src="marketplace.image_url"
              alt=""
              :title="marketplace.title"
              class="h-8 md:h-10 lg:h-20"
            />
          </span> -->
        </div>
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
        title: 'Data',
        link: '',
        image_url: require('@/assets/fiverr/marketplace/data.svg'),
      },
      {
        title: 'Business',
        link: '',
        image_url: require('@/assets/fiverr/marketplace/business.svg'),
      },
      {
        title: 'Writing ',
        link: '',
        image_url: require('@/assets/fiverr/marketplace/writing-translation.svg'),
      },
      {
        title: 'Video Animation',
        link: '',
        image_url: require('@/assets/fiverr/marketplace/video-animation.svg'),
      },
      {
        title: 'Programming',
        link: '',
        image_url: require('@/assets/fiverr/marketplace/programming.svg'),
      },
      {
        title: 'Lifestyle',
        link: '',
        image_url: require('@/assets/fiverr/marketplace/lifestyle.svg'),
      },
      {
        title: 'Graphics Design',
        link: '',
        image_url: require('@/assets/fiverr/marketplace/graphics-design.svg'),
      },
      // {
      //   title: '',
      //   link: '',
      //   image_url: require('@/assets/fiverr/marketplace/data.svg'),
      // },
      // {
      //   title: '',
      //   link: '',
      //   image_url: require('@/assets/fiverr/marketplace/data.svg'),
      // },
      // {
      //   title: '',
      //   link: '',
      //   image_url: require('@/assets/fiverr/marketplace/data.svg'),
      // },
      // {
      //   title: '',
      //   link: '',
      //   image_url: require('@/assets/fiverr/marketplace/data.svg'),
      // },
      // {
      //   title: '',
      //   link: '',
      //   image_url: require('@/assets/fiverr/marketplace/data.svg'),
      // },
      // {
      //   title: '',
      //   link: '',
      //   image_url: require('@/assets/fiverr/marketplace/data.svg'),
      // },
    ])

    return {
      marketplaces,
    }
  },
}
</script>
