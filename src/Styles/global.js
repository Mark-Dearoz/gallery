import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
	'@import': [`url('https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&display=swap')`],
	'@global': {
		'*': {
			boxSizing: 'border-box',
			'-webkit-font-smoothing': 'antialiased',
			'-ms-overflow-style': 'none',
			scrollbarWidth: 'none',
			fontFamily: `'Open Sans', sans-serif`,
			color: theme.colors.dark,
			fontSize: '16px',
			margin: 0,
			padding: 0,
			cursor: 'none',
		},
		'*::-webkit-scrollbar': {
			display: 'none',
		},
		body: {
			backgroundColor: theme.colors.light,
		},

		p: {
			fontFamily: `'Lato', sans-serif`,
			fontSize: '1rem',
		},
		a: {
			textDecoration: 'none',
			fontFamily: `'Lato', sans-serif`,
			fontWeight: 700,
		},
		h1: {
			fontSize: '6.85rem',
			lineHeight: '6.85rem',
			fontWeight: 700,
		},
		h2: {
			fontSize: '4.24rem',
			fontWeight: 600,
		},
		h3: {
			fontSize: '1.62rem',
			fontWeight: 600,
		},
	},

	'@media (max-width: 1200px) and (orientation: landscape)': {
		'@global': {
			'*': { fontSize: '14px' },
		},
	},
	'@media (max-height: 1200px) and (orientation: portrait)': {
		'@global': {
			'*': { fontSize: '14px' },
		},
	},
	'@media (max-width: 800px) and (orientation: landscape)': {
		'@global': {
			'*': { fontSize: '12px' },
		},
	},
	'@media (max-height: 800px) and (orientation: portrait)': {
		'@global': {
			'*': { fontSize: '12px' },
		},
	},

	'@media (max-width: 600px)': {
		'@global': {
			'*': { fontSize: '11px' },
			h1: {
				fontSize: '4.24rem',
				lineHeight: '4.24rem',
			},
		},
	},
}))

export default useStyles
