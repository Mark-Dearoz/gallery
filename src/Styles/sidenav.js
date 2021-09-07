import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
	container: {
		position: 'relative',
		height: theme.orientation() === 'landscape' ? '100vh' : 'fit-content',
		minHeight: theme.orientation() === 'landscape' ? '700px' : 'fit-content',
		width: theme.orientation() === 'portrait' ? '100vw' : 'fit-content',
		borderWidth: theme.orientation() === 'landscape' ? '0px 0px 0px 1px' : '1px 0px 0px 0px',
		borderStyle: 'solid',
		borderColor: theme.colors.dark,
		backgroundColor: theme.colors.light,
		zIndex: 10,
	},
	header: {
		position: 'relative',
		padding: theme.orientation() === 'landscape' ? '0rem' : theme.spacing.xs,
		transform: theme.orientation() === 'landscape' ? 'rotate(90deg) translateX(50%)' : '',
	},
}))

export default useStyles
