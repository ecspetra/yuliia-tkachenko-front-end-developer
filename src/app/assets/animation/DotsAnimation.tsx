import { FC, useEffect, useRef } from 'react'
import gsap from 'gsap'
import classNames from 'classnames'

interface PropsType {
	className?: string
}

const Dot = (container, size, color) => {
	let rad_x = (2 * Math.random() * container.offsetWidth) / 2 + 1
	let rad_y = (1.2 * Math.random() * container.offsetHeight) / 2 + 1
	let alpha = Math.random() * 360 + 1
	let speed = Math.random() * 100 < 50 ? 1 : -1
	speed *= 0.03

	const dot = document.createElement('div')
	dot.className = 'dot' // Добавляем класс .dot
	dot.style.width = `${size}px`
	dot.style.height = `${size}px`
	dot.style.backgroundColor = `rgb(${color},${color},${color})`

	const draw = () => {
		const dx =
			container.offsetWidth / 2 +
			rad_x * Math.cos((alpha / 180) * Math.PI)
		const dy =
			container.offsetHeight / 2 +
			rad_y * Math.sin((alpha / 180) * Math.PI)

		gsap.set(dot, {
			x: dx,
			y: dy,
		})
	}

	const move = () => {
		alpha += speed

		if (Math.random() * 100 < 50) {
			color += 1
		} else {
			color -= 1
		}
	}

	return { dot, draw, move }
}

const DotsAnimation: FC<PropsType> = ({ className }) => {
	const containerRef = useRef(null)
	const dots = []

	useEffect(() => {
		const container = containerRef.current

		const dotCount = 100

		for (let i = 0; i < dotCount; i++) {
			const size = Math.random() * 5 + 1
			const color = Math.floor(Math.random() * 256)
			const {
				dot,
				draw,
				move,
				size: dotSize,
			} = Dot(container, size, color)
			container.appendChild(dot)
			dots.push({ draw, move, size: dotSize })
		}

		const render = () => {
			dots.forEach(dot => {
				dot.draw()
				dot.move()
			})

			requestAnimationFrame(render)
		}

		render()
	}, [dots])

	return (
		<div
			className={classNames(
				'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[100vh] sm:size-[50vh] lg:size-[60vh] 2xl:size-[70vh] opacity-30',
				className
			)}
			ref={containerRef}
		/>
	)
}

export default DotsAnimation
