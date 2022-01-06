<template>
  <!-- Downloads -->
  <section id="downloads" class="py-20 mt-20">
    <div clss="sm:w-3/4 lg:w-5/12 mx-auto px-2">
      <h1 class="text-3xl text-center text-gray-800">Downloads</h1>
      <p class="text-center text-gray-800 mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ipsum
        repellendus assumenda magni. Eveniet voluptatibus odio corrupti
        praesentium molestias voluptas ullam perferendis nobis odit!
      </p>
    </div>

    <!-- download containner -->
    <div
      class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 max-w-screen-lg"
    >
      <!-- card 1 -->
      <div class="flex flex-col rounded-md shadow-md lg:mb-16">
        <div class="p-6 flex flex-col items-center">
          <img src="" alt="dowload 1" />
          <h3 class="mt-5 mb-2 text-gray-800 text-lg">Chrome Ext.</h3>
          <p class="mb-2 text-gray-700">Lorem herieo dgdoie eiuueo</p>
        </div>
        <hr class="order- text-gray-300" />
        <button type="button" class="flex-1 btn btn-black-bg">
          Add Now
        </button>
      </div>

      <!-- card 2 -->
      <div class="flex flex-col rounded-md shadow-md lg:my-8">
        <div class="p-6 flex flex-col items-center">
          <img src="" alt="dowload 1" />
          <h3 class="mt-5 mb-2 text-gray-800 text-lg">Firefox Ext.</h3>
          <p class="mb-2 text-gray-700">Lorem herieo dgdoie eiuueo</p>
        </div>
        <hr class="order- text-gray-300" />
        <button type="button" class="flex-1 btn btn-black-bg">
          Add Firefox
        </button>
      </div>

      <!-- card 3 -->
      <div class="flex flex-col rounded-md shadow-md lg:mt-16">
        <div class="p-6 flex flex-col items-center">
          <img src="" alt="dowload 1" />
          <h3 class="mt-5 mb-2 text-gray-800 text-lg">Opera Ext.</h3>
          <p class="mb-2 text-gray-700">Lorem herieo dgdoie eiuueo</p>
        </div>
        <hr class="order- text-gray-300" />
        <button type="button" class="flex-1 btn btn-black-bg">
          Add Opera
        </button>
      </div>
    </div>
  </section>
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
