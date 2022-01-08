<template>
  <!-- Footer -->
  <footer id="footer" class="mt-16">
    <div class="container">
      <div class="flex p-10">
        <div class="flex flex-1 flex-col">
          <div class="flex justify-between items-center">
            <img
              :src="require('@/assets/mysquareroof/squareroof2.png')"
              alt="logo"
              class="h-6 w-auto mb-6"
            />
          </div>

          <div class="flex flex-col mb-6">
            <h4 class="text-gray-500 mb-1 font-medium">Lagos</h4>
            <span class="text-graay-800 font-normal">
              ‍11b Fatai Idowu Arobieke, Lekki Ph 1,
            </span>
            <span class="text-graay-800 font-normal">
              Lagos, Nigeria.
            </span>
          </div>

          <div class="flex flex-col mb-6">
            <h4 class="text-gray-500 mb-1 font-medium">Maryland</h4>
            <span class="text-graay-800 font-normal">
              ‍11b Fatai Idowu Arobieke, Lekki Ph 1,
            </span>
            <span class="text-graay-800 font-normal">
              Lagos, Nigeria.
            </span>
          </div>
        </div>

        <div class="flex flex-1 flex-wrap justify-between">
          <div v-for="x in 3" :key="x" class="flex flex-col">
            <h4
              class="block text-mysqr-dark-light mb-4 font-medium capitalized"
            >
              Quick Links
            </h4>

            <div class="flex flex-col">
              <span class="text-font-normal py-1 mb-1 cursor-pointer">
                <a href="#contact">Link 1</a>
              </span>

              <span class="text-font-normal py-1 mb-1 cursor-pointer">
                <a href="#contact">Link 2</a>
              </span>

              <span class="text-font-normal py-1 mb-1 cursor-pointer">
                <a href="#contact">Link 3</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="py-2 px-10">
        <p class="mb-10 py-2 text-sm text-gray-500">&copy; 2022 CeedCap.</p>
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
