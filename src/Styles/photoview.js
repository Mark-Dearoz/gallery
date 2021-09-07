import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
	photoContainer: {
		position: 'absolute',
		left: '50%',
		top: '10%',
		transform: 'translateX(-50%)',
		bottom: theme.orientation() === 'landscape' ? '25%' : '2%',
		borderStyle: 'solid',
		borderWidth: '1px',
		borderColor: theme.colors.dark,
		display: 'flex',
		gap: theme.spacing.md,
		flexDirection: theme.orientation() === 'landscape' ? 'row' : 'column',
		padding: theme.spacing.md,
		width: theme.orientation() === 'landscape' ? '75%' : '90%',
		height: theme.orientation() === 'landscape' ? '65%' : '80%',
		overflow: 'scroll',
		zIndex: 10,
	},
}))

export default useStyles
