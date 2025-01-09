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
		},
	},
	plugins: [],
};
