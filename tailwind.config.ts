import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from './src/lib/constants/colors.json'
import screens from './src/lib/constants/screens.json'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'selector',
	theme: {
		extend: {
			screens,
			fontFamily: {
				primary: 'Space Grotesk',
				secondary: 'Sora',
				sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
			},
			colors,
		},
	},
	plugins: [],
} satisfies Config
