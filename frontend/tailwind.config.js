/** @type {import('tailwindcss').Config} */
module.exports = { 
	content: [ "./src/**/*.{js,ts,jsx,tsx}" ], 
	theme: { 
		fontFamily: {
			'sans': ['"Inter"', 'system-ui'],
			'serif': ['ui-serif', 'Georgia'],
			'mono': ['ui-monospace', 'SFMono-Regular'],
			'display': ['"Playfair Display"'],
			'body': ['"Open Sans"']
		},
		container: {
			padding: {
			  DEFAULT: '1rem',
			  sm: '2rem',
			  lg: '4rem',
			  xl: '5rem',
			  '2xl': '6rem',
			},
		  },
		extend: {}, 
	}, 
	plugins: [], 
}