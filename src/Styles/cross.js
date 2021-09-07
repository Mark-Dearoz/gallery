import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
	svg: {
		position: 'absolute',
		width: '3.5rem',
		stroke: theme.colors.dark,
		strokeWidth: '4px',
		margin: theme.spacing.md,
		top: 0,
		right: 0,
		zIndex: 50,
	},
}))

export default useStyles
