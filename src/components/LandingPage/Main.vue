<template>
  <div class="">
    <header>
      <nav class="container flex items-ceter py-4 mt-4 sm:mt-8">
        <div class="py-1"><img src="" alt="log" /></div>

        <ul
          class="hidden sm:flex flex-1 justify-end items-center gap-12 text-test-color text-xs"
        >
          <li class="cursor-pointer">Home</li>
          <li class="cursor-pointer">Features</li>
          <li class="cursor-pointer">Contact</li>
          <li class="cursor-pointer">FAQs</li>

          <button class="btn btn-white-bg">Login</button>
          <!-- <button class="btn btn-black-bg">Test 2</button> -->
        </ul>

        <!-- Mebu dropodown -->
        <div
          class="flex sm:hidden flex-1 justify-end items-center gap-12 text-test-color"
        ></div>
      </nav>
    </header>

    <!-- Welcome Page -->
    <section class="relative">
      <div
        class="container flex flex-col-reverse lg:flex-row gap-12 mt-14 lg:mt-20"
      >
        <!-- Contect -->
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h2
            class="text-black text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6"
          >
            Welcome to the Page
          </h2>

          <p class="text-gray-700 text-lg text-center lg:text-left mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            eligendi eaque obcaecati dolorem reiciendis ipsam alias rem ratione
            a enim impedit officiis voluptates quod dolorum nisi, maxime
            pariatur eum. Repellendus!
          </p>

          <div class="flex flex-wrap justify-center gap-6">
            <button type="button" class="btn btn-white-bg">
              Get Started
            </button>
            <button type="button" class="btn btn-black-bg">
              Download Now
            </button>
          </div>
        </div>

        <!-- Image -->
        <div class="flex justify-center flex-1 mb-10 mb:mb-16 lg:mb-0">
          <img
            src=""
            alt=""
            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
          />
        </div>
      </div>

      <!-- Rounded rectangle  -->
      <div
        class="hidden overflow-hidden bg-black rounded-l-full h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-26 lg: absolute"
      ></div>
    </section>

    <!-- Features Page -->
    <section class="bg-gray-100 py-20 mt-20 lg:mt-60">
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
          class="container flex flex-col lg:flex-row justify-center items-center gap-x-24 mt-14"
        >
          <!-- Image -->
          <div class="flex justify-center flex-1 mb-10 mb:mb-16 lg:mb-0">
            <img
              src=""
              alt=""
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            />
          </div>

          <!-- Content -->
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h2 class="text-black text-3xl text-center lg:text-start mb-6">
              Feature One
            </h2>

            <p class="text-gray-700 text-lg text-center lg:text-left mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              eligendi eaque obcaecati dolorem reiciendis ipsam alias rem
              ratione a enim impedit officii
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
          class="container flex flex-col-reverse lg:flex-row justify-center items-center gap-x-24 mt-14"
        >
          <!-- Content -->
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h2 class="text-black text-3xl text-center lg:text-start mb-6">
              Feature Two
            </h2>

            <p class="text-gray-700 text-lg text-center lg:text-left mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              eligendi eaque obcaecati dolorem reiciendis ipsam alias rem
              ratione a enim impedit officii
            </p>

            <div class="flex flex-wrap justify-center gap-6">
              <button type="button" class="btn btn-black-bg">
                Download Now
              </button>
            </div>
          </div>

          <!-- Image -->
          <div class="flex justify-center flex-1 mb-10 mb:mb-16 lg:mb-0">
            <img
              src=""
              alt=""
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            />
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
          class="container flex flex-col lg:flex-row justify-center items-center gap-x-24 mt-14"
        >
          <!-- Image -->
          <div class="flex justify-center flex-1 mb-10 mb:mb-16 lg:mb-0">
            <img
              src=""
              alt=""
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            />
          </div>

          <!-- Content -->
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h2 class="text-black text-3xl text-center lg:text-start mb-6">
              Feature Three
            </h2>

            <p class="text-gray-700 text-lg text-center lg:text-left mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              eligendi eaque obcaecati dolorem reiciendis ipsam alias rem
              ratione a enim impedit officii
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
  </div>
</template>
