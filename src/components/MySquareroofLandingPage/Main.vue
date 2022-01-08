<template>
  <div class="bg-mysqr-light">
    <Topbar />
    <Welcome />
    <About />
    <Benefit1 />
    <HowItWorks />
    <Benefit2 />
    <ClientReview />
    <GettingStarted />
    <ContactUs />
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue'

import Topbar from './Topbar.vue'
import Welcome from './Welcome.vue'
import About from './About.vue'
import Benefit1 from './Benefit1.vue'
import HowItWorks from './HowItWorks.vue'
import Benefit2 from './Benefit2.vue'
import ClientReview from './ClientReview.vue'
import GettingStarted from './GettingStarted.vue'
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
    About,
    Benefit1,
    HowItWorks,
    Benefit2,
    ClientReview,
    GettingStarted,
    ContactUs,
    Footer,
  },
}
</script>
