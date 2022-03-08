<template>
  <section
    id="trustee"
    class="relative py-2"
    style="background-color: #fafafa;"
  >
    <div class="flex flex-wrap mx-auto justify-center items-center mt-2">
      <span class="font-semibold text-gray-400 text-xl px-2">Trusted By:</span>
      <div
        class="flex mx-4 md:mx-6 lg:mx-8"
        v-for="(trustee, index) in trustees"
        :key="`${trustee}_${index}`"
      >
        <!-- <a :href="trustee.link" :title="trustee.title">
          <img
            :src="trustee.image_url"
            alt=""
            class="h-5 md:h-8 lg:h-12 cursor-pointer"
          />
        </a> -->
        <span>
          <img
            :src="trustee.image_url"
            alt=""
            :title="trustee.title"
            class="h-8 md:h-10 lg:h-14"
          />
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const trustees = ref([
      {
        title: 'Facebook',
        link: '',
        image_url: require('@/assets/fiverr/trustee_facebook.png'),
      },
      {
        title: 'Google',
        link: '',
        image_url: require('@/assets/fiverr/trustee_google.png'),
      },
      {
        title: 'Netflix',
        link: '',
        image_url: require('@/assets/fiverr/trustee_netflix.png'),
      },
      {
        title: 'P&G',
        link: '',
        image_url: require('@/assets/fiverr/trustee_pandg.png'),
      },
      {
        title: 'Paypal',
        link: '',
        image_url: require('@/assets/fiverr/trustee_paypal.png'),
      },
    ])

    return {
      trustees,
    }
  },
}
</script>
