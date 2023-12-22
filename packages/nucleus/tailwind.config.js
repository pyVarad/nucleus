/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{ts,tsx,html}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["'Comic Neue'", "sans-serif"],
			},
			colors: {
				primary: '#1fb6ff',
				'primary-hover': '#2b6cb0;',
				secondary: '#7e5bef',
				'secondary-hover': '#7b1fa2'
			}
		},
	},
	plugins: [],
};
