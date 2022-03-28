<template>
  <div class="bg-mysqr-light">
    <Topbar />
    <Welcome />
    <AboutThisProject />
    <AboutTheDeveloper />
    <ClonedSitesLinksAndDescription />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import { ref } from 'vue'

import Topbar from '../Topbar.vue'
import Welcome from './Welcome.vue'
import AboutThisProject from './AboutThisProject.vue'
import AboutTheDeveloper from './AboutTheDeveloper.vue'
import ClonedSitesLinksAndDescription from './MissionAndHelps.vue'
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
    Topbar,
    Welcome,
    AboutThisProject,
    AboutTheDeveloper,
    ClonedSitesLinksAndDescription,
  },
}
</script>
