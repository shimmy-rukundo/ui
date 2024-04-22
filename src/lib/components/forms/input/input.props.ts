import type { SafelistColors } from '$lib/theme/safelist.js';
import type { HTMLInputAttributes } from 'svelte/elements';
import type { Size } from '$lib/types/index.js';

export type InputProps = {
	icon?: string | { leading?: string; trailing?: string; loading?: string };
	loading?: boolean;
	trailing?: boolean;
	leading?: boolean;
	delay?: number;
	padded?: boolean;
	size?: Size;
	color?: SafelistColors | 'white' | 'gray';
	variant?: 'outline' | 'none';
	type?: HTMLInputAttributes['type'];
	hide?: boolean;
	mask?: boolean;
	value?: HTMLInputAttributes['value']
};