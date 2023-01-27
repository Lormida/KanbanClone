import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';

export default defineConfig({
	shortcuts: [
		[
			'btn',
			'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
		],
		[
			'icon-btn',
			'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
		],
		['center', 'flex justify-center items-center'],
	],
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			scale: 1.2,
		}),
		presetTypography(),
		presetWebFonts({
			fonts: {
				sans: 'DM Sans',
				serif: 'DM Serif Display',
				mono: 'DM Mono',
			},
		}),
	],
	theme: {
		breakpoints: {
			xsm: '320px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '1920px',
			'4xl': '2240px',
		},
		colors: {
			neutral: 'var(--neutral)',
			mainAccent: 'var(--mainAccent)',
			main: 'var(--main)',
			mainWeakAnti: 'var(--mainWeakAnti)',
			antiMain: 'var(--antiMain)',
			antiMainAccent: 'var(--antiMainAccent)',
			btnMain: 'var(--btnMain)',
			btnMainLight: 'var(--btnMainLight)',
			badgeMain: 'var(--badgeMain)',
			badgeMainLight: 'var(--badgeMainLight)',
			btnSec: 'var(--btnSec)',
			btnSecLight: 'var(--btnSecLight)',
			aside: 'var(--aside)',
		},
	},
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
