/** @type {import('tailwindcss').Config} */
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';
import colors from 'tailwindcss/colors';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			primary: colors.indigo,
			success: colors.green,
			warning: colors.yellow,
			danger: colors.red
		}
	},
	plugins: [
		iconsPlugin({
			collections: getIconCollections(['fluent'])
		})
	],
	safelist: [
		{
			pattern: /bg|-(primary|success|warning)-(500|600|700)/,
			variants: ['hover', 'focus-visible']
		}
	]
};
