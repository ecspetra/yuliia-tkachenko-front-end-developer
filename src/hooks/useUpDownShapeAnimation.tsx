import { RefObject, useEffect, useRef } from 'react'
import gsap from 'gsap'

type AnimationFunction = () => void

const upDownShapeAnimation = (
	elementRef: RefObject<HTMLDivElement>,
	distance: number,
	interval: number
) => {
	const animationRef = useRef<AnimationFunction | null>(null)

	useEffect(() => {
		const moveShape: AnimationFunction = () => {
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
	animatedGeometricShapeRef: RefObject<HTMLDivElement>,
	animatedBlurCircleRef: RefObject<HTMLDivElement>
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
