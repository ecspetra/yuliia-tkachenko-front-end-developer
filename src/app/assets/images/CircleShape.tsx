import { FC } from 'react'
import classNames from 'classnames'
import { useColorScheme } from '@/context/ColorSchemeContext'
import { generateRandomId } from '@/handlers/generateRandomId'

interface PropsType {
	className: string
	isBlurred?: boolean
	color?: string
}

const CircleShape: FC<PropsType> = ({ className, isBlurred, color }) => {
	const { colorScheme } = useColorScheme()
	const id = generateRandomId('circleShape', 5)

	return (
		<svg
			id={id}
			xmlns='http://www.w3.org/2000/svg'
			shapeRendering='geometricPrecision'
			textRendering='geometricPrecision'
			viewBox='0 0 300 300'
			className={classNames(
				'rounded-full',
				isBlurred && 'backdrop-blur-md',
				className
			)}
		>
			<circle
				cx='150'
				cy='150'
				r='150'
				fill={
					color
						? color
						: isBlurred
							? '#ffffff'
							: `rgb(var(--${colorScheme[1]}))`
				}
				opacity={isBlurred ? 0.2 : 1}
			/>
		</svg>
	)
}

export default CircleShape
