<template>
  <header
    :class="{ scrolled: !scrollShadowBoolean }"
    class="flex items-center text-mysqr-dark-dark bg-mysqr-light fixed top-0 inset-x-0 z-50 shadow-sm md:shadow-none"
  >
    <div class="container flex flex-col">
      <nav class="flex justify-between items-center py-3">
        <div class="py-1 mx-2">
          <a href="mysquareroof">
            <img
              class="h-5 cursor-pointer"
              :src="require('@/assets/mysquareroof/squareroof2.png')"
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
              :href="navbar_link.liink"
              class="cursor-pointer text-gray-800 hover:text-mysqr-main"
            >
              {{ navbar_link.title }}
            </a>
          </li>
        </ul>

        <div class="flex text-sm items-center">
          <button
            class="hidden sm:flex mysqr-btn mysqr-btn-no-bg mx-1 hover:text-mysqr-main hover:shadow-xs"
          >
            Signup
          </button>

          <button
            class="hidden sm:flex mysqr-btn mysqr-btn-hover-black-bg border-2 border-mysqr-dark-dark hover:border-0 hover:shadow-md mx-1"
          >
            Login
          </button>

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
        class="my-2 py-2 text-sm flex-col md:hidden"
      >
        <div v-for="navbar_link in navbar_links" :key="navbar_link">
          <span
            class="block text-center py-2 mb-1 cursor-pointer text-gray-800 hover:text-mysqr-main"
          >
            <a :href="navbar_link.link">{{ navbar_link.title }}</a>
          </span>
        </div>

        <div
          class="flex sm:hidden flex-end justify-center items-center mt-2 py-3 border-t border-mysqr-dark-light"
        >
          <span class="flex flex-1"></span>
          <button
            class="mysqr-btn mysqr-btn-hover-black-bg border-2 border-mysqr-dark-dark hover:border-0 hover:shadow-md mx-1"
          >
            Signup
          </button>

          <button
            class="mysqr-btn mysqr-btn-hover-black-bg border-2 border-mysqr-dark-dark hover:border-0 hover:shadow-md mx-1"
          >
            Login
          </button>
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
      console.log('scrolling 23')
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
        title: 'How it works',
        link: 'https://www.mysquareroof.com/how-it-works',
      },
      {
        title: 'Learn',
        link: 'https://www.mysquareroof.com/learn',
      },
      {
        title: 'About',
        link: 'https://www.mysquareroof.com/about',
      },
      {
        title: 'Contact',
        link: 'https://www.mysquareroof.com/contact',
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
