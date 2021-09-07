import { useState, createContext } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LandingPage from './Pages/LandingPage'
import Cursor from './Components/Cursor'
import PhotoPage from './Pages/PhotoPage'
import useStorage from './hooks/useStorage'
import useStyles from './Styles/global'

function App() {
	const location = useLocation()
	const folders = useStorage()
	const [mouseState, setMouseState] = useState('default')
	const [mouseHover, setMouseHover] = useState(false)

	const mouseEvent = (e) => (e.type === 'mouseenter' ? setMouseHover(true) : setMouseHover(false))
	useStyles()
	return (
		<>
			<Cursor
				state={mouseState}
				hover={mouseHover}
				onMouseDown={() => setMouseState('pressed')}
				onMouseUp={() => setMouseState('default')}
				length={30}
			/>
			<MouseContext.Provider value={mouseEvent}>
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.key}>
						<Route path="/" exact>
							<LandingPage
								onMouseEnter={() => setMouseHover(true)}
								onMouseLeave={() => setMouseHover(false)}
								links={folders}
							/>
						</Route>
						{folders.map((ref, index) => (
							<Route key={index} path={`/${ref.name}`} exact>
								<PhotoPage storageRef={ref} page={index + 2} links={folders}></PhotoPage>
							</Route>
						))}
					</Switch>
				</AnimatePresence>
			</MouseContext.Provider>
		</>
	)
}

export const MouseContext = createContext()

export default App
