import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
	svg: {
		position: 'absolute',
		bottom: '0%',
		margin: theme.spacing.md,
		width: '5rem',
		stroke: theme.colors.dark,
		strokeWidth: '3px',
	},
}))

export default useStyles
