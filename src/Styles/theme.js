const theme = {
	colors: {
		light: '#DADADA',
		accent: '#AF5603',
		dark: '#2C2C2C',
		contrast: '#e5e5e5',
		transparent: 'rgba(0,0,0,0)',
	},
	spacing: {
		none: '0rem',
		xs: '0.5rem',
		sm: '1rem',
		md: '2rem',
		lg: '4rem',
	},
	orientation: () => (window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'),
}

export default theme
