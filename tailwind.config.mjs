import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: 'rgb(var(--c-background))',
				borderColor: {
					primary: 'rgb(var(--c-primary))'
				},
				text: 'rgb(var(--c-text))',
				'text-light': 'rgb(var(--c-text-light))',
				primary: 'rgb(var(--c-primary))',
				accent: 'rgb(var(--c-accent))',
				light: 'rgb(var(--c-light))'
			},
			boxShadow: {
				neon: '0 0 3px 2px rgb(19 170 101 / 0.3)'
			}
		},
	},
	plugins: [starlightPlugin()],
}
