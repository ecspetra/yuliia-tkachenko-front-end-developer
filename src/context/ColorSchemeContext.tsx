import React, {
	createContext,
	useContext,
	ReactNode,
	useState,
	useEffect,
} from 'react'
import { getNextColorFromColorScheme } from '@/handlers/getNextColorFromColorScheme'
import { ColorSchemeType, COLOR_SCHEME } from '@/constants/colorScheme'

interface ColorContextProps {
	children: ReactNode
}

interface ColorContextValue {
	colorScheme: ColorSchemeType[]
}

const ColorContext = createContext<ColorContextValue | undefined>(undefined)

export const ColorSchemeProvider: React.FC<ColorContextProps> = ({
	children,
}) => {
	const [colorScheme, setColorScheme] = useState(COLOR_SCHEME[0])

	useEffect(() => {
		const intervalId = setInterval(() => {
			setColorScheme(prevColorScheme =>
				prevColorScheme.map(color => getNextColorFromColorScheme(color))
			)
		}, 12000)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<ColorContext.Provider value={{ colorScheme }}>
			{children}
		</ColorContext.Provider>
	)
}

export const useColorScheme = () => {
	const context = useContext(ColorContext)

	if (!context) {
		throw new Error('useColor must be used within a ColorProvider')
	}

	return context
}
