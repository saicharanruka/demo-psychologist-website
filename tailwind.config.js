/** @type {import('tailwindcss').Config} */
export const content = [
	"./src/app/**/*.{js,ts,jsx,tsx}",
	"./src/pages/**/*.{js,ts,jsx,tsx}",
	"./src/sections/**/*.{js,ts,jsx,tsx}",
	"./src/components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
	extend: {
		fontFamily: {
			primary: "var(--font-primary)",
		},
		colors: {
			primary: "#45695D",
			secondary: "#EFEFEB",
		},
	},
};
export const plugins = [];
