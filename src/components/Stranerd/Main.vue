<template>
  <div class="bg-white">
    <Topbar />
    <Welcome />
    <WhatWeDo />
    <Reviews />
    <GettingStarted />
    <FeaturedOn />
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue'

import Topbar from './Topbar.vue'
import Welcome from './Welcome.vue'
import WhatWeDo from './WhatWeDo/Main.vue'
import Reviews from './Reviews.vue'
import GettingStarted from './GettingStarted.vue'
import FeaturedOn from './FeaturedOn.vue'
import Footer from './Footer.vue'

export default {
  name: 'StranerdLandingPage',
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
    WhatWeDo,
    Reviews,
    GettingStarted,
    FeaturedOn,
    Footer,
  },
}
</script>
