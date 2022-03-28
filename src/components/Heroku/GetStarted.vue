<template>
  <section style="background: #45091b;" class="relative py-6 lg:py-12">
    <div class="container grid grid-cols-5 lg:mt-8 gap-16 mx-auto px-2">
      <div
        class="col-span-5 lg:col-span-3 flex flex-col items-center lg:items-start sm:w-3/4 lg:w-full mx-auto px-5 sm:px-0"
      >
        <h1
          class="text-white text-2xl md:text-4xl lg:text-5xl font-semibold text-center mt-6 lg:text-left pr-4 mb-8 lg:mb-12"
        >
          Find the
          <span class="italic font-medium">talent</span>
          needed to get your business
          <span class="italic font-medium">growing.</span>
        </h1>

        <div class="">
          <button
            type="button"
            class="fiverr-btn-main cursor-pointer font-bold lg:py-4 lg:px-10"
          >
            <a href="#">
              Get Started
            </a>
          </button>
        </div>
      </div>

      <div class="col-span-5 lg:col-span-2 flex flex-1 relative">
        <img
          class="flex justify-center items-center mx-auto p-2 bg-white"
          :src="require('@/assets/mysquareroof/squareroof3.svg')"
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

    // const sub_links = ref([
    //   {
    //     title: 'Graphics & Design',
    //     link: 'https://www.fiverr.com/categories/graphics-design',
    //   },
    //   {
    //     title: 'Digital Marketing',
    //     link: 'https://www.fiverr.com/categories/online-marketing',
    //   },
    //   {
    //     title: 'Writing & Translation',
    //     link: 'https://www.fiverr.com/categories/writing-translation',
    //   },
    //   {
    //     title: 'Video & Animation',
    //     link: 'https://www.fiverr.com/categories/video-animation',
    //   },
    //   {
    //     title: 'Music & Audio',
    //     link: 'https://www.fiverr.com/categories/music-audio',
    //   },
    //   {
    //     title: 'Programming & Tech',
    //     link: 'https://www.fiverr.com/categories/programming-tech',
    //   },
    //   {
    //     title: 'Data',
    //     link: 'https://www.fiverr.com/categories/data',
    //   },
    //   {
    //     title: 'Business',
    //     link: 'https://www.fiverr.com/categories/business',
    //   },
    //   {
    //     title: 'Lifestyles',
    //     link: 'https://www.fiverr.com/categories/lifestyle',
    //   },
    //   {
    //     title: 'Sitemap',
    //     link: 'https://www.fiverr.com/categories',
    //   },
    // ])

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
      color_and_image_object,
      // current_image,
    }
  },
}
</script>

<style scoped>
header.scrolled {
  @apply shadow-lg bg-white text-gray-500;
}
</style>
