<template>
  <section
    style="background: #8b2604;"
    :style="`background-color: ${color_and_image_object.color};`"
    class="relative pt-16 pb-8 lg:pt-24"
  >
    <div
      class="container grid grid-cols-2 lg:mt-8 gap-6 md:gap-12 mx-auto px-2"
    >
      <div
        class="col-span-2 md:col-span-1 flex flex-col items-center lg:items-start sm:w-3/4 lg:w-full mx-auto px-5 sm:px-0"
      >
        <h1
          class="text-white text-2xl mt-10 mx-auto md:text-3xl lg:text-4xl font-bold text-center lg:text-left pr-4 mb-4 lg:mb-8"
        >
          Find the perfect
          <span class="italic font-medium">freelance</span>
          services for your business
        </h1>

        <div class="flex items-center justify-center mb-6 lg-mb-8">
          <div class="flex border-2 border-gray-200 bg-white rounded">
            <button class="flex items-center justify-center px-4 border-r">
              <svg
                class="w-6 h-6 text-gray-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                ></path>
              </svg>
            </button>
            <input
              type="text"
              class="outline-0 px-4 py-2 w-80 focus:outline-none"
              placeholder='Try "building mobile app"'
            />
            <button
              class="px-4 text-white bg-fiverr-main border-l fon-semibold"
            >
              Search
            </button>
          </div>
        </div>

        <div class="flex items-center">
          <span class="font-semibold text-lg mr-4 text-white">Popular:</span>
          <div class="flex flex-1 items-center flex-wrap">
            <span
              v-for="popular_search in popular_searches"
              :key="popular_search"
              class="mx-2 my-2 px-3 py-1 rounded-lg text-white border-2 font-semibold text-sm border-solid hover:bg-white cursor-pointer hover:text-gray-700"
            >
              {{ popular_search.title }}
            </span>
          </div>
        </div>
      </div>

      <div class="col-span-2 md:col-span-1 flex flex-1 relative">
        <img
          class="flex justify-center items-center mx-auto p-2 bg-white"
          :src="color_and_image_object.image_link"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
import { onBeforeMount, ref } from 'vue'

export default {
  setup() {
    const scrollShadowBoolean = ref(true)
    const navbarTogglerIsOpenBoolean = ref(false)
    const color_and_image_object = ref('')
    const color_index = ref(0)

    onBeforeMount(() => {
      window.addEventListener('scroll', () => handleScroll())
    })

    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (scrollShadowBoolean.value) scrollShadowBoolean.value = false
      } else {
        // user is at top of page
        if (!scrollShadowBoolean.value) scrollShadowBoolean.value = true
      }
    }

    const random_color_and_image = [
      {
        image_link: require('@/assets/fiverr/model_1.png'),
        color: '#B64663',
      },
      {
        image_link: require('@/assets/fiverr/model_2.png'),
        color: '#591125',
      },
      {
        image_link: require('@/assets/fiverr/model_3.png'),
        color: '#8B2604',
      },
      {
        image_link: require('@/assets/fiverr/model_4.png'),
        color: '#004119',
      },
    ]

    const generate_random_colors = () => {
      color_and_image_object.value = random_color_and_image[color_index.value]
      // current_image.value = random_color_and_image[color_index.value]
      color_index.value += 1
      if (color_index.value >= random_color_and_image.length) {
        return (color_index.value = 0)
      }
    }

    setInterval(generate_random_colors, 10000)
    const popular_searches = ref([
      {
        title: 'Website Design',
      },
      {
        title: 'Wordpress',
      },
      {
        title: 'Logo Design',
      },
      {
        title: 'NFT Art',
      },
    ])

    const navbar_links = ref([
      {
        title: 'Fiverr Business',
        link: '',
      },
      {
        title: 'Explore',
        link: '',
      },
      {
        title: 'English',
        link: '',
      },
      {
        title: '$ USD',
        link: '',
      },
      {
        title: 'Become a Seller',
        link: '',
      },
    ])

    // const color_and_images = ref([
    //   {
    //     image_link: require('@/assets/fiverr/model_1.png'),
    //     color: '#B64663',
    //   },
    //   {
    //     image_link: require('@/assets/fiverr/model_1.png'),
    //     color: '#004119',
    //   },
    //   {
    //     image_link: require('@/assets/fiverr/model_1.png'),
    //     color: '#591125',
    //   },
    //   {
    //     image_link: require('@/assets/fiverr/model_1.png'),
    //     color: '#8B2604',
    //   },
    // ])
    return {
      scrollShadowBoolean,
      navbarTogglerIsOpenBoolean,
      navbar_links,
      random_color_and_image,
      popular_searches,
      // color_and_images,
      color_and_image_object,
      // current_image,
    }
  },
}
</script>

<style scoped>
header.scrolled {
  @apply shadow-lg bg-white text-fiverr-dark-dark;
}
.text {
  color: #b64663;
  color: #591125;
  color: #8b2604;
  color: #004119;
}
</style>
