import { FC } from 'react'
import useChangeColorScheme from '@/hooks/useChangeColorScheme'
import { COLOR_SCHEME } from '@/constants/colorScheme'

interface PropsType {
	className: string
	color?: string
}

const CircleShape: FC<PropsType> = ({ className, color }) => {
	const { colorScheme } = useChangeColorScheme([COLOR_SCHEME[0][1]])

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			shapeRendering='geometricPrecision'
			textRendering='geometricPrecision'
			viewBox='0 0 300 300'
			className={className}
		>
			<circle
				cx='150'
				cy='150'
				r='150'
				fill={color ? color : `rgb(var(--${colorScheme[0]}))`}
			/>
		</svg>
	)
}

export default CircleShape
