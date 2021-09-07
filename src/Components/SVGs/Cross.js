import { motion } from 'framer-motion'
import { MouseContext } from '../../App'
import { useContext } from 'react'
import useStyles from '../../Styles/cross'

function Cross(props) {
	const classes = useStyles()
	const mouseEvent = useContext(MouseContext)
	return (
		<motion.svg
			className={classes.svg}
			viewBox="0 0 82 82"
			xmlns="http://www.w3.org/2000/svg"
			onClick={() => (props.onClick ? props.onClick() : null)}
			initial="hidden"
			animate="visible"
			exit="hidden"
			onMouseEnter={mouseEvent}
			onMouseLeave={mouseEvent}
		>
			<motion.path d="M40.7979 40.7981L80.9999 81.0001" variants={svgVariant} />
			<motion.path d="M41.2021 41.2019L1.00005 0.999948" variants={svgVariant} />
			<motion.path d="M41.2021 40.7981L1.00005 81.0001" variants={svgVariant} />
			<motion.path d="M40.7979 41.2019L80.9999 0.999948" variants={svgVariant} />
		</motion.svg>
	)
}

const svgVariant = {
	hidden: { pathLength: 0, transition: { duration: 0.3 }, ease: 'easeIn' },
	visible: { pathLength: 1, transition: { duration: 0.3, delay: 0.25, ease: 'easeOut' } },
}

export default Cross
