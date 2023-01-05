<template>
  <section class="flex min-h-[350px] flex-col gap-10">
    <h1
      class="text-center font-sans text-[40px] font-bold leading-[30px] text-green-200"
    >
      What I Do
    </h1>
    <div
      class="grid w-full grid-cols-1 gap-10 lg:mx-auto lg:w-max lg:grid-cols-2"
    >
      <div
        v-for="service in work.workServices"
        :key="service.id"
        class="grid grid-cols-[120px,minmax(0px,300px)] justify-center gap-5 md:gap-10 lg:w-fit lg:grid-cols-[120px,1fr]"
      >
        <div
          class="h-[120px] w-[120px] rounded-xl shadow-lg shadow-black"
          :class="{
            'bg-green-100': service.id === 1,
            'bg-purple': service.id === 2,
          }"
        >
          <img
            :src="service.image"
            alt="MAna gambarnya?"
            width="70"
            height="70"
            class="relative mx-auto h-full"
          />
        </div>
        <h2
          class="pt-4 font-sans text-[16px] font-medium leading-[30px] text-black md:text-2xl md:leading-[46px]"
        >
          <span> {{ service.id }} </span><br />
          {{ service.title }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, reactive } from "vue"
import { WORK_SERVICES } from "@@/utils/index"

defineComponent({
  name: "Work",
})

const work = reactive({ workServices: [...WORK_SERVICES] })
</script>
