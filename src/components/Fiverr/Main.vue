<template>
  <div class="">
    <Topbar />
    <Welcome />
    <Trustees />
    <PopularProfessionalServices />
    <HowItWorks />
    <MarketPlace />
    <!-- <TestSlider /> -->
    <FiverrBusiness />
    <Reviews />
    <LogoMaker />
    <Inspirations />
    <FiverrGuides />
    <GettingStarted />
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue'

import Topbar from './Topbar.vue'
import Welcome from './Welcome.vue'
import Trustees from './Trustees.vue'
import PopularProfessionalServices from './PopularProfessionalServices.vue'
import HowItWorks from './HowItWorks.vue'
import MarketPlace from './MarketPlace.vue'
import FiverrBusiness from './FiverrBusiness.vue'
import Reviews from './Reviews.vue'
import LogoMaker from './LogoMaker.vue'
import Inspirations from './Inspirations.vue'
import FiverrGuides from './FiverrGuides.vue'
import GettingStarted from './GetStarted.vue'
import Footer from './Footer.vue'
// import TestSlider from './TestSlider.vue'

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
    Trustees,
    PopularProfessionalServices,
    HowItWorks,
    MarketPlace,
    FiverrBusiness,
    Reviews,
    LogoMaker,
    Inspirations,
    FiverrGuides,
    GettingStarted,
    Footer,
    // TestSlider,
  },
}
</script>
