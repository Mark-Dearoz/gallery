import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
	background: {
		height: '100%',
		width: 'fit-content',
	},
	container: {
		display: 'flex',
		overflow: 'hidden',
		height: '100%',
		alignItems: 'center',
	},
	image: {
		objectFit: 'contain',
		height: theme.orientation() === 'landscape' ? '100%' : 'auto',
		width: theme.orientation() === 'landscape' ? 'auto' : '100%',
		maxHeight: '95vh',
		maxWidth: '95vw',
	},
}))

export default useStyles
