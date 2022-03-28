<template>
  <section
    id="about-developer"
    class="relative py-8 lg:py-12 bg-mysqr-semi-light"
  >
    <div
      class="container grid grid-cols-2 lg:mt-8 gap-2 md:gap-4 lg:gap-16 mx-auto px-2"
    >
      <div class="col-span-2 lg:col-span-1 flex flex-1 relative">
        <img
          class="flex justify-center items-center mx-auto p-2 rounded-full bg-white"
          :src="require('@/assets/archyscript.png')"
          alt=""
        />
      </div>

      <div
        class="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start sm:w-3/4 lg:w-full mx-auto px-5 sm:px-0"
      >
        <h1
          class="text-mysqr-dark-dark text-2xl mt-4 mx-auto md:text-3xl lg:text-4xl font-semibold text-center lg:text-left pr-4 mb-4 lg:mb-6"
        >
          About Developer
        </h1>

        <p
          class="text-mysqr-dark-dark font-normal text-center lg:text-left text-lg mb-3 lg:mb-6"
        >
          <span class="block text-sm mb-2">
            My name is Daniel DASAOLU, I'm a frontend developer.
          </span>
          <span class="block text-sm mb-2">
            MEVN stack (MongoDB, Express JS, Vue JS and Node JS).
          </span>
          <span class="block text-sm mb-2">
            Aside from my coding, I read on architecture and I'm always open to
            learn new things.
          </span>
          <span class="block text-sm mb-2">
            I'm an aspiring FULLSTACK and BLOCKCHAIN developer.
          </span>
          <span class="block text-sm mb-2">
            I'm a Machine Learning (ML) and Artificial Intelligence (AI)
            Enthusiast.
          </span>
          <span class="block text-sm mb-2">
            In my free time, I play the guitar mainly and the keyboard
            occasionally
          </span>
        </p>

        <div class="">
          <a
            href="https://archyscript-portfolio.netlify.app/"
            class="mysqr-btn mysqr-btn-dark-bg mysqr-btn-hover-main-bg lg:py-4 lg:px-10"
          >
            <button type="button">
              My Portfolio
            </button>
          </a>
        </div>
      </div>

      <!-- <div class="col-span-3 lg:col-span-2 flex flex-1 lg:hidden relative mt-2">
        <img
          class="flex justify-center items-center mx-auto rounded-full p-2 bg-white"
          :src="require('@/assets/archyscript.png')"
          alt=""
        />
      </div> -->
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const benefits = ref([
      {
        title: 'A SEC licensed trustee',
      },
      {
        title: 'A professional property manager',
      },
      {
        title: 'A chartered  estate surveyor and valuer',
      },
    ])

    return {
      benefits,
    }
  },
}
</script>
