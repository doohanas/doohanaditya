<template>
  <button
    class=" bg-green-200 rounded-full text-[18px] px-10 py-3 text-black md:btn-md"
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