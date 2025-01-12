/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				...colors,
				background: "var(--background)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
				text: "var(--text)",
				text_reverse: "var(--text-reverse)",
			},
			keyframes: {
				appear: {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
				fadeIn: {
					"0%": {
						opacity: "0",
						transform: "translateY(20px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				}
			},
			animation: {
				appear: "appear 0.5s ease-in-out",
			}
		},
	},
	plugins: [],
};
