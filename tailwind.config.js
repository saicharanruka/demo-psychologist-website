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
		animation: {
			scroll:
				"scroll var(--animation-duration) var(--animation-direction, forwards) linear infinite",
		},
		keyframes: {
			scroll: {
				from: {
					transform: "translateX(0%);",
				},
				to: {
					transform: "translateX(-50%);",
				},
			},
		},
	},
};
// eslint-disable-next-line @typescript-eslint/no-require-imports
export const plugins = [require("tailwindcss-motion")];
