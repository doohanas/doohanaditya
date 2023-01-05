<template>
  <article
    class="mb-10 min-h-[300px] max-w-[545px] rounded-[36px] px-6 hover:scale-[1.05] hover:shadow-xl hover:duration-300 hover:ease-in"
    :class="{
      'bg-yellow-200 hover:shadow-yellow-200': card.id === 1,
      'bg-purple hover:shadow-blue-200': card.id === 2,
      'bg-green-300 hover:shadow-green-200': card.id === 3,
    }"
  >
    <h2
      class="pb-1 text-center font-sans text-[16px] font-extrabold leading-[30px] text-black"
    >
      {{ card.title }}
    </h2>
    <a class="h-full w-full" :href="card.link" target="_blank">
      <img
        class="rounded-[28px]"
        width="560"
        height="300"
        :src="card.image"
        :alt="card.textAlt"
      />
    </a>
  </article>
</template>

<script setup lang="ts">
import { defineComponent } from "vue"

defineComponent({
  name: "BaseCard",
})

interface Cards {
  id: number
  title: string
  link: string
  image: string
  textAlt: string
}
const card = defineProps<Cards>()
</script>
