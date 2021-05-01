module.exports = {
	purge: [],
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				tkhpurple: "#372359",
				tkhyellow: "#FEC308",
			},
			fontFamily: {
				headings: ["Montserrat"],
				bodyFont: ["Hind"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
