<template>
  <!-- Footer -->
  <footer id="footer" class="bg-gray-800 text-gray-200 py-5">
    <div class="container flex flex-col md:flex-row items-center">
      <div
        class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12"
      >
        <img src="" alt="logo" />
        <ul class="flex gap-12 flex-wrap text-xs md:text-md uppercase">
          <li class="cursor-pointer"><a href="#">Features</a></li>
          <li class="cursor-pointer"><a href="#">Pricing</a></li>
          <li class="cursor-pointer"><a href="#">Contact</a></li>
        </ul>
      </div>

      <div
        class="flex gap-10 mt-12 text-xs flex-wrap justify-center items-center md:text-md md:mt-0"
      >
        <span class="cursor-pointer fa fa-github"></span>
        <span class="cursor-pointer fa fa-twitter"></span>
        <span class="cursor-pointer fa fa-youtube-play"></span>
        <span class="cursor-pointer fa fa-instagram"></span>
        <span class="cursor-pointer fa fa-facebook-square"></span>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const tellMe = ref('tell me')

    return {
      tellMe,
    }
  },
}
</script>
