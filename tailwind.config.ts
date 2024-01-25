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
				'global-color-one':
					'rgb(var(--global-color-one) / <alpha-value>)',
				'global-color-two':
					'rgb(var(--global-color-two) / <alpha-value>)',
				'global-color-three':
					'rgb(var(--global-color-three) / <alpha-value>)',
				'global-color-four':
					'rgb(var(--global-color-four) / <alpha-value>)',
			},
		},
	},
	plugins: [],
}
export default config
