<template>
    <!-- Features Page -->
    <section id="features" class="bg-gray-100 py-20 mt-20 lg:mt-60">
      <div clss="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-gray-800">Features</h1>
        <p class="text-center text-gray-800 mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ipsum
          repellendus assumenda magni. Eveniet voluptatibus odio corrupti
          praesentium molestias voluptas ullam perferendis nobis odit!
        </p>
      </div>

      <!-- Feature 1 -->
      <div class="relative mt-20 lg:mt-24">
        <div
          class="container flex flex-col lg:flex-row justify-center items-center gap-x-24"
        >
          <!-- Image -->
          <div class="flex justify-center flex-1 z-10 mb-10 lg:mb-0">
            <img
              src=""
              alt=""
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            />
          </div>

          <!-- Content -->
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h2 class="text-black text-3xl mb-3">
              Feature One
            </h2>

            <p
              class="text-gray-700 text-center sm:h-3/4 lg:w-full lg:text-left mb-3"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              eligendi eaque obcaecati dolorem reiciendis ipsam alias rem
              ratione a enim impedit offici
            </p>

            <div class="flex flex-wrap justify-center gap-6">
              <button type="button" class="btn btn-black-bg">
                Download Now
              </button>
            </div>
          </div>
        </div>

        <!-- Rounded rectangle  -->
        <div
          class="hidden overflow-hidden bg-black rounded-l-full h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-26 lg: absolute"
        ></div>
      </div>

      <!-- Feature 2 -->
      <div class="relative mt-20 lg:mt-24">
        <div
          class="container flex flex-col lg:flex-row-reverse justify-center items-center gap-x-24"
        >
          <!-- Image -->
          <div class="flex justify-center flex-1 z-10 mb-10 lg:mb-0">
            <img
              src=""
              alt=""
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            />
          </div>

          <!-- Content -->
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h2 class="text-black text-3xl mb-3">
              Feature Two
            </h2>

            <p
              class="text-gray-700 text-center sm:h-3/4 lg:w-full lg:text-left mb-3"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              eligendi eaque obcaecati dolorem reiciendis ipsam alias rem
              ratione a enim impedit
            </p>

            <div class="flex flex-wrap justify-center gap-6">
              <button type="button" class="btn btn-black-bg">
                Download Now 2
              </button>
            </div>
          </div>
        </div>

        <!-- Rounded rectangle  -->
        <div
          class="hidden overflow-hidden bg-black rounded-l-full h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-26 lg: absolute"
        ></div>
      </div>

      <!-- Feature 3 -->
      <div class="relative mt-20 lg:mt-24">
        <div
          class="container flex flex-col lg:flex-row justify-center items-center gap-x-24"
        >
          <!-- Image -->
          <div class="flex justify-center flex-1 z-10 mb-10 lg:mb-0">
            <img
              src=""
              alt=""
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            />
          </div>

          <!-- Content -->
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h2 class="text-black text-3xl mb-3">
              Feature Three
            </h2>

            <p
              class="text-gray-700 text-center sm:h-3/4 lg:w-full lg:text-left mb-3"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              eligendi eaque obcaecati dolorem reiciendis ipsam alias rem
              ratione a enim impedit offici
            </p>

            <div class="flex flex-wrap justify-center gap-6">
              <button type="button" class="btn btn-black-bg">
                Download Now
              </button>
            </div>
          </div>
        </div>

        <!-- Rounded rectangle  -->
        <div
          class="hidden overflow-hidden bg-black rounded-l-full h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-26 lg: absolute"
        ></div>
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
