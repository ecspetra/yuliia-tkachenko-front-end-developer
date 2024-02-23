import { RefObject, useEffect, useState } from 'react'
import gsap, { TweenMax } from 'gsap'

interface ShapeProps {
	shapeRef: RefObject<HTMLElement>
	shiftXValue?: number
	shiftYValue?: number
}

const useParallax = (shapes: ShapeProps[], triggerId: string) => {
	const [isWideScreen, setIsWideScreen] = useState(
		typeof window !== 'undefined' ? window.innerWidth > 1023 : false
	)

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 1023)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	useEffect(() => {
		let animations: TweenMax[] = []

		const setupAnimations = () => {
			shapes.forEach(({ shapeRef, shiftXValue = 0, shiftYValue = 0 }) => {
				if (shapeRef.current) {
					gsap.set(shapeRef.current, { autoAlpha: 0 })

					const animation = gsap.to(shapeRef.current, {
						x: shiftXValue,
						y: shiftYValue,
						scrollTrigger: {
							trigger: `#${triggerId}`,
							start: 'top bottom',
							end: 'bottom top',
							scrub: 1,
							onToggle: ({ isActive }) => {
								gsap.to(shapeRef.current, {
									autoAlpha: isActive ? 1 : 0,
								})
							},
						},
					})

					animations.push(animation)

					if (!isWideScreen) {
						gsap.set(shapeRef.current, { autoAlpha: 1 })
						animation.kill()
					}
				}
			})
		}

		setupAnimations()

		return () => {
			animations.forEach(animation => animation.kill())
		}
	}, [shapes, triggerId, isWideScreen])
}

export default useParallax
