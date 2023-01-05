<template>
  <footer
    class="flex min-h-[300px] w-full flex-col items-center justify-center gap-5 bg-green-100"
  >
    <h1
      class="h-fit w-fit rounded-2xl bg-yellow-200 px-4 text-center font-sans text-[22px] font-bold leading-[18px] text-green-200 md:text-[40px] md:leading-[56px]"
    >
      Follow me on
      <img
        class="inline cursor-text"
        src="~/assets/images/hand.svg"
        alt=""
        width="40"
        height="40"
      />
    </h1>
    <div class="grid w-fit grid-cols-4 gap-5">
      <a
        v-for="item in socialMedia.data"
        :key="item.id"
        :href="item.link"
        :target="item.target"
      >
        <img :src="item.image" :alt="item.socialMedia" width="60" height="60" />
      </a>
    </div>
    <p
      class="text-center font-sans text-[16px] font-normal leading-[30px] md:text-[18px]"
    >
      Developed by Doohan Aditya Saputro {{ getYear }}
    </p>
  </footer>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { SOCIAL_MEDIAS } from "@/utils/index"
defineComponent({
  name: "Project",
})

const socialMedia = reactive({ data: [...SOCIAL_MEDIAS] })
const getYear = new Date().getFullYear()
</script>
