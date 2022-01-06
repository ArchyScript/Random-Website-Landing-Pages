<template>
  <header
    class="flex items-center text-gray-800 bg-mysqr-light shadow-lg fixed top-0 inset-x-0 z-50 h-16"
  >
    <nav class="container flex justify-between items-center py-4">
      <div class="py-1"><img src="" alt="log" /></div>

      <ul
        class="hidden sm:flex flex-1 justify-center items-center gap-12 text-sm"
      >
        <li class="cursor-pointer text-gray-800 hover:text-mysqr-main">
          <a href="#welcome">Home</a>
        </li>
        <li class="cursor-pointer text-gray-800 hover:text-mysqr-main">
          <a href="#features">Features</a>
        </li>
        <li class="cursor-pointer text-gray-800 hover:text-mysqr-main">
          <a href="#downloads">Downloads</a>
        </li>

        <!-- <button class="btn btn-black-bg">Test 2</button> -->
      </ul>

      <div class="hidden md:flex flex- 1 items-center">
        <button class="mysqr-btn mysqr-btn-no-bg mx-2">Signup</button>
        <button class="mysqr-btn mysqr-btn-black-bg mx-2">Login</button>
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
