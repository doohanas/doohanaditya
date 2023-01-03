<template>
  <button
    class="relative cursor-pointer rounded-full border-0 bg-green-200 px-10 py-3 text-[18px] text-black shadow-md shadow-green-600 active:translate-y-[4px] active:shadow-none"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineComponent } from "vue"

defineComponent({
  name: "BaseButton",
})
</script>
