import { useContext } from 'react'
import { MouseContext } from '../../App'
import useStyles from '../../Styles/back'
function Back(props) {
	const mouseEvent = useContext(MouseContext)
	const classes = useStyles()
	return (
		<svg
			className={classes.svg}
			viewBox="0 0 95 68"
			xmlns="http://www.w3.org/2000/svg"
			onClick={() => (props.onClick ? props.onClick() : null)}
			onMouseEnter={mouseEvent}
			onMouseLeave={mouseEvent}
		>
			<path d="M2.15723 34.7036L94.6572 34.7036" />
			<path d="M34.7036 2L1.99993 34.7037" />
			<path d="M2 34L34.7037 66.7037" />
		</svg>
	)
}

export default Back
