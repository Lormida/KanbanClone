export default defineNuxtConfig({
  // TODO: add unlighthouse
  // TODO: check vue-macros docs
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    // '@sidebase/nuxt-auth',
    'nuxt-headlessui',
    '@vue-macros/nuxt',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  // TODO: public vs assets
  css: [
    '@unocss/reset/tailwind.css', '@/app/public/styles/abstract/palette.scss', '@/app/public/styles/base/main.scss',
  ],
  colorMode: {
    classSuffix: '',
  },
  googleFonts: {
    families: {
      Inter: {
        wght: [100, 400, 700, 900],
      },
      Lato: [100, 300],
    },
  },
  srcDir: 'src',
  dir: {
    layouts: 'shared/ui/layouts',
    public: 'shared/app/public',
  },
})
