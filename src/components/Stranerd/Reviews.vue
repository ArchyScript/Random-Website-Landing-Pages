<template>
  <section
    id="reviews"
    class="relative mt-16 lg:mt-20 py-5 px-5 lg:px-15"
  ></section>
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
