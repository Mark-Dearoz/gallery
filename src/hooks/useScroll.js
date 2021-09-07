import { useRef, useState, useEffect } from 'react'

const defaultOptions = {
	orientation: 'portrait',
	threshhold: 1,
	timeout: 20,
}
const useScroll = (ref, options = { ...defaultOptions }) => {
	const shouldRun = useRef(true)
	const [length, setLength] = useState(0)
	const [offSet, setOffSet] = useState(0)
	const [trigger, setTrigger] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			if (shouldRun.current && ref.current) {
				const newLength =
					options.orientation === 'portrait'
						? ref.current.clientHeight / ref.current.scrollHeight
						: ref.current.clientWidth / ref.current.scrollWidth
				const newOffSet =
					options.orientation === 'portrait'
						? ref.current.scrollTop / ref.current.scrollHeight
						: ref.current.scrollLeft / ref.current.scrollWidth
				const distance =
					options.orientation === 'portrait'
						? ref.current.scrollHeight - ref.current.scrollTop
						: ref.current.scrollWidth - ref.current.scrollLeft
				setTrigger(
					options.orientation === 'portrait'
						? ref.current.clientHeight > distance * options.threshhold
						: ref.current.clientWidth > distance * options.threshhold
				)
				setLength(newLength * 100)
				setOffSet(newOffSet * 100)
				setTimeout(() => (shouldRun.current = true), options.timeout)
				shouldRun.current = false
			}
		}
		const refCurrent = ref.current
		const interval = setInterval(onScroll, options.timeout * 5)
		refCurrent.addEventListener('scroll', onScroll)
		return () => {
			refCurrent.removeEventListener('scroll', onScroll)
			clearInterval(interval)
		}
	}, [ref, options])

	return [length, offSet, trigger]
}

export default useScroll
