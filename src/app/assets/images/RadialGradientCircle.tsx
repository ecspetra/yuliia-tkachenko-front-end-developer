import { FC } from 'react'
import { useColorScheme } from '@/context/ColorSchemeContext'
import { generateRandomId } from '@/handlers/generateRandomId'

interface PropsType {
	color:
		| 'global-color-one'
		| 'global-color-two'
		| 'global-color-three'
		| 'global-color-four'
	className?: string
}

const RadialGradientCircle: FC<PropsType> = ({ color, className }) => {
	const { colorScheme } = useColorScheme()
	const id = generateRandomId('circle', 5)
	const gradientId = `grad-${id}`

	const getColor = () => {
		switch (color) {
			case 'global-color-one':
				return colorScheme[0]
			case 'global-color-two':
				return colorScheme[1]
			case 'global-color-three':
				return colorScheme[2]
			case 'global-color-four':
				return colorScheme[3]
			default:
				return colorScheme[0]
		}
	}

	return (
		<svg
			width={400}
			height={400}
			viewBox='0 0 400 400'
			className={className}
			xmlns='http://www.w3.org/2000/svg'
		>
			<defs>
				<radialGradient
					id={gradientId}
					cx='50%'
					cy='50%'
					r='50%'
					fx='50%'
					fy='50%'
				>
					<stop
						offset='0%'
						style={{
							stopColor: `rgb(var(--${getColor()}))`,
							stopOpacity: 1,
						}}
					/>
					<stop
						offset='30%'
						style={{
							stopColor: `rgb(var(--${getColor()}))`,
							stopOpacity: 0.5,
						}}
					/>
					<stop
						offset='40%'
						style={{
							stopColor: `rgb(var(--${getColor()}))`,
							stopOpacity: 0.3,
						}}
					/>
					<stop
						offset='55%'
						style={{
							stopColor: `rgb(var(--${getColor()}))`,
							stopOpacity: 0.1,
						}}
					/>
					<stop
						offset='65%'
						style={{
							stopColor: `rgb(var(--${getColor()}))`,
							stopOpacity: 0.02,
						}}
					/>
					<stop
						offset='70%'
						style={{ stopColor: 'transparent', stopOpacity: 0 }}
					/>
				</radialGradient>
			</defs>
			<circle cx='50%' cy='50%' r='50%' fill={`url(#${gradientId})`} />
		</svg>
	)
}

export default RadialGradientCircle
