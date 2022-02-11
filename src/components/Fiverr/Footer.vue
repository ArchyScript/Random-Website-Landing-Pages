<template>
  <!-- Footer -->
  <footer
    id="footer"
    class="mt-12 lg:mt-20 py-5 px-5 lg:px-15 p-5 md:p-10 lg:p-20"
  >
    <div class="grid grid-cols-5 items justify-between gap-6 mt-8">
      <div
        v-for="footer_link in footer_links"
        :key="footer_link"
        class="flex-1 col-span-5 sm:col-span-2 lg:col-span-1"
      >
        <div class="flex flex-col mb-4">
          <h4
            class="block text-gray-800 mb-3 sm:mb-6 lg:md-16 font-semibold text-xl capitalized"
          >
            {{ footer_link.title }}
          </h4>

          <div class="flex flex-col">
            <span
              v-for="footer_sub_link in footer_link.sub_links"
              :key="footer_sub_link"
              class="text-font-light mb-4 cursor-pointer hover:text-mysqr-main"
            >
              <span class="font-medium">
                <a :href="footer_sub_link.link" class="text-lg text-gray-500">
                  {{ footer_sub_link.title }}
                </a>
                <br />
                <span class="text-sm text-gray-400">
                  {{ footer_sub_link.sub_title }}
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <hr class="my-6" />

    <div class="flex justify-between items-center">
      <div class="flex-1 flex items-center font-semibold text-gray-500">
        <span class="py-1 mx-2">
          <a href="fiverr">
            <img
              class="h-8 cursor-pointer"
              :src="require('@/assets/fiverr/fiverr-logo-dark.png')"
              alt="logo"
            />
          </a>
        </span>

        <span class="mx-2">© Fiverr International Ltd. 2022</span>
      </div>

      <div class="flex flex-1 items-center">
        <div class="flex fle x-1">
          <div
            v-for="(social_link, index) in social_links"
            :key="`${social_link}_${index}`"
          >
            <a :href="social_link.link" class="text-gray-500">
              <span :class="`${social_link.icon} fa-2x flex mx-4`"></span>
            </a>
          </div>
        </div>

        <div class="flex flex-wrap items-center mx-4 font-medium text-gray-500">
          <span class="mx-2 flex items-center">
            <i class="fas fa-globe fa-2x mx-2"></i>
            English
          </span>
          <span class="mx-2 flex items-center">
            <i class="fa fa-dollar fa-2x mx-2"></i>
            USD
          </span>
          <span class="mx-2 flex items-center">
            <i class="fas fa-globe fa-2x mx-2"></i>
          </span>
        </div>
      </div>
    </div>
    <!-- <div class="p y-2 px-5 flex justify-center items-center mt-6 text-gray-500">
      <div
        v-for="(social_link, index) in social_links"
        :key="`${social_link}_${index}`"
      >
        <a :href="social_link.link" class="">
          <span
            :class="`${social_link.icon} flex lg:hidden mx-2 p-2 rounded-lg`"
          ></span>
          <span
            :class="`${social_link.icon} hidden lg:flex fa-2x mx-2 px-3 py-1 border-2 border-gray-500 rounded-xl`"
          ></span>
        </a>
      </div>
    </div> -->

    <!-- <div class="py-2 px-5 flex justify-center items-center mt-6">
      <p class="mb-10 py-2 lg:px-5 text-sm lg:text-lg font-light text-gray-500">
        &copy; 2022 | Stranerd LLC. All rights reserved.
      </p>
    </div> -->
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const social_links = ref([
      {
        title: 'Twitter',
        icon: 'fa fa-twitter',
        link: 'https://twitter.com/fiverr',
      },
      {
        title: 'Facebook',
        icon: 'fa fa-facebook',
        link: 'https://www.facebook.com/fiverr',
      },
      {
        title: 'LinkedIn',
        icon: 'fa fa-linkedin-square',
        link: 'https://www.linkedin.com/company/fiverr-com',
      },
      {
        title: 'Pinterest',
        icon: 'fa fa-pinterest',
        link: 'https://www.pinterest.com/fiverr',
      },
      {
        title: 'Instagram',
        icon: 'fa fa-instagram',
        link: 'https://instagram.com/fiverr',
      },
    ])
    const footer_links = ref([
      {
        title: 'Categories',
        sub_links: [
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
            title: 'Music & Audio',
            link: 'https://www.fiverr.com/categories/music-audio',
          },
          {
            title: 'Programming & Tech',
            link: 'https://www.fiverr.com/categories/programming-tech',
          },
          {
            title: 'Data',
            link: 'https://www.fiverr.com/categories/data',
          },
          {
            title: 'Business',
            link: 'https://www.fiverr.com/categories/business',
          },
          {
            title: 'Lifestyles',
            link: 'https://www.fiverr.com/categories/lifestyle',
          },
          {
            title: 'Sitemap',
            link: 'https://www.fiverr.com/categories',
          },
        ],
      },
      {
        title: 'About',
        sub_links: [
          {
            title: 'Careers',
            link: 'https://www.fiverr.com/jobs?source=footer',
          },
          {
            title: 'Press & News',
            link: 'https://www.fiverr.com/news/press-releases?source=footer',
          },
          {
            title: 'Partnership',
            link: 'https://www.fiverr.com/partnerships?source=footer',
          },
          {
            title: 'Privacy Policy',
            link: 'https://www.fiverr.com/privacy-policy?source=footer',
          },
          {
            title: 'Terms of Service',
            link: 'https://www.fiverr.com/terms_of_service?source=footer',
          },
          {
            title: 'Intellectual Property Claim',
            link: 'https://www.fiverr.com/intellectual-property?source=footer',
          },
          {
            title: 'Investor Relations',
            link: 'https://investors.fiverr.com/',
          },
        ],
      },
      {
        title: 'Support',
        sub_links: [
          {
            title: 'Help & Support',
            link: 'https://www.fiverr.com/support',
          },
          {
            title: 'Trust & Safety',
            link: 'https://www.fiverr.com/trust_safety?source=footer',
          },
          {
            title: 'Selling on Fiverr',
            link:
              'https://www.fiverr.com/support/articles/360010451297-How-to-Start-Selling-on-Fiverr',
          },
          {
            title: 'Buying on Fiverr',
            link:
              'https://www.fiverr.com/content/how-fiverr-works?show_join&source=footer',
          },
        ],
      },
      {
        title: 'Community',
        sub_links: [
          {
            title: 'Events',
            link: 'https://events.fiverr.com/',
          },
          {
            title: 'Blogs',
            link:
              'https://blog.fiverr.com/?utm_source=fiverr&utm_medium=website',
          },
          {
            title: 'Forum',
            link:
              'http://forum.fiverr.com/?utm_source=fiverr&utm_medium=website',
          },
          {
            title: 'Community Standards',
            link: 'https://www.fiverr.com/community/standards?source=footer',
          },
          {
            title: 'Podcast',
            link: 'https://podfollow.com/ninetwentynine',
          },
          {
            title: 'Affiliate',
            link: 'https://affiliates.fiverr.com/',
          },
          {
            title: 'Invite a Friend',
            link: 'https://www.fiverr.com/referral_program?source=footer',
          },
          {
            title: 'Become a Seller',
            link: 'https://www.fiverr.com/start_selling?source=footer',
          },
        ],
      },
      {
        title: 'More From Fiverr',
        sub_links: [
          {
            title: 'Fiverr Business',
            link: 'https://www.fiverr.com/business?source=footer',
          },
          {
            title: 'FIverr Pro',
            link: 'https://www.fiverr.com/pro?source=footer',
          },
          {
            title: 'Fiverr Studios',
            link: 'https://www.fiverr.com/studios?source=footer',
          },
          {
            title: 'Fiverr Logo Maker',
            link: 'https://www.fiverr.com/logo-maker?source=footer',
          },
          {
            title: 'Fiverr Guides',
            link: 'https://www.fiverr.com/resources/guides?source=footer',
          },
          {
            title: 'Get Inspired',
            link:
              'https://discover.fiverr.com/?utm_source=fiverr&utm_medium=link&utm_content=footer_link',
          },
          {
            title: 'Clear Voice',
            sub_title: 'Content Marketing',
            link:
              'https://discover.fiverr.com/?utm_source=fiverr&utm_medium=link&utm_content=footer_link',
          },
          {
            title: 'Fiverr Workspace',
            sub_title: 'Invoice Softwares',
            link:
              'https://workspace.fiverr.com/?utm_source=fiverr&utm_medium=marketing_site&utm_content=footer',
          },
          {
            title: 'Learn ',
            sub_title: 'Online Courses',
            link: '',
          },
          {
            title: 'Working Not Working',
            link: '',
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
