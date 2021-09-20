import { useCallback } from 'react'
import Image from './Image'
import useStyles from '../Styles/photoview'
import { motion } from 'framer-motion'

function PhotoView({ urls, onClick, scrollRef, show }) {
	const classes = useStyles()
	const renderImages = useCallback(
		() =>
			urls.map((url, i) => (
				<Image
					index={i}
					alt={url}
					key={i}
					src={url}
					onClick={() => onClick(i)}
					variants={imageVariant}
				></Image>
			)),
		[urls, onClick]
	)

	return (
		<motion.div
			className={classes.photoContainer}
			ref={scrollRef}
			style={show ? { opacity: 1 } : { opacity: 0 }}
			transition={{ staggerChildren: 0.75 }}
		>
			{renderImages()}
		</motion.div>
	)
}
const imageVariant = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
	hover: { scale: 1.2, transition: { duration: 0.25, ease: 'easeInOut' } },
}
export default PhotoView
