<template>
  <div class="">
    <Topbar />
    <Welcome />
    <Features />
    <Downloads />
    <FAQs />
    <ContactUs />
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue'

import Topbar from './Topbar.vue'
import Welcome from './Welcome.vue'
import Features from './Features.vue'
import Downloads from './Downloads.vue'
import FAQs from './FAQs.vue'
import ContactUs from './ContactUs.vue'
import Footer from './Footer.vue'

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
    Topbar,
    Welcome,
    Features,
    Downloads,
    FAQs,
    ContactUs,
    Footer,
  },
}
</script>
