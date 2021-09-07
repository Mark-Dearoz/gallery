import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
	container: {
		position: 'absolute',
		bottom: theme.orientation() === 'landscape' ? '20%' : '30%',
		left: theme.orientation() === 'landscape' ? '5%' : '95%',
		width: theme.orientation() === 'landscape' ? '50%' : '1.5rem',
		height: theme.orientation() === 'landscape' ? '1rem' : '50%',
		borderStyle: 'solid',
		borderColor: theme.colors.dark,
		borderWidth: '1px',
		overflow: 'hidden',
	},
	bar: {
		position: 'absolute',
		backgroundColor: theme.colors.accent,
	},
}))

export default useStyles
