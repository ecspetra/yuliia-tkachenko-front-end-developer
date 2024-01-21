import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const upDownShapeAnimation = (elementRef, distance, interval) => {
	const animationRef = useRef(null)

	useEffect(() => {
		const moveShape = () => {
			gsap.to(elementRef.current, {
				y: distance,
				duration: interval,
				ease: 'power1.inOut',
				yoyo: true,
				repeat: -1,
			})
		}

		animationRef.current = moveShape

		moveShape()

		return () => {
			if (animationRef.current) {
				gsap.killTweensOf(elementRef.current)
				animationRef.current = null
			}
		}
	}, [elementRef, distance, interval])

	return {
		start: () => {
			if (animationRef.current) {
				animationRef.current()
			}
		},
		stop: () => {
			if (animationRef.current) {
				gsap.killTweensOf(elementRef.current)
				animationRef.current = null
			}
		},
	}
}

const useUpDownShapeAnimation = (
	animatedGeometricShapeRef,
	animatedBlurCircleRef
) => {
	const distance = 50
	const geometricShapeInterval = 3
	const blurCircleInterval = 4

	const { start: startGeometricShape, stop: stopGeometricShape } =
		upDownShapeAnimation(
			animatedGeometricShapeRef,
			distance,
			geometricShapeInterval
		)
	const { start: startBlurCircle, stop: stopBlurCircle } =
		upDownShapeAnimation(
			animatedBlurCircleRef,
			distance,
			blurCircleInterval
		)

	useEffect(() => {
		startGeometricShape()
		startBlurCircle()

		return () => {
			stopGeometricShape()
			stopBlurCircle()
		}
	}, [
		startGeometricShape,
		stopGeometricShape,
		startBlurCircle,
		stopBlurCircle,
	])
}

export default useUpDownShapeAnimation
