<template>
  <section id="how-it-works" class="relative mt-10 lg:mt-20 py-5 px-5 lg:px-15">
    <div class="container flex items-center lg:mt-8 mx-auto px-2">
      <!-- Contect -->
      <div class="flex flex-1 flex-col items-center justify-center">
        <h1
          class="text-stranerd-dark-dark text-3xl sm:w-3/4 lg:w-7/12 mx-auto md:text-4xl lg:text-5xl font-medium text-center mb-4 lg:mb-8 px-5 sm:px-0"
        >
          Featured On
        </h1>

        <div class="flex flex-wrap mx-auto justify-center items-center mt-2">
          <div
            class="mx-3 md:mx-6 lg:mx-8"
            v-for="(featured_on, index) in featured_ons"
            :key="`${featured_on}_${index}`"
          >
            <a :href="featured_on.link" :title="featured_on.title">
              <img
                :src="featured_on.image_url"
                alt=""
                class="h-5 md:h-8 lg:h-10 cursor-pointer"
              />
            </a>
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
    const featured_ons = ref([
      {
        title: 'Techpoint',
        link: 'https://google.com',
        image_url: require('@/assets/stranerd/techpoint.png'),
      },
      {
        title: 'Technext',
        link: 'https://google.com',
        image_url: require('@/assets/stranerd/technext.png'),
      },
    ])

    return {
      featured_ons,
    }
  },
}
</script>
