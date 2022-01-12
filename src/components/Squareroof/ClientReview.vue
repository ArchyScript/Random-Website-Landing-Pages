<template>
  <!-- Welcome Page -->
  <section id="details" class="relative mt-12 lg:mt-20 py-5 px-5 lg:px-15">
    <div class="container grid grid-cols-3 lg:mt-8 gap-6 mx-auto px-2">
      <!-- Contect -->
      <div
        class="col-span-3 lg:col-span-1 flex flex-col items-center lg:items-start sm:w-3/4 lg:w-full mx-auto"
      >
        <h1
          class="text-mysqr-dark-dark text-2xl mt-10 mx-auto md:text-3xl lg:text-4xl font-semibold text-center lg:text-left pr-4 mb-4 lg:mb-8"
        >
          What clients say about us
        </h1>

        <p
          class="text-mysqr-dark-dark font-normal text-center lg:text-left text-lg mb-3 lg:mb-6"
        >
          Squareroof is a modern property technology platform on a mission to
          simplify and make real estate affordable
        </p>

        <div class="">
          <button
            type="button"
            class="mysqr-btn mysqr-btn-dark-bg mysqr-btn-hover-main-bg lg:py-4 lg:px-10"
          >
            <a href="https://www.mysquareroof.com/about">
              About Squareroof
            </a>
          </button>
        </div>
      </div>

      <div
        class="col-span-3 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2"
      >
        <div
          v-for="client_review in client_reviews"
          :key="client_review"
          class="rounded-2xl bg-mysqr-semi-light flex flex-col justify-center px-8 py-6"
        >
          <p class="text-mysqr-dark-dark text-lg font-light mb-4">
            {{ client_review.review }}
          </p>

          <div class="flex flex-col mt-3">
            <div class="flex p-1 my-1 justify-center items-center">
              <span>
                <img
                  :src="require('@/assets/mysquareroof/quote.svg')"
                  alt="logo"
                  class="h-10 w-10 mr-2 p-1 rounded-full bg-white shadow-xs"
                />
              </span>

              <div
                class="flex flex-col flex-1 font-semibold mx-2 text-mysqr-dark-dark"
              >
                <span class="font-semibold font-sm">
                  {{ client_review.name }}
                </span>
                <span class="font-light font-xs">
                  {{ client_review.stack }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const client_reviews = ref([
      {
        name: 'Olakunle Ojo',
        stack: 'Financial Accountant',
        review:
          'Before Squareroof, real estate was unattainable for me. I love the idea of being able to buy little by little according to my pocket',
      },
      {
        name: 'Emeka Nduka',
        stack: 'Executive Director',
        review:
          "I like that Squareroof is putting a lot of effort to create a truly seamless experience for investing in real estate. The team's dedication is impressive",
      },
      {
        name: 'Esosa Omonuwa',
        stack: 'Investment Banker',
        review:
          'What Squareroof is doing is a game changer and is welcomed, considering how expensive real estate is for many young people.',
      },
      {
        name: 'Khalil hassan',
        stack: 'Investor',
        review:
          "As an investor, it's a useful tool to diversify. I see Squareroof disrupting traditional real estate investment in a collaborative way.",
      },
      {
        name: 'Esther Olushola ',
        stack: 'Product Designer',
        review:
          'Eventually everyone realises that owning a piece of real estate is a real deal and its usually too late and unaffordable. Squareroof is a fresh approach',
      },
      {
        name: 'Nedu Obi',
        stack: 'Developer',
        review:
          'What Squareroof offers is a win-win solution for developers. It is a unique way to sell properties with the potential to increase housing supply. Kudos to the team.',
      },
    ])

    return {
      client_reviews,
    }
  },
}
</script>
