<template>
  <div class="bg-white mt-12 lg:mt-20">
    <div
      class="container flex flex-col justify-center items-center mx-auto px-2"
    >
      <h1
        class="text-stranerd-dark-dark text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-4 lg:mb-4 px-3 sm:px-0"
      >
        We make learning easy, convenient and accessible.
      </h1>

      <TestPrep />
      <Flashcards />
      <Notes />
      <ExpertAnswers />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import Notes from './Notes.vue'
import Flashcards from './Flashcards.vue'
import ExpertAnswers from './ExpertAnswers.vue'
import TestPrep from './TestPrep.vue'

export default {
  name: 'StranerdLandingPage',
  setup() {
    const readersNumber = ref('test')
    const book = ref('testing')

    return {
      readersNumber,
      book,
    }
  },
  components: {
    Notes,
    Flashcards,
    ExpertAnswers,
    TestPrep,
  },
}
</script>
