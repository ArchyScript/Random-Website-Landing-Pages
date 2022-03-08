<template>
  <header
    :class="{ scrolled: !scrollShadowBoolean }"
    class="flex items-center text-white fixed top-0 inset-x-0 z-50 shadow-sm md:shadow-none"
  >
    <div class="container flex flex-col">
      <nav class="flex justify-between items-center py-4">
        <div class="py-1 mx-2">
          <button
            @click="navbarTogglerIsOpenBoolean = !navbarTogglerIsOpenBoolean"
            class="flex md:hidden fiverr-btn py-1 px-3 hover:shadow-md mx-2"
          >
            <span class="fa fa-bars text-2xl"></span>
          </button>

          <a href="fiverr">
            <img
              v-if="scrollShadowBoolean"
              class="h-7 cursor-pointer"
              :src="require('@/assets/fiverr/fiverr-logo-light.png')"
              alt="logo"
            />

            <img
              v-if="!scrollShadowBoolean"
              class="h-7 cursor-pointer"
              :src="require('@/assets/fiverr/fiverr-logo-dark.png')"
              alt="logo"
            />
          </a>
        </div>

        <div class="flex-1 flex">
          <ul
            class="hidden md:flex flex-1 flex-end justify-end mr-4 items-center md:gap-8 lg:gap-12 text-sm"
          >
            <li
              v-for="navbar_link in navbar_links"
              :key="navbar_link"
              class="cursor-pointer"
            >
              <a
                :href="navbar_link.link"
                class="cursor-pointer font-bold text-white"
                :class="scrollShadowBoolean ? 'text-white' : 'text-gray-500'"
              >
                {{ navbar_link.title }}
              </a>
            </li>
          </ul>

          <div class="flex justify-center items-center">
            <button
              :class="scrollShadowBoolean ? 'text-white' : 'text-gray-500'"
              class="hidden sm:flex mx-2 cursor-pointer font-bold text-white"
            >
              Sign In
              <i class="far fa-badge-check"></i>
            </button>

            <button
              :class="
                scrollShadowBoolean
                  ? 'text-white border-white'
                  : 'text-gray-500 border-gray-500'
              "
              class="hidden sm:flex fiverr-btn border-2 hover:border-0 hover:shadow-md mx-2 cursor-pointer font-bold"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <hr v-if="!scrollShadowBoolean" class="" />

      <div v-if="!scrollShadowBoolean" class="flex align-center justify-center">
        <div class="border-b border-gray-200 dark:border-gray-700 px-10">
          <ul
            class="hidden md:flex flex-1 w-full flex-end justify-end mr-4 items-center md:gap-8 lg:gap-12 text-sm"
          >
            <li
              v-for="topbar_quick_link in topbar_quick_links"
              :key="topbar_quick_link"
              class="cursor-pointer py-3"
            >
              <span
                class="cursor-pointer font-medium text-white hover:border-fiverr-main hover:border-b-4"
                :class="scrollShadowBoolean ? 'text-white' : 'text-gray-500'"
              >
                {{ topbar_quick_link.title }}
              </span>
              <!-- <a
                :href="topbar_quick_link.link"
                class="cursor-pointer font-bold text-white hover:border-fiverr-main hover:border-b-4"
                :class="scrollShadowBoolean ? 'text-white' : 'text-gray-500'"
              >
                {{ topbar_quick_link.title }}
              </a> -->
            </li>
          </ul>
        </div>
      </div>
      <!--

      <div
        :class="navbarTogglerIsOpenBoolean ? 'flex' : 'hidden'"
        class="my-2 py-2 text-sm flex-col md:hidden"
      >
        <div v-for="navbar_link in navbar_links" :key="navbar_link">
          <span class="block text-center py-2 mb-1 cursor-pointer">
            <a :href="navbar_link.link">{{ navbar_link.title }}</a>
          </span>
        </div>

        <div
          class="flex sm:hidden flex-end justify-center items-center mt-2 py-3 border-t border-fiverr-dark-light"
        >
          <span class="flex flex-1"></span>
          <button
            class="fiverr-btn fiverr-btn-hover-black-bg border-2 border-fiverr-dark-dark hover:border-0 hover:shadow-md mx-1"
          >
            Signup
          </button>

          <button
            class="fiverr-btn fiverr-btn-hover-black-bg border-2 border-fiverr-dark-dark hover:border-0 hover:shadow-md mx-1"
          >
            Login
          </button>
        </div>
      </div>
      -->
    </div>
  </header>
</template>

<script>
import { onBeforeMount, ref } from 'vue'

export default {
  setup() {
    const scrollShadowBoolean = ref(true)
    const navbarTogglerIsOpenBoolean = ref(false)

    onBeforeMount(() => {
      window.addEventListener('scroll', () => handleScroll())
    })

    const handleScroll = () => {
      console.log('scrolling 23')
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (scrollShadowBoolean.value) scrollShadowBoolean.value = false
      } else {
        // user is at top of page
        if (!scrollShadowBoolean.value) scrollShadowBoolean.value = true
      }
    }

    const topbar_quick_links = ref([
      {
        title: 'Graphics & Design',
        link: 'https://www.fiverr.com/categories/graphics-design',
      },
      {
        title: 'Digital Marketing',
        link: 'https://www.fiverr.com/categories/online-marketing',
      },
      {
        title: 'Writing & Translation',
        link: 'https://www.fiverr.com/categories/writing-translation',
      },
      {
        title: 'Video & Animation',
        link: 'https://www.fiverr.com/categories/video-animation',
      },
      {
        title: 'Programming & Tech',
        link: 'https://www.fiverr.com/categories/programming-tech',
      },
      {
        title: 'Lifestyles',
        link: 'https://www.fiverr.com/categories/lifestyle',
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

    const color_and_images = ref([
      {
        image_link: '',
        color: '#B64663',
      },
      {
        image_link: '',
        color: '#004119',
      },
      {
        image_link: '',
        color: '#591125',
      },
      {
        image_link: '',
        color: '#8B2604',
      },
    ])
    return {
      scrollShadowBoolean,
      navbarTogglerIsOpenBoolean,
      navbar_links,
      topbar_quick_links,
      color_and_images,
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
