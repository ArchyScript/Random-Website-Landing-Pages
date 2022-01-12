<template>
  <header
    :class="{ scrolled: !scrollShadowBoolean }"
    class="flex items-center text-mysqr-dark-dark bg-mysqr-light fixed top-0 inset-x-0 z-50 shadow-sm md:shadow-none"
  >
    <div class="container flex flex-col">
      <nav class="flex justify-between items-center py-3">
        <div class="py-1 mx-2">
          <a href="">
            <img
              class="h-7 cursor-pointer"
              :src="require('@/assets/home-logo.png')"
              alt="logo"
            />
          </a>
        </div>

        <ul
          class="hidden md:flex flex-1 flex-end justify-center items-center md:gap-8 lg:gap-12 text-sm"
        >
          <li
            v-for="navbar_link in navbar_links"
            :key="navbar_link"
            class="cursor-pointer"
          >
            <a
              :href="`#${navbar_link.in_page_route_by_id}`"
              class="cursor-pointer text-gray-800 hover:text-mysqr-main"
            >
              {{ navbar_link.title }}
            </a>
          </li>
        </ul>

        <div class="flex text-sm items-center">
          <a
            href="https://archyscript-portfolio.netlify.app/"
            target="_blank"
            class="hidden sm:flex mysqr-btn mysqr-btn-hover-main-bg border-2 border-mysqr-dark-dark hover:border-0 hover:shadow-md mx-1"
          >
            <button>
              My Portfolio
            </button>
          </a>

          <button
            @click="navbarTogglerIsOpenBoolean = !navbarTogglerIsOpenBoolean"
            class="flex md:hidden mysqr-btn mysqr-btn-hover-main-bg py-1 px-3 hover:shadow-md mx-2"
          >
            <span class="fa fa-bars text-2xl"></span>
          </button>
        </div>
      </nav>

      <div
        :class="navbarTogglerIsOpenBoolean ? 'flex' : 'hidden'"
        class="my-2 py-2 text-sm flex-col md:hidden justify-center items-center mx-auto"
      >
        <div v-for="navbar_link in navbar_links" :key="navbar_link">
          <a
            :href="`#${navbar_link.in_page_route_by_id}`"
            class="block text-center py-2 mb-1 cursor-pointer text-gray-800 hover:text-mysqr-main"
          >
            <span>
              {{ navbar_link.title }}
            </span>
          </a>
        </div>

        <div
          class="flex sm:hidden mx-auto flex-end justify-center items-center mt-2 py-3"
        >
          <a
            href="https://archyscript-portfolio.netlify.app/"
            target="_blank"
            class="mysqr-btn mysqr-btn-hover-main-bg border-2 border-mysqr-dark-dark hover:border-0 hover:shadow-md mx-1 px-6 py-2"
          >
            <button>
              My Portfolio
            </button>
          </a>
        </div>
      </div>
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
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (scrollShadowBoolean.value) scrollShadowBoolean.value = false
      } else {
        // user is at top of page
        if (!scrollShadowBoolean.value) scrollShadowBoolean.value = true
      }
    }

    const navbar_links = ref([
      {
        title: 'Home',
        in_page_route_by_id: 'home',
      },
      {
        title: 'About Website',
        in_page_route_by_id: 'about-website',
      },
      {
        title: 'About Developer',
        in_page_route_by_id: 'about-developer',
      },
      {
        title: 'Cloned Website',
        in_page_route_by_id: 'cloned_websites',
      },
    ])

    return {
      scrollShadowBoolean,
      navbarTogglerIsOpenBoolean,
      navbar_links,
    }
  },
}
</script>

<style scoped>
header.scrolled {
  @apply shadow-lg;
}
</style>
