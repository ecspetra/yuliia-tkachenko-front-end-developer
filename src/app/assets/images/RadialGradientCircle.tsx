import { FC } from 'react'

interface PropsType {
	color: string
	size?: number
	className?: string
}

const RadialGradientCircle: FC<PropsType> = ({
	color,
	size = 800,
	className,
}) => {
	if (!color || !size) return null

	const gradientId = `grad-${color}-${size}-${Math.random()
		.toString(36)
		.substr(2, 9)}`

	return (
		<svg
			width={size}
			height={size}
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
						style={{ stopColor: color, stopOpacity: 1 }}
					/>
					<stop
						offset='50%'
						style={{ stopColor: color, stopOpacity: 0.5 }}
					/>
					<stop
						offset='80%'
						style={{ stopColor: color, stopOpacity: 0.1 }}
					/>
					<stop
						offset='100%'
						style={{ stopColor: 'transparent', stopOpacity: 0 }}
					/>
				</radialGradient>
			</defs>
			<circle
				cx={size / 2}
				cy={size / 2}
				r={size / 2}
				fill={`url(#${gradientId})`}
			/>
		</svg>
	)
}

export default RadialGradientCircle
