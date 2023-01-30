export default defineNuxtConfig({
	ssr: false,
	// TODO: add unlighthouse
	// TODO: check vue-macros docs
	modules: [
		'@vueuse/nuxt',
		'@unocss/nuxt',
		'@pinia/nuxt',
		'@nuxtjs/color-mode',
		'@nuxtjs/google-fonts',
		// '@sidebase/nuxt-auth',
		// '@vue-macros/nuxt',
		'nuxt-headlessui',
	],
	experimental: {
		reactivityTransform: true,
		inlineSSRStyles: false,
	},
	srcDir: 'client',
	dir: {
		layouts: 'shared/ui/layouts',
		public: 'app/public',
		assets: 'app/assets',
	},
	// TODO: public vs assets
	css: [
		'@unocss/reset/tailwind.css',
		'app/public/styles/abstract/palette.scss',
		'app/public/styles/base/main.scss',
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
});
