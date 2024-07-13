/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#4793A9',
				mywhite: '#EEF6F7', 
				dark: '#245A6E', 
				light: '#98CDD6',
				cascade: '#8BA09E',
				boulder: '#7D7D7D',
				palesky: '#6E8CA0',
				shadowgreen: '#9DB9B2',
				geyser: '#D4E4E5',
				sirocco: '#718F8A',
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
}

// Steel Blue
// #4793A9

// Catskill White
// #EEF6F7

// Astronaut
// #245A6E

// Sinbad
// #98CDD6

// Cascade (#8BA09E): A soft, muted green that pairs well with both blue and white tones.
// Boulder (#7D7D7D): A neutral gray that can serve as a balancing element in your palette.
// Pale Sky (#6E8CA0): A cool, muted blue that blends seamlessly with Steel Blue and Astronaut.
// Shadow Green (#9DB9B2): A light, airy green that complements the Sinbad color.
// Geyser (#D4E4E5): A very light blue-gray that works well with Catskill White.
// Sirocco (#718F8A): A subdued greenish-gray that provides a good contrast with the brighter colors in your palette