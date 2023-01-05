<template>
  <section>
    <h1
      class="text-center font-sans text-[40px] font-bold leading-[30px] text-green-200"
    >
      What I Do
    </h1>
    <div class="py-10">
      <div
        v-for="service in work.workServices"
        :key="service.id"
        class="grid grid-cols-2 justify-center gap-5 pb-10"
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
        <h2 class="font-sans text-[16px] font-medium leading-[30px] text-black">
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
