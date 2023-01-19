<template>
  <section
    id="project"
    class="grid min-h-[500px] grid-cols-1 gap-10 md:gap-16 lg:gap-[50px]"
  >
    <h1
      class="text-center font-sans text-[40px] font-bold leading-[56px] text-green-200"
    >
      Project <span class="block">My Recent Works</span>
    </h1>
    <div
      class="mx-auto lg:grid lg:grid-cols-2 lg:justify-center lg:gap-8 lg:px-14"
    >
      <BaseCard
        v-for="project in projects.projectList"
        :id="project.id"
        :key="project.id"
        :title="project.title"
        :link="project.link"
        :image="project.image"
        :text-alt="project.altText"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { PROJECT_LIST } from "@/utils/index"
defineComponent({
  name: "Project",
})
const projects = reactive({ projectList: [...PROJECT_LIST] })
</script>
