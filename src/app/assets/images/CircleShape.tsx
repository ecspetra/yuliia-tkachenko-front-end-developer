import { FC } from 'react'
import classNames from 'classnames'
import { useColorScheme } from '@/context/ColorSchemeContext'

interface PropsType {
	className: string
	color?: string
}

const CircleShape: FC<PropsType> = ({ className, color }) => {
	const { colorScheme } = useColorScheme()

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			shapeRendering='geometricPrecision'
			textRendering='geometricPrecision'
			viewBox='0 0 300 300'
			className={classNames(className, 'w-full')}
		>
			<circle
				cx='150'
				cy='150'
				r='150'
				fill={color ? color : `rgb(var(--${colorScheme[1]}))`}
			/>
		</svg>
	)
}

export default CircleShape
