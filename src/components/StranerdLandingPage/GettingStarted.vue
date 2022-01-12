<template>
  <section id="how-it-works" class="relative mt-16 lg:mt-20 py-5 px-5 lg:px-15">
    <div
      class="container flex flex-col justify-center items-center lg:mt-8 mx-auto px-2"
    >
      <div class="py-1 mx-auto mb-2 lg:mb-2">
        <img
          class="h-5 md:h-8 lg:h-12 cursor-pointer"
          :src="require('@/assets/stranerd/join.svg')"
          alt="logo"
        />
      </div>

      <h1
        class="text-stranerd-dark-dark text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-4 lg:mb-4 px-5 sm:px-0"
      >
        Journey through school with Stranerd
      </h1>

      <p
        class="text-stranerd-dark-dark font-normal text-sm md:text-lg lg:text-2xl text-center mb-3 lg:mb-6"
      >
        In class, at home or on the go, never be stranded
      </p>

      <div class="mt-2">
        <button type="button">
          <a
            class="stranerd-btn stranerd-btn-main-bg stranerd-btn-hover-main-bg font-semibold text-white border-2 text-lg border-white lg:py-4 lg:px-16"
            href="https://stranerd.com/auth/signup"
          >
            Sign Up
          </a>
        </button>
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
