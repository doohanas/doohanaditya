// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: "Doohan Aditya Saputro | Frontend Engineer",
      meta: [
        {
          name: "description",
          content: "Frontend Engineer based in Indonesia.",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Doohan Aditya Saputro | Frontend Engineer",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "Frontend Engineer based in Indonesia.",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://doohanadityas.netlify.app/",
        },
        {
          hid: "og:site_name",
          property: "og:site_name ",
          content: "doohanas",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/images/profile-picture.png",
        },
        {
          hid: "og:image:type",
          property: "og:image:type",
          content: "image/png",
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "400",
        },
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: "300",
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: "Pria kemeja biru menyilangkan tangan",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Doohan Aditya Saputro | Frontend Engineer",
        },
        {
          name: "twitter:description",
          content: "Frontend Engineer based in Indonesia.",
        },
        {
          name: "twitter:image",
          content: "/iamges/profile-picture.png",
        },
        {
          name: "twitter:url",
          content: "https://doohanadityas.netlify.app/",
        },
        {
          name: "twitter:creator",
          content: "@doohanas",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  runtimeConfig: {
    public: {
      waNumber: process.env.WHATSAPP_NUMBER,
      waText: process.env.WHATSAPP_TEXT,
    },
  },
})
