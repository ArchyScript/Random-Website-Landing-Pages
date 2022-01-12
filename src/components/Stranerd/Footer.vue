<template>
  <!-- Footer -->
  <footer
    id="footer"
    class="mt-12 lg:mt-20 py-5 px-5 lg:px-15 bg-stranerd-dark-dark p-5 md:p-10 lg:p-20"
  >
    <div class="grid grid-cols-4 items justify-between gap-6 mt-8">
      <div
        v-for="footer_link in footer_links"
        :key="footer_link"
        class="flex-1 col-span-4 sm:col-span-2 md:col-span-1"
      >
        <div class="flex flex-col mb-4">
          <h4
            class="block text-white mb-3 sm:mb-6 lg:md-16 font-medium capitalized"
          >
            {{ footer_link.title }}
          </h4>

          <div class="flex flex-col">
            <span
              v-for="footer_sub_link in footer_link.sub_links"
              :key="footer_sub_link"
              class="text-font-light mb-4 cursor-pointer font-light text-white text-sm hover:text-mysqr-main"
            >
              <a :href="footer_sub_link.link">
                {{ footer_sub_link.title }}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="py-2 px-5 flex justify-center items-center mt-6 text-white">
      <div
        v-for="(social_link, index) in social_links"
        :key="`${social_link}_${index}`"
      >
        <a :href="social_link.link" class="">
          <span
            :class="`${social_link.icon} flex lg:hidden mx-2 p-2 rounded-lg`"
          ></span>
          <span
            :class="`${social_link.icon} hidden lg:flex fa-2x mx-2 px-3 py-1 border-2 border-white rounded-xl`"
          ></span>
        </a>
      </div>
    </div>

    <div class="py-2 px-5 flex justify-center items-center mt-6">
      <p class="mb-10 py-2 lg:px-5 text-sm lg:text-lg font-light text-white">
        &copy; 2022 | Stranerd LLC. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const social_links = ref([
      {
        title: 'Facebook',
        icon: 'fa fa-facebook',
        link: '',
      },
      {
        title: 'Instagram',
        icon: 'fa fa-instagram',
        link: '',
      },
      {
        title: 'Twitter',
        icon: 'fa fa-twitter',
        link: '',
      },
    ])
    const footer_links = ref([
      {
        title: 'Company',
        sub_links: [
          {
            title: 'Privacy Policy',
            link: 'https://stranerd.com/legal/privacy-policy.pdf',
          },
          {
            title: 'Terms of Service',
            link: 'https://stranerd.com/legal/terms-of-use.pdf',
          },
          {
            title: 'Terms and Conditions',
            link: 'https://stranerd.com/legal/terms-and-conditions.pdf',
          },
        ],
      },
      {
        title: 'Community',
        sub_links: [
          {
            title: 'Ask a question',
            link: 'https://stranerd.com/questions/create',
          },
          {
            title: 'Blog',
            link: 'https://stranerd.medium.com/',
          },
          {
            title: 'Stranerd Africa',
            link: 'https://www.instagram.com/stranerdafrica_/',
          },
          {
            title: 'Stranerd Official',
            link: 'https://www.instagram.com/officialstranerd/',
          },
        ],
      },
      {
        title: 'About',
        sub_links: [
          {
            title: 'Company',
            link: 'https://stranerd.com/',
          },
          {
            title: 'Team',
            link: 'https://stranerd.com/',
          },
          {
            title: 'Press',
            link: 'https://stranerd.com/',
          },
          {
            title: 'Careers',
            link: 'https://stranerd.com/',
          },
        ],
      },
      {
        title: 'Help',
        sub_links: [
          {
            title: 'FAQs',
            link: 'https://stranerd.com/',
          },
          {
            title: 'Support',
            link: 'support@stranerd.com',
          },
          {
            title: 'Blog',
            link: 'https://stranerd.medium.com/',
          },
        ],
      },
    ])

    return {
      footer_links,
      social_links,
    }
  },
}
</script>
