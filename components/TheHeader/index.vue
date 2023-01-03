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
      <nav class="hidden lg:block">
         <ul class="flex items-center gap-[30px]">
          <li
            v-for="link in navbarLinks"
            :key="link.id"
          >
            <NuxtLink :to="link.link">
              <p class="text-black">{{ link.title }}</p>
            </NuxtLink>
          </li>
        </ul>
      </nav>
       <section class="block lg:hidden">
         <BaseButton> Menu </BaseButton>
      </section>
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
