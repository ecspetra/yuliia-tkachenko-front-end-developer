import { RefObject, useEffect } from 'react'
import gsap from 'gsap'

interface ShapeProps {
	shapeRef: RefObject<HTMLElement>
	shiftXValue?: number
	shiftYValue?: number
}

const useParallax = (shapes: ShapeProps[], triggerId: string) => {
	useEffect(() => {
		const tl = gsap.timeline()

		shapes.forEach(({ shapeRef, shiftXValue = 0, shiftYValue = 0 }) => {
			gsap.set(shapeRef.current, { autoAlpha: 0 })

			tl.to(shapeRef.current, {
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
		})
	}, [shapes, triggerId])
}

export default useParallax
