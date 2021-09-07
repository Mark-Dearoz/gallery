import { useCallback, useRef, useState } from 'react'
import { list, getDownloadURL } from '@firebase/storage'

const useImageURLs = (reference) => {
	const [urls, setUrls] = useState([])
	const token = useRef(null)

	const fetchUrls = useCallback(async () => {
		if (token.current === undefined) return
		const res = await list(reference, { maxResults: 4, pageToken: token.current })
		token.current = res.nextPageToken
		res.items.map((ref) =>
			getDownloadURL(ref).then((url) => setUrls((prevState) => [...prevState, url]))
		)
	}, [reference])

	return [urls, fetchUrls]
}

export default useImageURLs
