<template>
  <section
    style="background: #8b2604;"
    :style="`background-color: ${color_and_image_object.color};`"
    class="relative pt-16 pb-12 lg:pb-24 lg:pt-24"
  >
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
      color_index.value += 1
      if (color_index.value >= random_color_and_image.length) {
        return (color_index.value = 0)
      }
    }

    setInterval(generate_random_colors, 15000)
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

    return {
      scrollShadowBoolean,
      navbarTogglerIsOpenBoolean,
      navbar_links,
      random_color_and_image,
      popular_searches,
      color_and_image_object,
    }
  },
}
</script>

<style scoped>
header.scrolled {
  @apply shadow-lg bg-white text-gray-500;
}
</style>
