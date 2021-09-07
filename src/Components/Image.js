import { memo } from 'react'
import { motion } from 'framer-motion'
import { MouseContext } from '../App'
import { useContext } from 'react'
import useStyles from '../Styles/image'

function Image(props) {
	const mouseEvent = useContext(MouseContext)
	const classes = useStyles()

	return (
		<motion.div
			className={classes.background}
			variants={props.variants}
			layoutId={props.src}
			initial="hidden"
			animate="visible"
			onMouseEnter={props.onClick ? mouseEvent : null}
			onMouseLeave={props.onClick ? mouseEvent : null}
		>
			<div
				className={classes.container}
				onClick={() => (props.onClick ? props.onClick(props.index) : null)}
			>
				<motion.img
					className={classes.image}
					alt={props.alt}
					src={props.src}
					variants={props.variants}
					animate="visible"
					whileHover="hover"
					tabIndex={0}
					style={props.style}
				></motion.img>
			</div>
		</motion.div>
	)
}

export default memo(Image)
