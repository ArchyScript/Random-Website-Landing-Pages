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
      <div
        v-for="(faq, index) in faqs"
        :key="`${faq}_${index}`"
        class="border-b"
      >
        <div
          class="flex items-center py-4 cursor-pointer"
          @click="toggleAccordion(faq.id)"
        >
          <span class="flex-1">
            {{ faq.question }}
          </span>
          <span
            :class="`${
              faq.id == questionId ? 'fa fa-chevron-up' : 'fa fa-chevron-down'
            } text-green-700`"
          ></span>
        </div>

        <div v-if="faq.id == questionId" class="w-full py-2 px-4 font-normal">
          <p class="">
            {{ faq.answer }}
          </p>
        </div>
      </div>

      <button
        type="button"
        @click="checkMoreFAQs('/squareroof')"
        class="flex self-center mt-12 btn btn-black-bg"
      >
        Check More FAQs
      </button>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const testing = ref(false)
    const questionId = ref('')
    const faqs = ref([
      {
        id: '1',
        question: 'Why Architecture Hub 1?',
        answer:
          'It is the best platfoorm to connect all architecture studebt toigether and help them grow by chllengig themselve to pull off extreme design... Designs are open for review by any member on the platform',
      },
      {
        id: '2',
        question: 'Why Architecture Hub 2?',
        answer:
          'It is the best dmsdc., platfoorm to connect all architecture studebt toigether and help them grow by chllengig themselve to pull off extreme design... Designs are open for review by any member on the platform',
      },
      {
        id: '3',
        question: 'Why Architecture Hub 3 ?',
        answer:
          'It is the all architecture studebt toigether and help them grow by chllengig themselve to pull off extreme design... Designs are open for review by any member on the platform',
      },
    ])

    // using reactive
    // const game = reactive({
    //   dice: 0,
    //   rolls: [],
    // })

    const toggleAccordion = (id) => {
      if (questionId.value == id) return (questionId.value = '')
      if (questionId.value != id) return (questionId.value = id)
    }

    const checkMoreFAQs = (route) => {
      this.$router.push(route)
    }
    return {
      faqs,
      testing,
      questionId,
      toggleAccordion,
      checkMoreFAQs,
    }
  },
}
</script>
