import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { Link } from 'react-router-dom'
import Braille from '../Components/Braille'
import ScrollBar from '../Components/ScrollBar'
import Image from '../Components/Image'
import useImageURLs from '../hooks/useImageURLs'
import Cross from '../Components/SVGs/Cross'
import Back from '../Components/SVGs/Back'
import useStyles from '../Styles/photopage'
import PhotoView from '../Components/PhotoView'
import theme from '../Styles/theme'

function PhotoPage(props) {
	const ref = useRef()
	const classes = useStyles()
	const [urls, fetchUrls] = useImageURLs(props.storageRef)
	const [imageOpen, setImageOpen] = useState(null)

	const triggerHandler = useCallback(() => {
		fetchUrls()
	}, [fetchUrls])

	return (
		<AnimatePresence>
			<AnimateSharedLayout>
				<motion.div
					className={classes.container}
					variants={container}
					initial="hidden"
					animate="animate"
				>
					<motion.div className={classes.headerContainer} variants={headerContainer} custom={theme}>
						<motion.h2 className={classes.header} variants={header}>
							{props.storageRef.name}
						</motion.h2>
					</motion.div>

					{imageOpen === null && (
						<motion.div variants={items}>
							<PhotoView scrollRef={ref} urls={urls} onClick={(i) => setImageOpen(i)} />
						</motion.div>
					)}

					{imageOpen !== null && (
						<>
							<Cross onClick={() => setImageOpen(null)} />
							<div className={classes.imageContainer}>
								<Image
									index={imageOpen}
									alt={urls[imageOpen]}
									key={imageOpen}
									src={urls[imageOpen]}
								></Image>
							</div>
						</>
					)}
					{imageOpen === null && (
						<>
							<motion.p className={classes.pageNumber} variants={items}>
								{props.page >= 10 ? props.page : `0${props.page}`}
							</motion.p>
							<motion.div variants={items}>
								<ScrollBar scrollRef={ref} onTrigger={triggerHandler} />
							</motion.div>
						</>
					)}
					{window.innerWidth > window.innerHeight && (
						<motion.div className={classes.brailleContainer} variants={items}>
							<Braille array={[true, false, false, true, true, false]} />
						</motion.div>
					)}
					<motion.div variants={items}>
						<Link to="/">
							<Back />
						</Link>
					</motion.div>
				</motion.div>
			</AnimateSharedLayout>
		</AnimatePresence>
	)
}

const container = {
	hidden: { opacity: '0%' },
	animate: {
		opacity: '100%',
		transition: {
			duration: 0,
			ease: 'easeInOut',
			when: 'beforeChildren',
			staggerChildren: 0.1,
		},
	},
}
const items = {
	hidden: { opacity: '0%' },
	animate: { opacity: '100%', transition: { duration: 0.3, delay: 1 } },
	exit: { opacity: '0%', transition: { duration: 0.1 } },
}
const headerContainer = {
	hidden: (theme) =>
		theme.orientation() === 'landscape' ? { right: '0%', top: '-1%' } : { bottom: '0%' },
	animate: (theme) =>
		theme.orientation() === 'landscape'
			? { left: '0%', transition: { duration: 1, delay: 0.2, ease: 'easeInOut' } }
			: { top: '0%', transition: { duration: 1, delay: 0.2, ease: 'easeInOut' } },
}
const header = {
	hidden: { fontSize: '1.62rem' },
	animate: { fontSize: '4.24rem', transition: { duration: 1, delay: 0.2 } },
}
export default PhotoPage
