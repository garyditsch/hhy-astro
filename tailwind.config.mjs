/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'midnight-green': '#27596C',
				'moonstone': '#679FB0',
				'airforce-blue': '#4E7C8E',
				'alice-white': '#EEF6F7',
				'blue-munsell': '#4695AC',
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
}


// midnight-green: '#27596C',
// 'moonstone': '#679FBO',
// 'airforce-blue': '4E7C8E',
// 'alice-white': 'EEF6F7',
// 'blue-munsell': '4695AC'