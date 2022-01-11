<template>
  <div class="bg-white">
    <Notes />
    <Flashcards />
    <ExpertAnswers />
    <TestPrep />
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
