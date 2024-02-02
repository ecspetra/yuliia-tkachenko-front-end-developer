import { useEffect, useState } from 'react'
import { getNextColorFromColorScheme } from '@/handlers/getNextColorFromColorScheme'
import { ColorSchemeType } from '@/constants/colorScheme'

const useChangeColorScheme = (initialColorsArray: ColorSchemeType[]) => {
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
