<template>
  <div class="">
    <header>
      <nav class="container flex items-ceter py-4 mt-4 sm:mt-8">
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

    <!-- Welcome Page -->
    <section id="welcome" class="relative">
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

  <section>
<Topbar/>
<Welcome/>
<Features/>
<Downloads/>
<FAQs/>
<ContactUs/>
<Footer/>
</section>

    <!-- Contact Us -->
    <section id="contact" class="bg-green-100 text-green-800 py-20">
      <div class="container">
        <div class="sm:3/4 lg:w-2/4 mx-auto">
          <p class="font-light uppercase text-center mb-8">
            50,000 + active users
          </p>

          <h1 class="text-center text-3xl">
            Subscribe to our weekly new letter
          </h1>

          <div
            class="flex flex-col items-center justify-center sm:flex-row gap-6 mt-8"
          >
            <input
              type="text"
              placeholder="Enter your E-mail Address"
              class="focus:outline-none flex-1 px-2 py-3 rounded-md text-red-800"
            />

            <button type="button" class="flex self-center btn btn-black-bg">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </section>

    <footer id="footer" class="bg-gray-800 text-gray-200 py-5">
      <div class="container flex flex-col md:flex-row items-center">
        <div
          class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12"
        >
          <img src="" alt="logo" />
          <ul class="flex gap-12 text-xs uppercase">
            <li class="cursor-pointer"><a href="#">Features</a></li>
            <li class="cursor-pointer"><a href="#">Pricing</a></li>
            <li class="cursor-pointer"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="flex gap-10 mt-12 md:mt-0">
          <span class="cursor-pointer fa fa-twitter"></span>
          <span class="cursor-pointer fa fa-facebook-square"></span>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
import Topbar from "./Topbar.vue"
import Welcome from "./Welcome.vue"
import Features from "./Features.vue"
import Downloads from "./Downloads.vue"
import FAQs from "./FAQs.vue"
import ContactUs from "./ContactUs.vue"
import Footer from "./Footer.vue"


export default {
  name: "LandingPage",
  data: () => ({

  }),
  components: {
Topbar,
Welcome,
Features,
Downloads,
FAQs,
ContactUs,
Footer
  }
}
</script>