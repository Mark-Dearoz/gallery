import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import useStyles from '../Styles/cursor'

function Cursor(props) {
	const [xy, setXY] = useState([0, 0])
	const classes = useStyles(props)

	useEffect(() => {
		const moveCursor = (e) => setXY([e.clientX, e.clientY])
		const mouseDown = () => props.onMouseDown()
		const mouseUp = () => props.onMouseUp()
		window.addEventListener('mousemove', moveCursor)
		window.addEventListener('mousedown', mouseDown)
		window.addEventListener('mouseup', mouseUp)
		return () => {
			window.removeEventListener('mousemove', moveCursor)
			window.removeEventListener('mousedown', mouseDown)
			window.removeEventListener('mouseup', mouseUp)
		}
	}, [props])

	return (
		<>
			<motion.div
				className={classes.cursor}
				style={{ top: `${xy[1] - props.length / 2}px`, left: `${xy[0] - props.length / 2}px` }}
				variants={mouseVariant}
				initial="default"
				animate={props.state}
				custom={props}
			></motion.div>
		</>
	)
}

const mouseVariant = {
	default: ({ hover }) => ({
		borderColor: hover ? 'rgba(175,86,3,1)' : 'rgba(44,44,44, 1)',
		backgroundColor: hover ? 'rgba(175,86,3,0)' : 'rgba(44,44,44, 0)',
		borderWidth: hover ? '3px' : '2px',
		scale: 1,
		transition: { duration: 0.2, ease: 'easeInOut' },
	}),
	pressed: ({ hover }) => ({
		scale: 0.8,
		backgroundColor: hover ? 'rgba(175,86,3,1)' : 'rgba(44,44,44, 1)',
		borderColor: hover ? 'rgba(175,86,3,1)' : 'rgba(44,44,44, 1)',
		borderWidth: hover ? '3px' : '2px',
		transition: { duration: 0.2, ease: 'easeInOut' },
	}),
}

export default Cursor
