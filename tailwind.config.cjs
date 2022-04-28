module.exports = {
	content: [ './src/**/*.{js,jsx}' ],
	theme: {
		extend: {
			orange: '#FF7D1A',
			pale: {
				orange: '#FFEDE0'
			},
			very: {
				dark: {
					blue: '#1D2025'
				},
			},
			dark: {
				grayish: {
					blue: '#68707D',
				},
			},
			grayish: {
				blue: '#B6BCC8',
			},
			light: {
				grayish: {
					blue: '#F7F8FD',
				},
			},
		}
	},
	plugins: []
};
