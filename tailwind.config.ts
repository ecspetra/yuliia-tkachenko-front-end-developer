import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-urbanist)'],
			},
			colors: {
				'background-color':
					'rgb(var(--background-color) / <alpha-value>)',
				'global-color-one-scheme-1':
					'rgb(var(--global-color-one-scheme-1) / <alpha-value>)',
				'global-color-two-scheme-1':
					'rgb(var(--global-color-two-scheme-1) / <alpha-value>)',
				'global-color-three-scheme-1':
					'rgb(var(--global-color-three-scheme-1) / <alpha-value>)',
				'global-color-four-scheme-1':
					'rgb(var(--global-color-four-scheme-1) / <alpha-value>)',
				'global-color-one-scheme-2':
					'rgb(var(--global-color-one-scheme-2) / <alpha-value>)',
				'global-color-two-scheme-2':
					'rgb(var(--global-color-two-scheme-2) / <alpha-value>)',
				'global-color-three-scheme-2':
					'rgb(var(--global-color-three-scheme-2) / <alpha-value>)',
				'global-color-four-scheme-2':
					'rgb(var(--global-color-four-scheme-2) / <alpha-value>)',
				'global-color-one-scheme-3':
					'rgb(var(--global-color-one-scheme-3) / <alpha-value>)',
				'global-color-two-scheme-3':
					'rgb(var(--global-color-two-scheme-3) / <alpha-value>)',
				'global-color-three-scheme-3':
					'rgb(var(--global-color-three-scheme-3) / <alpha-value>)',
				'global-color-four-scheme-3':
					'rgb(var(--global-color-four-scheme-3) / <alpha-value>)',
			},
		},
	},
	plugins: [],
}
export default config
