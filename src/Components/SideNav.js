import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MouseContext } from '../App'
import { motion } from 'framer-motion'
import useStyles from '../Styles/sidenav'

function SideNav(props) {
	const mouseEvent = useContext(MouseContext)
	const classes = useStyles()
	if (props.disabled) {
		return (
			<div className={classes.container}>
				<motion.h3 className={classes.header}>{props.children}</motion.h3>
			</div>
		)
	}
	return (
		<Link to={`/${props.children}`}>
			<div className={classes.container} onMouseEnter={mouseEvent} onMouseLeave={mouseEvent}>
				<h3 className={classes.header}>{props.children}</h3>
			</div>
		</Link>
	)
}

export default SideNav
