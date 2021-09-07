import { useTheme } from 'theming'
import useStyles from '../Styles/braille'

function Braille(props) {
	const classes = useStyles(props)
	const theme = useTheme()
	const renderCircle = () =>
		props.array.map((filled, index) => (
			<div
				key={index}
				className={classes.circle}
				style={{ backgroundColor: filled ? theme.colors.accent : theme.colors.transparent }}
			></div>
		))

	return <div className={classes.container}>{renderCircle()}</div>
}

export default Braille
