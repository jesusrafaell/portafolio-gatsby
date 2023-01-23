/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'keyboard-img': "url('/setup-keyborad.jpeg')",
				'custom-img': "url('/setup-keyborad.jpeg')",
			},
			fontFamily: {
				'gravity-bold': ['Gravity-Bold'],
				'gravity-regular': ['Gravity-Regular'],
				'gravity-light': ['Gravity-Light'],
				'gravity-book': ['Gravity-Book'],
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
