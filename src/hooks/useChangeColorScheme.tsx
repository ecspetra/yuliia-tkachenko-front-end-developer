import { useEffect, useState } from 'react'
import { getNextColorFromColorScheme } from '@/handlers/getNextColorFromColorScheme'

const useChangeColorScheme = initialColorsArray => {
	const [colorScheme, setColorScheme] = useState(initialColorsArray)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setColorScheme(prevColorScheme => {
				return prevColorScheme.map(color =>
					getNextColorFromColorScheme(color)
				)
			})
		}, 12000)

		return () => clearInterval(intervalId)
	}, [])

	return { colorScheme }
}

export default useChangeColorScheme
