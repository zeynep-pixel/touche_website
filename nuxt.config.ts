export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined',
        }
      ],
    },
  },

  css: [
    'swiper/css'  // Eğer başka bir carousel veya swiper kullanıyorsanız burada belirtilebilir
  ],

  build: {
    transpile: ['vue3-carousel'],  // vue3-carousel için transpile işlemi gerekebilir
  }
})


          