import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	cursor: {
		width: ({ length }) => `${length}px`,
		height: ({ length }) => `${length}px`,
		position: 'absolute',
		borderRadius: '50%',
		pointerEvents: 'none',
		borderStyle: 'solid',
		zIndex: 100,
	},
})

export default useStyles
