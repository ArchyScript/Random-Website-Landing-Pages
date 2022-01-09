<template>
  <!-- Footer -->
  <footer id="footer" class="mt-12 lg:mt-20 py-5 px-5 lg:px-15">
    <div class="">
      <div class="grid grid-cols-2 gap-6 p-5 lg:p-10">
        <div class="col-span-2 md:col-span-1 flex-1 flex-col">
          <div class="flex justify-between items-center">
            <img
              :src="require('@/assets/mysquareroof/squareroof2.png')"
              alt="logo"
              class="h-6 w-auto mb-6"
            />
          </div>

          <div
            class="flex flex-col sm:flex-row lg:flex-col gap-6 justify-between sm:items-center"
          >
            <div class="flex flex-1 flex-col mb-3 lg:mb-6">
              <h4 class="text-gray-500 mb-1 font-medium">Lagos</h4>
              <span class="text-graay-800 font-normal">
                ‍11b Fatai Idowu Arobieke, Lekki Ph 1,
              </span>
              <span class="text-graay-800 font-normal">
                Lagos, Nigeria.
              </span>
            </div>

            <div class="flex flex-1 flex-col mb-3 lg:mb-6">
              <h4 class="text-gray-500 mb-1 font-medium">Maryland</h4>
              <span class="text-graay-800 font-normal">
                ‍11b Fatai Idowu Arobieke, Lekki Ph 1,
              </span>
              <span class="text-graay-800 font-normal">
                Lagos, Nigeria.
              </span>
            </div>
          </div>
        </div>

        <div
          class="col-span-2 md:col-span-1 flex flex-wrap justify-between gap-6"
        >
          <div
            v-for="footerLink in footerLinks"
            :key="footerLink"
            class="flex-1"
          >
            <div class="flex flex-col mb-4">
              <h4
                class="block text-mysqr-dark-light mb-2 sm:mb-4 lg:md-6 font-medium capitalized"
              >
                {{ footerLink.title }}
              </h4>

              <div class="flex flex-col">
                <div
                  v-for="footerSubLink in footerLink.subLinks"
                  :key="footerSubLink"
                >
                  <span class="text-font-normal py-1 mb-1 cursor-pointer">
                    <a href="#contact">{{ footerSubLink.title }}</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="py-2 px-5">
        <p class="mb-10 py-2 text-sm text-gray-500">&copy; 2022 CeedCap.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const footerLinks = ref([
      {
        title: 'Quick Links',
        subLinks: [
          {
            title: 'Citonhub',
            route: '/citonhub',
          },
        ],
      },
      {
        title: 'Nav',
        subLinks: [
          {
            title: 'Citonhub',
            route: '/citonhub',
          },
        ],
      },
      {
        title: 'Quick Links',
        subLinks: [
          {
            title: 'Citonhub',
            route: '/citonhub',
          },
          {
            title: 'Tech',
            route: '/tech',
          },
        ],
      },
    ])

    return {
      footerLinks,
    }
  },
}
</script>
