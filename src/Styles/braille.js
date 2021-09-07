import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
	container: {
		width: '100%',
		height: '100%',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
	},
	circle: {
		width: '65%',
		height: '65%',
		borderRadius: '50%',
		borderStyle: 'solid',
		borderWidth: '2px',
		borderColor: theme.colors.accent,
		justifySelf: 'center',
		alignSelf: 'center',
	},
}))

export default useStyles
