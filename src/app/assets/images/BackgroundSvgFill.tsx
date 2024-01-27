import { FC } from 'react'
import { COLOR_SCHEME } from '@/constants/colorScheme'
import useChangeColorScheme from '@/hooks/useChangeColorScheme'
import classNames from 'classnames'

interface PropsType {
	id: string
	borderRadius: number
	opacity?: number
	className?: string
	isWithGradient?: boolean
}

const BackgroundSvgFill: FC<PropsType> = ({
	id,
	borderRadius,
	opacity,
	className,
	isWithGradient = true,
}) => {
	const { colorScheme } = useChangeColorScheme([
		COLOR_SCHEME[0][1],
		COLOR_SCHEME[0][3],
	])
	const gradientId = `grad-${id}`

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			shapeRendering='geometricPrecision'
			textRendering='geometricPrecision'
			className={classNames(
				`w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-${opacity}`,
				className
			)}
		>
			<defs>
				<linearGradient
					id={gradientId}
					x1='0%'
					y1='0%'
					x2='100%'
					y2='100%'
				>
					<stop
						offset='10%'
						style={{
							stopColor: `rgb(var(--${colorScheme[0]}))`,
							stopOpacity: 1,
						}}
					/>
					<stop
						offset='100%'
						style={{
							stopColor: `rgb(var(--${colorScheme[1]}))`,
							stopOpacity: 1,
						}}
					/>
				</linearGradient>
			</defs>
			<rect
				width='100%'
				height='100%'
				fill={
					isWithGradient
						? `url(#${gradientId})`
						: `rgb(var(--${colorScheme[0]}))`
				}
				rx={borderRadius}
			/>
		</svg>
	)
}

export default BackgroundSvgFill
