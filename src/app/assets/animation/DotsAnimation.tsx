import { FC } from 'react'
import classNames from 'classnames'

type PropsType = {
	className?: string
}

const generateRandomPath = () => {
	const x1 = Math.random() * 1000
	const y1 = Math.random() * 1000
	const x2 = Math.random() * 1000
	const y2 = Math.random() * 1000
	const x3 = Math.random() * 1000
	const y3 = Math.random() * 1000

	return `M${x1},${y1} C${x1 - 50},${y1 + 50} ${x2 + 50},${
		y2 - 50
	} ${x2},${y2} C${x2 - 50},${y2 + 50} ${x3 + 50},${y3 - 50} ${x3},${y3} z`
}

const generateRandomSize = () => {
	return Math.random() + 1
}

const generateRandomOpacity = () => {
	return Math.random()
}

const DotsAnimation: FC<PropsType> = ({ className }) => {
	const circles = Array.from({ length: 50 }).map((_, index) => {
		const path = generateRandomPath()
		const size = generateRandomSize()
		const opacity = generateRandomOpacity()
		const fillColor = index % 5 === 0 ? 'rgb(24, 24, 27)' : 'white' // Set color conditionally

		return (
			<circle key={index} r={size} fill={fillColor} opacity={opacity}>
				<animateMotion
					id={index.toString()}
					dur='20s'
					repeatCount='indefinite'
					path={path}
				/>
			</circle>
		)
	})

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 1010 1010'
			width={1000}
			height={1000}
			className={classNames(
				'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
				className
			)}
		>
			{circles}
		</svg>
	)
}

export default DotsAnimation
