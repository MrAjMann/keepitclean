/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			screens: {
				"3xl": "1792px",
				"4xl": "2048",
			},
		},
	},
	plugins: [],
};
