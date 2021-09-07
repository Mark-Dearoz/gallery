import { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MouseContext } from '../App'
import Braille from '../Components/Braille'
import useStyles from '../Styles/landingpage'
import SideNav from '../Components/SideNav'
import theme from '../Styles/theme'

function LandingPage(props) {
	const mouseEvent = useContext(MouseContext)
	const classes = useStyles()
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(setDate(new Date()), 1000)
		return clearInterval(interval)
	}, [])

	return (
		<div className={classes.container}>
			<motion.div
				className={classes.contentContainer}
				variants={contentContatiner}
				custom={theme}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<motion.div className={classes.topTextContainer} variants={items}>
					<p>Gallery</p>
					<p>
						{`${date.toDateString().slice(0, 10)} ${
							date.getHours() > 12 ? Math.floor(date.getHours() / 12) : date.getHours()
						}:${date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`} ${
							date.getHours() >= 12 ? 'PM' : 'AM'
						}`}
					</p>
				</motion.div>
				<motion.div className={classes.topBox} variants={items}>
					<div className={classes.square}>
						<Braille array={[true, true, false, true]} />
					</div>
				</motion.div>
				<motion.div className={classes.brailleContainer} variants={items}>
					<Braille array={[true, true, false, false, true, false]} />
				</motion.div>

				<motion.h1 className={classes.header} variants={items}>
					Captured Moments
				</motion.h1>
				<motion.div className={classes.pContainer} variants={items}>
					<p className={classes.name}>Mark Dearoz</p>
					<p>
						Hi, my name is Mark Dearoz. I am a software engineer who enjoys to learn many different
						skills, and one of those skill is photography! These are some of my photos. If you would
						like to get to know me more click the link below.
					</p>
					<a
						href="https://www.markdearoz.com"
						className={classes.link}
						onMouseEnter={mouseEvent}
						onMouseLeave={mouseEvent}
					>
						more about me
					</a>
				</motion.div>

				<motion.div className={classes.triangle} variants={items}></motion.div>
				<motion.p className={`${classes.bottomText}`} variants={items}>
					01
				</motion.p>
			</motion.div>
			{props.links.map((ref, index) => (
				<SideNav key={index}>{ref.name}</SideNav>
			))}
		</div>
	)
}
const contentContatiner = {
	hidden: (theme) => (theme.orientation() === 'landscape' ? { width: '0%' } : { height: '0%' }),
	visible: (theme) =>
		theme.orientation() === 'landscape'
			? {
					width: `calc(100% - ${window.innerWidth > 600 ? '8rem' : '2rem'})`,
					transition: {
						duration: 0.6,
						ease: 'easeInOut',
						when: 'beforeChildren',
						staggerChildren: 0.1,
					},
			  }
			: {
					height: `calc(100% - ${window.innerWidth > 600 ? '8rem' : '2rem'})`,
					transition: {
						duration: 0.6,
						ease: 'easeInOut',
						when: 'beforeChildren',
						staggerChildren: 0.1,
					},
			  },
	exit: (theme) =>
		theme.orientation() === 'landscape'
			? {
					x: '100%',
					transition: { duration: 0.5, ease: 'easeInOut', when: 'afterChildren' },
			  }
			: {
					y: '100%',
					transition: { duration: 0.5, ease: 'easeInOut', when: 'afterChildren' },
			  },
}
const items = {
	hidden: { opacity: '0%' },
	visible: { opacity: '100%', transition: { duration: 0.3 } },
	exit: { opacity: '0%', transition: { duration: 0.1 } },
}

export default LandingPage
