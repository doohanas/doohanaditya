<template>
  <section
    id="äbout"
    class="flex flex-col items-center justify-center gap-10 lg:gap-[50px]"
  >
    <h1
      class="text-center font-sans text-[40px] font-bold leading-[30px] text-green-200"
    >
      About Me
    </h1>
    <div
      class="flex w-full flex-col-reverse items-center justify-center gap-10 lg:flex-row-reverse lg:items-center lg:gap-[50px]"
    >
      <div class="lg:p-10">
        <p
          class="pb-5 text-justify font-sans text-[18px] font-normal leading-[30px]"
        >
          Hi there! I am
          <span class="font-semibold text-green-200">Doohan Aditya Saputro</span
          >, currently in a career-shifting phase as a
          <span class="font-semibold text-green-200">Frontend Engineer</span>.
          Now, I work as a Frontend Engineer in Jabar Digital Service, I am
          developing one of the West Java Government Products. I start learning
          about website development in 2021. I learn about website technology by
          myself and I participate in Generasi Gigih organized by YABB and Gojek
          for 8 months. I continue to learn, improve, and develop myself in
          software engineering and website development.
        </p>
        <p
          class="text-justify font-sans text-[18px] font-normal leading-[30px]"
        >
          Here are a few technologies I’ve been working with recently:
        </p>
        <div class="flex w-full flex-row flex-wrap gap-4">
          <img
            v-for="item in techStack.techStacks"
            :key="item.id"
            :src="item.image"
            :alt="item.altText"
            width="100"
            height="100"
          />
        </div>
      </div>
      <div class="relative mt-10 max-w-[420px] lg:w-[576px]">
        <hr
          class="absolue h-[450px] min-w-[280px] rounded-2xl border-4 border-green-200"
        />
        <img
          src="~/assets/images/profile-blur.png"
          alt="pria memakai baju biru menyilangkan tangan"
          width="576"
          height="1024"
          class="absolute top-[-30px] right-[-20px] h-[450px] w-[280px] rounded-2xl sm:right-[-50px] lg:w-full"
        />
      </div>
    </div>
    <div></div>
  </section>
</template>

<script setup lang="ts">
import { TECH_STACKS } from "~~/utils"
defineComponent({
  name: "About",
})

const techStack = reactive({ techStacks: [...TECH_STACKS] })
</script>
