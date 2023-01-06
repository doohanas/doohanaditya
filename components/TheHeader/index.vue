<template>
  <header>
    <TheContainer class="flex items-center justify-between">
      <NuxtLink to="/">
        <img
          src="~/assets/images/logo.svg"
          alt="rs logo"
          width="40px"
          height="40px"
        />
      </NuxtLink>
      <nav class="">
        <ul class="flex flex-row items-center gap-[30px]">
          <li
            v-for="link in navbarLinks"
            :key="link.id"
            class="hidden lg:flex lg:items-center lg:gap-[30px]"
          >
            <NuxtLink :to="link.link">
              <p class="text-black">{{ link.title }}</p>
            </NuxtLink>
          </li>
          <a
            class="block cursor-pointer rounded-full border-0 bg-green-200 px-10 py-3 text-[18px] text-black shadow-md shadow-green-600 active:translate-y-[4px] active:shadow-none"
            href="/cv-doohan_aditya_saputro.pdf"
            download="doohan"
            >Resume</a
          >
        </ul>
      </nav>
    </TheContainer>
  </header>
</template>

<script setup lang="ts">
import { defineComponent } from "vue"

defineComponent({
  name: "TheHeader",
})

const navbarLinks = navLinks()
</script>
