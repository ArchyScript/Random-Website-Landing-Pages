<template>
  <header
    :class="{ scrolled: !scrollShadowBoolean }"
    class="flex items-center text-stranerd-dark-dark bg-white fixed top-0 inset-x-0 z-50 shadow-sm md:shadow-none"
  >
    <div class="container flex flex-col">
      <nav>
        <div class="hidden md:flex justify-between items-center py-3">
          <div class="py-1 mx-2">
            <a href="stranerd">
              <img
                class="h-5 cursor-pointer"
                :src="require('@/assets/stranerd/stranerd_logo.svg')"
                alt="logo"
              />
            </a>
          </div>

          <div class="flex flex-1 justify-center items-center">
            <ul
              class="hidden md:flex flex-end justify-center items-center md:gap-8 lg:gap-12 text-sm"
            >
              <li
                v-for="navbar_link in navbar_links"
                :key="navbar_link"
                class="cursor-pointer"
              >
                <a
                  :href="navbar_link.link"
                  class="cursor-pointer text-stranerd-gray font-medium hover:text-stranerd-main"
                >
                  {{ navbar_link.title }}
                </a>
              </li>
            </ul>

            <div class="hidden lg:flex justify-center-items-center ml-10">
              <input
                type="search"
                placeholder="Seacrh for anything"
                class="py-2 px-3 text-sm focus:outline-none border border-stranerd-gray rounded-full"
              />
            </div>
          </div>

          <div class="text-sm items-center hidden sm:flex">
            <button
              class="border-2 border-stranerd-main stranerd-btn stranerd-btn-no-bg mx-2 hover:bg-stranerd-main hover:text-white hover:border-0 hover:shadow-sm"
            >
              Signup
            </button>

            <button
              class="stranerd-btn stranerd-btn-main-bg mx-2 hover:text-stranerd-main hover:bg-transparent border-2 hover:border-stranerd-main hover:shadow-sm"
            >
              Login
            </button>
          </div>
        </div>

        <div class="my-3 flex-1 flex md:hidden">
          <div
            v-if="!smallScreenSearchBarTogglerIsOpenBoolean"
            class="flex justify-between items-center py-2 w-full"
          >
            <span
              class="fa fa-bars mx-2 p-2"
              @click="toggleNavbarDropdown"
            ></span>

            <div class="py-1 mx-2">
              <a href="stranerd">
                <img
                  class="h-5 cursor-pointer"
                  :src="require('@/assets/stranerd/stranerd_logo.svg')"
                  alt="logo"
                />
              </a>
            </div>

            <span class="fa fa-search mx-2 p-2" @click="toggleSearchBar"></span>
          </div>

          <div
            v-if="smallScreenSearchBarTogglerIsOpenBoolean"
            class="flex justify-center items-center w-full"
          >
            <input
              type="search"
              placeholder="Seacrh for anything"
              class="py-2 px-3 flex-1 text-sm focus:outline-none border border-stranerd-gray rounded-full"
            />

            <span
              class="fa fa-times mx-2 p-2 cursor-pointer"
              @click="toggleSearchBar"
            ></span>
          </div>
        </div>
      </nav>

      <div
        :class="navbarTogglerIsOpenBoolean ? 'flex' : 'hidden'"
        class="my-2 py-2 text-sm flex-col md:hidden"
      >
        <div v-for="navbar_link in navbar_links" :key="navbar_link">
          <span
            class="block text-center py-2 mb-1 cursor-pointer text-stranerd-gray font-medium hover:text-stranerd-main"
          >
            <a :href="navbar_link.link">{{ navbar_link.title }}</a>
          </span>
        </div>

        <div
          class="flex sm:hidden flex-end justify-center items-center mt-2 py-3 border-t border-stranerd-gray"
        >
          <span class="flex flex-1"></span>
          <button
            class="border-2 border-stranerd-main stranerd-btn stranerd-btn-no-bg mx-2 hover:bg-stranerd-main hover:text-white hover:border-0 hover:shadow-sm"
          >
            Signup
          </button>

          <button
            class="flex stranerd-btn stranerd-btn-main-bg mx-2 hover:text-stranerd-main hover:bg-transparent border-2 hover:border-stranerd-main hover:shadow-sm"
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
    const smallScreenSearchBarTogglerIsOpenBoolean = ref(false)

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

    const toggleSearchBar = () => {
      smallScreenSearchBarTogglerIsOpenBoolean.value = !smallScreenSearchBarTogglerIsOpenBoolean.value
      navbarTogglerIsOpenBoolean.value = false
    }

    const toggleNavbarDropdown = () => {
      navbarTogglerIsOpenBoolean.value = !navbarTogglerIsOpenBoolean.value
      smallScreenSearchBarTogglerIsOpenBoolean.value = false
    }

    const navbar_links = ref([
      {
        title: 'Home',
        link: 'https://stranerd.com/',
      },
      {
        title: 'Questions',
        link: 'https://stranerd.com/questions',
      },
      {
        title: 'Study',
        link: 'https://stranerd.com/study',
      },
    ])

    return {
      scrollShadowBoolean,
      navbarTogglerIsOpenBoolean,
      navbar_links,
      smallScreenSearchBarTogglerIsOpenBoolean,
      toggleNavbarDropdown,
      toggleSearchBar,
    }
  },
}
</script>

<style scoped>
header.scrolled {
  @apply shadow-lg;
}
</style>
