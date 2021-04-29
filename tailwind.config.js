module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				tkhpurple: "#372359",
				tkhyellow: "#FEC308",
			},
			animation: {
				/* If you are using Toast component*/
				left: "left 0.3s",
				/* If you are using Toast component*/
				right: "right 0.3s",
				/* If you are using Modal position right*/
				"modal-right": "modal-right 0.3s",
				/* If you are using Modal position top*/
				"modal-top": "modal-top 0.3s",
				/* If you are using Modal position left*/
				"modal-left": "modal-left 0.3s",
			},
			keyframes: {
				/* If you are using Toast component*/
				left: {
					"0%, 100%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0)" },
				},
				right: {
					"0%, 100%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" },
				},
				/* If you are using Modal position top*/
				"modal-top": {
					"0%, 100%": { top: "-500px" },
					"100%": { top: "0" },
				},
				/* If you are using Modal position right*/
				"modal-right": {
					"0%, 100%": { right: "-500px" },
					"100%": { right: "0" },
				},
				/* If you are using Modal position left*/
				"modal-left": {
					"0%, 100%": { left: "-500px" },
					"100%": { left: "0" },
				},
			},
		},
		variants: {
			/* If you are using Collapse or Accordion component*/
			transitionProperty: {
				height: "height",
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["active", "checked"],
			inset: ["checked"],
			opacity: ["disabled"],
			textColor: ["active"],
		},
	},
	plugins: [],
};
