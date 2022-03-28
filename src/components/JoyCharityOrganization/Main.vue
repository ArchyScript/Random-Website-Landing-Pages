<template>
  <div class="bg-mysqr-light">
    <!-- <Topbar />
    <Footer /> -->
  </div>
</template>

<script>
import { ref } from 'vue'

// import Topbar from './Topbar.vue'
// import Footer from './Footer.vue'

export default {
  name: 'LandingPage',
  setup() {
    const readersNumber = ref('test')
    const book = ref('testing')

    // expose to template
    return {
      readersNumber,
      book,
    }
  },
  components: {
    // Topbar,
    // Footer,
  },
}
</script>
