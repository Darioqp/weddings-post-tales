/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
				'720': '45rem',
				'544': '34rem',
				'512': '32rem',
				'480': '30rem',
				'448': '28rem',
				'416': '26rem',
			  }
		},
		fontFamily: {
			'sans': ['Roboto', 'sans-serif'],
			'montserrat': ['Montserrat', 'sans-serif'],
			'yesteryear': ['Yesteryear', 'sans-serif'],
			'dancing': ['Dancing Script', 'Roboto', 'sans-serif'],
	},
	plugins: [],
}}
