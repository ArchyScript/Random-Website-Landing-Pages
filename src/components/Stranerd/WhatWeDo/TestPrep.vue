<template>
  <section id="test-prep" class="relative mt-20">
    <div class="container grid grid-cols-2 gap-6 lg:gap-12 mx-auto">
      <div class="col-span-2 md:col-span-1 flex flex-1 relative">
        <img
          class="flex justify-center items-center mx-auto p-2"
          :src="require('@/assets/stranerd/test-prep.png')"
          alt=""
        />
      </div>

      <div
        class="col-span-2 md:col-span-1 p-16 flex flex-col items-center justify-center mt-6 lg:my-16 bg-green-500 rounded-3xl"
      >
        <div class="mx-auto mb-6 lg:mb-10">
          <img
            :src="require('@/assets/stranerd/test-prep-mini.svg')"
            alt=""
            class="lg:h-12 cursor-pointer"
          />
        </div>

        <h1
          class="text-white mx-auto text-2xl md:text-3xl ld:text-4xl font-semibold text-center pr-4 mb-4 lg:mb-8"
        >
          Test Prep
        </h1>

        <p class="text-white text-center text-xl font-light mb-3 lg:mb-6">
          Practice tests and study solutions of all available questions on
          gateway exams (WAEC, JAMB, JUPEB e.t.c.).
        </p>
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
