<template>
  <section id="cloned_websites" class="py-6 lg:py-12 mt-6 lg:mt-12 px-5">
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
