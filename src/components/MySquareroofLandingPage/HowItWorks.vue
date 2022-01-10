<template>
  <section id="how-it-works" class="relative mt-12 lg:mt-20 py-5 px-5 lg:px-15">
    <div class="container flex items-center lg:mt-8 mx-auto px-2">
      <!-- Contect -->
      <div class="flex flex-1 flex-col items-center justify-center">
        <h1
          class="text-gray-800 text-3xl sm:w-3/4 lg:w-7/12 mx-auto md:text-4xl lg:text-5xl font-medium text-center mb-4 lg:mb-8 px-5 sm:px-0"
        >
          How it Works
        </h1>

        <div
          class="grid grid-cols-6 gap-6 justify-center items-center text-center mx-auto mb-4 lg:mb-6"
        >
          <div
            v-for="(how_it_work, index) in how_it_works"
            :key="`${how_it_work}_${index}`"
            class="relative col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col justify-center p-3"
          >
            <div class="relative lg:h-24 lg:w-24 mb-4 mx-auto">
              <img
                class="h-20 w-20 rounded-2xl shadow-md flex justify-center items-center p-4 bg-white"
                :src="how_it_work.image_url"
                alt=""
              />
              <span
                class="absolute -top-3 -right-3 z-4 bg-mysqr-main text-mysqr-light px-2 py-1 ml-2 rounded-full text-xs font-bold"
              >
                {{ how_it_work.notification }}
              </span>
            </div>

            <img
              v-if="index <= 1"
              :class="index == 0 ? 'top-2 -right-20 ' : 'top-14 -right-20'"
              class="absolute hidden lg:flex justify-center items-center"
              :src="how_it_work.arrow_image"
              alt=""
            />

            <h3 class="w-full text-xl font-medium text-gray-700 mb-2">
              {{ how_it_work.title }}
            </h3>

            <p class="text-gray-600 text-sm text-center mb-2 sm:mb-0">
              {{ how_it_work.how_it_works }}
            </p>
          </div>
        </div>

        <!--
        <div
          class="grid grid-cols-6 gap-6 justify-center items-center text-center mx-auto mb-4 lg:mb-6"
        >
          <div
            class="relative col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col justify-center p-3"
          >
            <div class="relative lg:h-24 lg:w-24 mb-4 mx-auto">
              <img
                class="w-full rounded-2xl shadow-md flex justify-center items-center p-4 bg-white"
                :src="require('@/assets/mysquareroof/invest.svg')"
                alt=""
              />
              <span
                class="absolute -top-3 -right-3 z-4 bg-mysqr-main text-mysqr-light px-2 py-1 ml-2 rounded-full text-xs font-bold"
              >
                8
              </span>
            </div>

            <img
              class="animate-spin absolute top-14 -right-20 flex justify-center items-center"
              :src="require('@/assets/mysquareroof/arrow-under.svg')"
              alt=""
            />

            <h3 class="w-full text-xl font-medium text-gray-700 mb-2">
              Discover
            </h3>

            <p class="text-gray-600 text-sm text-center mb-2 sm:mb-0">
              Discover dkld;ldf clsdi;s;dksdvsdsldips'ksDagdadjDPdgsd'
            </p>
          </div>

          <div
            class="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col justify-center p-3"
          >
            <div class="relative lg:h-24 lg:w-24 mb-4 mx-auto">
              <img
                class="w-full rounded-2xl shadow-md flex justify-center items-center p-4 bg-white"
                :src="require('@/assets/mysquareroof/invest.svg')"
                alt=""
              />
              <span
                class="absolute -top-3 -right-3 z-4 bg-mysqr-main text-mysqr-light px-2 py-1 ml-2 rounded-full text-xs font-bold"
              >
                8
              </span>
            </div>

            <h3 class="w-full text-xl font-medium text-gray-700 mb-2">
              Discover
            </h3>

            <p class="text-gray-600 text-sm text-center mb-2 sm:mb-0">
              Discover dkld;ldf clsdi;s;dksdvsdsldips'ksDagdadjDPdgsd'
            </p>
          </div>


          <div
            v-for="how_it_work in how_it_works"
            :key="how_it_work"
            class="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col justify-center p-3"
          >
            <div class="relative">
              <img
                class="w-full lg:h-20 lg:w-20 mb-4 rounded-2xl shadow-md flex justify-center items-center mx-auto p-5 bg-white"
                :src="how_it_work.image_url"
                alt=""
              />
              <span
                class="absolute top-3 right-3 z-4 bg-gray-800 px-2 py-1 ml-2 rounded text-xs font-bold"
              >
                8
              </span>
            </div>

            <h3 class="w-full text-xl font-medium text-gray-700 mb-2">
              {{ how_it_work.title }}
            </h3>

            <p class="text-gray-600 text-sm text-center mb-2 sm:mb-0">
              {{ how_it_work.how_it_works }}
            </p>
          </div>
        </div>
           -->

        <div class="flex items-center justify-center text-center mx-auto mt-2">
          <button
            type="button"
            class="mysqr-btn mysqr-btn-black-bg mysqr-btn-hover-main-bg py-3 px-6"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const how_it_works = ref([
      {
        title: 'Register',
        image_url: require('@/assets/mysquareroof/register.png'),
        arrow_image: require('@/assets/mysquareroof/arrow-over.svg'),
        notification: '1',
        how_it_works:
          "Register to become a member of Squareroof's co-ownership community",
      },
      {
        title: 'Discover',
        image_url: require('@/assets/mysquareroof/discover.svg'),
        arrow_image: require('@/assets/mysquareroof/arrow-under.svg'),
        notification: '2',
        how_it_works:
          'Discover new and diversified properties across multiple locations',
      },
      {
        title: 'Invest',
        image_url: require('@/assets/mysquareroof/invest.svg'),
        arrow_image: '',
        notification: '3',
        how_it_works:
          'Buy and own shares in income producing properties for a fractional cost',
      },
    ])

    return {
      how_it_works,
    }
  },
}
</script>
