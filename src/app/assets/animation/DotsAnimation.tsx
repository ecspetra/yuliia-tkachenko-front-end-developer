import { FC, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { useInView } from 'react-intersection-observer'

type PropsType = {
	id: string
	className?: string
}

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg'
const DOTS_COUNT = 50

const generateRandomPath = () => {
	const x1 = Math.random() * 1200
	const y1 = Math.random() * 1200
	const x2 = Math.random() * 1200
	const y2 = Math.random() * 1200
	const x3 = Math.random() * 1200
	const y3 = Math.random() * 1200

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

const createCircle = (index: number) => {
	const circle = document.createElementNS(SVG_NAMESPACE, 'circle')
	circle.setAttribute('r', generateRandomSize().toString())
	circle.setAttribute(
		'fill',
		index % 2 === 0 ? 'rgb(var(--background-color))' : 'white'
	)
	circle.setAttribute('opacity', generateRandomOpacity().toString())

	const animateMotion = document.createElementNS(
		SVG_NAMESPACE,
		'animateMotion'
	)
	animateMotion.setAttribute('dur', '30s')
	animateMotion.setAttribute('repeatCount', 'indefinite')
	animateMotion.setAttribute('path', generateRandomPath())

	circle.appendChild(animateMotion)

	return circle
}

const DotsAnimation: FC<PropsType> = ({ id, className }) => {
	const svgRef = useRef<SVGSVGElement | null>(null)
	const [ref, inView] = useInView()

	useEffect(() => {
		const svg = svgRef.current

		if (!svg || !inView) {
			return
		}

		const circles = Array.from({ length: DOTS_COUNT }, (_, index) =>
			createCircle(index)
		)
		circles.forEach(circle => svg.appendChild(circle))

		const timeoutId = window.setTimeout(() => {
			svg.querySelectorAll('animateMotion').forEach(animateMotion => {
				;(animateMotion as SVGAnimationElement).beginElement()
			})
		}, 100)

		return () => {
			window.clearTimeout(timeoutId)
			svg.replaceChildren()
		}
	}, [inView])

	return (
		<div
			ref={ref}
			className={classNames(
				'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
				className
			)}
		>
			<svg
				ref={svgRef}
				id={id}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1210 1210'
				width={1200}
				height={1200}
			/>
		</div>
	)
}

export default DotsAnimation
