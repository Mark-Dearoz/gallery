import { useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from './Image'
import useStyles from '../Styles/photoview'

function PhotoView({ urls, onClick, scrollRef }) {
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
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{renderImages()}
		</motion.div>
	)
}
const imageVariant = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
	hover: { scale: 1.2, transition: { duration: 0.25, ease: 'easeInOut' } },
}
export default PhotoView
