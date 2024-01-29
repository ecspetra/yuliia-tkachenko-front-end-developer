import { FC, useEffect, useState } from 'react'
import useChangeColorScheme from '@/hooks/useChangeColorScheme'

interface PropsType {
	id: string
	color: string
	size: number
	className?: string
}

const RadialGradientCircle: FC<PropsType> = ({
	id,
	color,
	size,
	className,
}) => {
	const { colorScheme } = useChangeColorScheme([color])
	const [windowSize, setWindowSize] = useState(0)

	useEffect(() => {
		const handleResize = () => {
			setWindowSize(window.innerWidth)
		}

		handleResize()

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize)
		}

		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('resize', handleResize)
			}
		}
	}, [])

	const calculatedSize = windowSize / size

	const gradientId = `grad-${id}`

	return (
		<svg
			width={calculatedSize}
			height={calculatedSize}
			viewBox={`0 0 ${calculatedSize} ${calculatedSize}`}
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
							stopColor: `rgb(var(--${colorScheme[0]}))`,
							stopOpacity: 1,
						}}
					/>
					<stop
						offset='30%'
						style={{
							stopColor: `rgb(var(--${colorScheme[0]}))`,
							stopOpacity: 0.5,
						}}
					/>
					<stop
						offset='40%'
						style={{
							stopColor: `rgb(var(--${colorScheme[0]}))`,
							stopOpacity: 0.3,
						}}
					/>
					<stop
						offset='55%'
						style={{
							stopColor: `rgb(var(--${colorScheme[0]}))`,
							stopOpacity: 0.1,
						}}
					/>
					<stop
						offset='65%'
						style={{
							stopColor: `rgb(var(--${colorScheme[0]}))`,
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
