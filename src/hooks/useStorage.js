import { useEffect, useState, useRef } from 'react'
import { projectStorage } from '../firebase/firebase'
import { listAll, ref } from '@firebase/storage'

const useStorage = () => {
	const [folders, setFolders] = useState([])
	const storageRef = useRef(ref(projectStorage))
	useEffect(() => {
		listAll(storageRef.current).then((res) => setFolders(res.prefixes))
	}, [storageRef])

	return folders
}

export default useStorage
