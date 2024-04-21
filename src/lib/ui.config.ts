import type { Size } from '$lib/types/index.js';
import { sharedUI } from './theme/shared.js';
import type { Colors } from './types/index.js';
export type UI = {
	size: Size;
	colors?: {
		primary?: Colors['fore'];
		gray?: Colors['back'];
	};
	icon?: {
		load?: string;
	};
	layout?: {
		constrained?: string;
	};
};

export const ui = {
	size: 'sm' as Size, // TypeScript will ensure this is a valid Size,
	colors: {
		primary: 'indigo',
		gray: 'cool'
	},
	shared: sharedUI,
	header: {
		height: '3.5rem'
	},
	icon: {
		loading: 'i-fluent-arrow-sync-24-regular',
		dark: 'i-heroicons-moon-20-solid',
		light: 'i-heroicons-sun-20-solid',
		system: 'i-heroicons-computer-desktop-20-solid',
		search: 'i-heroicons-magnifying-glass-20-solid',
		external: 'i-heroicons-arrow-up-right-20-solid',
		chevron: 'i-fluent-chevron-down-20-regular',
		hash: 'i-heroicons-hashtag-20-solid',
		menu: 'i-fluent-navigation-20-regular',
		open: 'i-fluent-navigation-20-regular',
		close: 'i-fluent-dismiss-20-regular',
		check: 'i-heroicons-check-circle-20-solid'
	},
	layout: {
		constrained: 'max-w-screen-2xl'
	}
};
