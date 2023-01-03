<template>
  <button
    class="relative bg-green-200 cursor-pointer rounded-full text-[18px] px-10 py-3 text-black shadow-md shadow-green-600 border-0 active:translate-y-[4px] active:shadow-none"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: "BaseButton",
});
</script>