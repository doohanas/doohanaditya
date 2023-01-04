<template>
  <section class="min-h-[529px] w-full md:min-h-[256px]">
    <TheContainer class="flex flex-col gap-6 md:flex-row-reverse">
      <div class="w-full items-center">
        <img
          src="~/assets/images/profile-picture.png"
          alt="pria berbaju biru menyilangkan tangan"
          width="490"
          height="509"
          class="border-1 mx-auto w-[250px] rounded-full bg-pink-50 lg:h-fit lg:w-[490px]"
        />
      </div>
      <div
        class="flex flex-col justify-center gap-5 lg:my-10 lg:h-full lg:w-full lg:gap-8"
      >
        <h1
          class="text-left font-sans text-2xl font-bold md:text-4xl md:leading-tight lg:text-[60px]"
        >
          <span class="text-xl text-green-500 md:text-2xl">Hello, I'm</span
          ><br />
          <b>Doohan Aditya Saputro</b>
        </h1>
        <p class="font-sans text-sm sm:w-[450px] md:text-base lg:w-[544px]">
          I'm a Frontend Engineer based in Indonesia. Now, I work as a Frontend
          Engineer in Jabar Digital Service, I am developing the West Java
          Government Products.
        </p>
        <BaseButton class="w-[170px]">Send Email</BaseButton>
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
defineComponent({
  name: "TheHeroBanner",
})
</script>
