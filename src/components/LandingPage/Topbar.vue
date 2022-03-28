<template>
  <header
    class="flex items-center text-white bg-gray-800 shadow-lg fixed top-0 inset-x-0 z-50 h-16"
  >
    <nav class="container flex items-ceter py-4">
      <div class="py-1"><img src="" alt="log" /></div>

      <ul
        class="hidden sm:flex flex-1 justify-end items-center gap-12 text-test-color text-xs"
      >
        <li class="cursor-pointer"><a href="#welcome">Home</a></li>
        <li class="cursor-pointer"><a href="#features">Features</a></li>
        <li class="cursor-pointer"><a href="#downloads">Downloads</a></li>
        <li class="cursor-pointer"><a href="#contact">Contact</a></li>
        <li class="cursor-pointer"><a href="#faqs">FAQs</a></li>

        <button class="btn btn-white-bg">Login</button>
        <!-- <button class="btn btn-black-bg">Test 2</button> -->
      </ul>

      <!-- Mebu dropodown -->
      <div
        class="flex sm:hidden flex-1 justify-end items-center gap-12 text-test-color"
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
