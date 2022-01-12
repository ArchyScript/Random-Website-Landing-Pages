<template>
  <section id="cloned_websites" class="py-6 lg:py-12 mt-6 lg:mt-12 px-5">
    <div clss="sm:w-3/4  mx-auto px-2">
      <h1 class="text-3xl text-center font-bold text-gray-800">
        Cloned Websites Landing Pages
      </h1>
      <p class="text-center text-gray-800 mt-4">
        List of cloned websites landing pages, brief description about them and
        link to both the cloned and the original website
      </p>
    </div>

    <!-- FAQs Items -->
    <div class="sm:w-3/4 lg:w-5/12 flex flex-col mx-auto mt-3 lg:mt-6">
      <div
        v-for="(cloned_website, index) in cloned_websites"
        :key="`${cloned_website}_${index}`"
        class="border-b"
      >
        <div
          class="flex items-center py-4 cursor-pointer"
          @click="toggleAccordion(cloned_website.website_name)"
        >
          <span class="flex-1">
            {{ cloned_website.website_name }}
          </span>

          <span
            :class="`${
              cloned_website.website_name == cloned_website_name
                ? 'fa fa-chevron-up'
                : 'fa fa-chevron-down'
            } text-stranerd-dark-dark`"
          ></span>
        </div>

        <div
          v-if="cloned_website.website_name == cloned_website_name"
          class="w-full py-2 px-4"
        >
          <p class="my-3 font-light">
            {{ cloned_website.description }}
          </p>

          <div class="flex justify-between items-center">
            <span class="flex-1"></span>

            <div class="flex items-center text-sm">
              <span
                class="hidden mysqr-btn mysqr-btn-dark-bg mysqr-btn-hover-main-bg cursor-pointer"
                @click="viewClonedWebsiteFunction(cloned_website.route)"
              >
                Original Site
              </span>

              <span
                class="mysqr-btn mysqr-btn-dark-bg mysqr-btn-hover-main-bg cursor-pointer"
                @click="viewClonedWebsiteFunction(cloned_website.route)"
              >
                View Cloned Site
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
// import { useRouter, useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    // const route = useRoute()

    const cloned_website_name = ref('')
    const cloned_websites = ref([
      {
        website_name: 'Squareroof',
        description: `Practice tests and study solutions of all available questions on gateway exams (WAEC, JAMB, JUPEB e.t.c.)... 
            Memorize answers to questions on the back of cards. Scientifically proven to help students get better grades etc.`,
        route: '/mysquareroof',
        original_website_link: 'https://mysquareroof.com/',
      },
      {
        website_name: 'Stranerd',
        description: `
          Squareroof is an exclusive platform to buy and own your share of
          income-producing real estate, right from your mobile phone or
          computer.`,
        route: '/stranerd',
        original_website_link: 'https://stranerd.com/',
      },
    ])

    // using reactive
    // const game = reactive({
    //   dice: 0,
    //   rolls: [],
    // })

    const toggleAccordion = (website_name) => {
      if (cloned_website_name.value == website_name)
        return (cloned_website_name.value = '')
      if (cloned_website_name.value != website_name)
        return (cloned_website_name.value = website_name)
    }

    const viewClonedWebsiteFunction = (route) => {
      router.push(route)
    }
    return {
      cloned_websites,
      cloned_website_name,
      toggleAccordion,
      viewClonedWebsiteFunction,
    }
  },
}
</script>
