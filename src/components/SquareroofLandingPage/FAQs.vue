<template>
  <!-- FAQs -->
  <section id="faqs" class="bg-gray-100 py-20 mt-20 lg:mt-60">
    <div clss="sm:w-3/4 lg:w-5/12 mx-auto px-2">
      <h1 class="text-3xl text-center text-gray-800">
        Frequently Asked Questions
      </h1>
      <p class="text-center text-gray-800 mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ipsum
        repellendus assumenda magni. Eveniet voluptatibus odio corrupti
        praesentium molestias voluptas ullam perferendis nobis odit!
      </p>
    </div>

    <!-- FAQs Items -->
    <div class="sm:w-3/4 lg:w-5/12 flex flex-col mx-auto">
      <div class="flex items-center border-b py-4">
        <span class="flex-1">Why ArchitectureHub?</span>
        <span class="fa fa-chevron-down text-green-700"></span>
      </div>
      <div class="flex items-center border-b py-4">
        <span class="flex-1">Why ArchitectureHub?</span>
        <span class="fa fa-chevron-down text-green-700"></span>
      </div>
      <div class="flex items-center border-b py-4">
        <span class="flex-1">Why ArchitectureHub?</span>
        <span class="fa fa-chevron-down text-green-700"></span>
      </div>
      <div class="flex items-center border-b py-4">
        <span class="flex-1">Why ArchitectureHub?</span>
        <span class="fa fa-chevron-down text-green-700"></span>
      </div>
      <div class="flex items-center border-b py-4">
        <span class="flex-1">Why ArchitectureHub?</span>
        <span class="fa fa-chevron-down text-green-700"></span>
      </div>
      <div class="flex items-center border-b py-4">
        <span class="flex-1">Why ArchitectureHub?</span>
        <span class="fa fa-chevron-down text-green-700"></span>
      </div>
      <div class="flex items-center border-b py-4">
        <span class="flex-1">Why ArchitectureHub?</span>
        <span class="fa fa-chevron-down text-green-700"></span>
      </div>

      <button type="button" class="flex self-center mt-12 btn btn-black-bg">
        Check More FAQs
      </button>
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
