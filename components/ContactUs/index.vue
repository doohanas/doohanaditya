<template>
  <section id="contact-us" class="min-h-[250px] w-full">
    <article
      class="mx-auto grid max-w-[1024px] grid-cols-1 justify-items-center gap-4 rounded-3xl bg-blue-200 p-4 shadow-md shadow-blue-100"
    >
      <h1
        class="text-center font-sans text-[28px] font-bold leading-[56px] text-green-200 sm:text-[40px]"
      >
        Have any project in mind?
      </h1>
      <p class="font-sans text-sm sm:w-[450px]">
        Let’s work together and make everything super cute and super useful.
      </p>
      <a aria-label="Chat on WhatsApp" :href="linkWa">
        <picture>
          <source
            media="(min-width:768px)"
            srcset="/images/waButtonMedium.svg"
          />
          <source
            media="(min-width:320px)"
            srcset="/images/waButtonSmall.svg"
          />
          <img
            aria-label="Chat on WhatsApp"
            src="/images/waButtonLarge.svg"
            alt="chat on whatsapp"
            width="376"
            height="284"
            loading="eager"
          />
        </picture>
      </a>
      <picture class="hidden">
        <source type="image/webp" srcset="~/assets/images/contact-me.webp" />
        <img
          class="rounded-3xl"
          src="~/assets/images/contact-me.jpg"
          alt="pria mengangkat telepon"
          width="800"
          height="800"
        />
      </picture>
    </article>
  </section>
</template>

<script setup lang="ts">
defineComponent({
  name: "ContactUs",
})
const config = useRuntimeConfig()
const linkWa = `https://wa.me/${config.waNumber}?text=${config.waText}`
</script>
