<template>
  <header
    class="flex items-center text-gray-800 bg-mysqr-light shadow-lg fixed top-0 inset-x-0 z-50 h-16"
  >
    <nav class="container flex justify-between items-center py-4">
      <div class="py-1">
        <img
          class="h-5 cursor-pointer"
          :src="require('@/assets/mysquareroof/squareroof2.png')"
          alt="log"
        />
      </div>

      <ul
        class="hidden sm:flex flex-1 flex-end lg justify-center items-center gap-12 text-sm"
      >
        <li class="cursor-pointer text-gray-800 hover:text-mysqr-main">
          <a href="#welcome">How it Works</a>
        </li>
        <li class="cursor-pointer text-gray-800 hover:text-mysqr-main">
          <a href="#features">Learn</a>
        </li>
        <li class="cursor-pointer text-gray-800 hover:text-mysqr-main">
          <a href="#downloads">About</a>
        </li>
        <li class="cursor-pointer text-gray-800 hover:text-mysqr-main">
          <a href="#downloads">Contact</a>
        </li>
      </ul>

      <div class="hidden md:flex flex- 1 text-sm items-center">
        <button
          class="mysqr-btn mysqr-btn-no-bg mx-2 hover:text-mysqr-main hover:shadow-xs"
        >
          Signup
        </button>

        <button
          class="mysqr-btn mysqr-btn-hover-black-bg border-2 border-mysqr-dark-dark hover:border-0 hover:shadow-md mx-2"
        >
          Login
        </button>
      </div>

      <!-- Mebu dropodown -->
      <div
        class="flex sm:hidden flex-1 justify-end items-center gap-12 text-gray-800 hover:mysqr-main"
      >
        <span class="fa fa-bars text-2xl"></span>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const test = ref('test')

    return {
      test,
    }
  },
}
</script>
