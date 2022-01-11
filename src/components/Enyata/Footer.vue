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
            class="flex flex-col sm:flex-row gap-6 justify-between sm:items-center lg:items-start"
          >
            <div
              v-for="address_and_location in address_and_locations"
              :key="address_and_location"
              class="flex flex-1 flex-col mb-3 lg:mb-4 text-mysqr-dark-dark"
            >
              <h4 class="mb-1 font-medium text-opacity-50">
                {{ address_and_location.title }}
              </h4>
              <span class="text-sm font-light">
                ‍{{ address_and_location.address }}
              </span>
              <span class="text-sm font-normal">
                {{ address_and_location.location }}
              </span>
            </div>
          </div>
        </div>

        <div
          class="col-span-2 md:col-span-1 flex flex-wrap justify-between gap-6"
        >
          <div
            v-for="footer_link in footer_links"
            :key="footer_link"
            class="flex-1"
          >
            <div class="flex flex-col mb-4">
              <h4
                class="block text-mysqr-dark-dark mb-2 sm:mb-4 lg:md-6 font-medium capitalized"
              >
                {{ footer_link.title }}
              </h4>

              <div class="flex flex-col">
                <span
                  v-for="footer_sub_link in footer_link.sub_links"
                  :key="footer_sub_link"
                  class="text-font-normal mb-1 cursor-pointer font-light text-mysqr-dark-dark text-sm hover:text-mysqr-main"
                >
                  <a :href="footer_sub_link.link">
                    {{ footer_sub_link.title }}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="py-2 px-5">
        <p class="mb-10 py-2 lg:px-5 text-sm font-light text-mysqr-dark-dark">
          &copy; 2022 CeedCap.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const address_and_locations = ref([
      {
        title: 'Lagos',
        address: '11b Fatai Idowu Arobieke, Lekki Ph 1,',
        location: 'Lagos, Nigeria.',
      },
      {
        title: 'Maryland',
        address: '9711 Washingtonian Boulevard,',
        location: 'Maryland, 20878, USA.',
      },
    ])

    const footer_links = ref([
      {
        title: 'Quick Links',
        sub_links: [
          {
            title: 'Learn',
            link: 'https://www.mysquareroof.com/learn',
          },
          {
            title: 'How it works',
            link: 'https://www.mysquareroof.com/how-it-works',
          },
          {
            title: 'Support',
            link: 'https://www.mysquareroof.com/contact',
          },
        ],
      },
      {
        title: 'Social',
        sub_links: [
          {
            title: 'Facebook',
            link: 'https://www.facebook.com/mysquareroof',
          },
          {
            title: 'Instagram',
            link: 'https://www.instagram.com/mysquareroof',
          },
          {
            title: 'Twitter',
            link: 'https://twitter.com/mysquareroof',
          },
        ],
      },
      {
        title: 'Terms & Privacy',
        sub_links: [
          {
            title: 'About',
            link: 'https://www.mysquareroof.com/about',
          },
          {
            title: 'Privacy Policy',
            link: 'https://www.mysquareroof.com/privacy',
          },
          {
            title: 'Terms of Use',
            link: 'https://www.mysquareroof.com/terms',
          },
        ],
      },
    ])

    return {
      footer_links,
      address_and_locations,
    }
  },
}
</script>
