import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
	container: {
		width: '100vw',
		height: '100vh',
		minHeight: '700px',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		paddingTop: '5%',
	},
	headerContainer: {
		position: 'absolute',
		height: theme.orientation() === 'landscape' ? '100vh' : 'fit-content',
		minHeight: theme.orientation() === 'landscape' ? '700px' : 'fit-content',
		width: theme.orientation() === 'portrait' ? '100vw' : 'fit-content',
		borderWidth: theme.orientation() === 'landscape' ? '0px 0px 0px 1px' : '1px 0px 0px 0px',
		borderStyle: 'solid',
		borderColor: theme.colors.dark,
	},
	header: {
		position: 'relative',
		fontSize: '1.62rem',
		padding: theme.orientation() === 'landscape' ? '0rem' : theme.spacing.xs,
		transform: theme.orientation() === 'landscape' ? 'rotate(90deg) translateX(50%)' : '',
	},
	imageContainer: {
		display: 'flex',
		flexDirection: theme.orientation() === 'landscape' ? 'column' : 'row',
		justifyContent: 'center',
		padding: theme.spacing.md,
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		alignItems: 'center',
		width: '90%',
		height: '85%',
		zIndex: 10,
	},
	pageNumber: {
		position: 'absolute',
		top: theme.orientation() === 'landscape' ? '75%' : '10%',
		transform: theme.orientation() === 'landscape' ? '' : 'translateY(-100%)',
		alignSelf: 'center',
		width: theme.orientation() === 'landscape' ? '75%' : '90%',
		textAlign: 'end',
	},
	brailleContainer: {
		position: 'absolute',
		width: '8rem',
		height: '12rem',
		margin: theme.spacing.sm,
		bottom: 0,
		right: 0,
	},
	linkContainer: {
		position: 'absolute',
		display: 'flex',
		top: '0%',
		right: '0%',
	},
	'@media (max-width: 600px)': {
		imageContainer: {
			padding: theme.spacing.sm,
		},
	},
}))

export default useStyles
