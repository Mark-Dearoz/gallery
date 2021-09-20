import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import useScroll from '../hooks/useScroll'
import useStyles from '../Styles/scrollbar'

function ScrollBar({ onTrigger, scrollRef, show }) {
	const orientation = useRef('portrait')
	const classes = useStyles()
	const [length, offSet, trigger] = useScroll(scrollRef, {
		orientation: orientation.current,
		threshhold: 0.75,
		timeout: 75,
	})
	useEffect(() => {
		window.innerWidth > window.innerHeight
			? (orientation.current = 'landscape')
			: (orientation.current = 'portrait')
	}, [orientation])
	useEffect(() => {
		if (trigger) onTrigger()
	}, [trigger, onTrigger])
	return (
		<div className={classes.container} style={show ? { opacity: 1 } : { opacity: 0 }}>
			<motion.div
				className={classes.bar}
				variants={barVariant}
				initial="initial"
				animate="animate"
				custom={{ length, offSet, orientation: orientation.current }}
			></motion.div>
		</div>
	)
}

const barVariant = {
	initial: ({ orientation }) => ({
		left: '0%',
		top: '0%',
		width: orientation === 'landscape' ? '0%' : '100%',
		height: orientation === 'portrait' ? '0%' : '100%',
		transition: { duration: 0 },
	}),
	animate: ({ orientation, offSet, length }) => ({
		left: orientation === 'landscape' ? `${offSet}%` : '0%',
		top: orientation === 'portrait' ? `${offSet}%` : '`0%',
		width: orientation === 'landscape' ? `${length}%` : '100%',
		height: orientation === 'portrait' ? `${length}%` : '100%',
		transition: { ease: 'linear', duration: 0.3 },
	}),
}
export default ScrollBar
