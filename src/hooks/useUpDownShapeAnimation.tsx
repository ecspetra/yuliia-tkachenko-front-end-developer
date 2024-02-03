import { RefObject, useEffect } from 'react'
import gsap from 'gsap'

type AnimatedShapeConfig = {
	elementRef: RefObject<HTMLDivElement>
	distance: number
	interval: number
}

const useUpDownShapeAnimation = (shapeConfigs: AnimatedShapeConfig[]) => {
	useEffect(() => {
		const animations = shapeConfigs.map(
			({ elementRef, distance, interval }) => {
				const moveShape = () => {
					gsap.fromTo(
						elementRef.current,
						{ y: 0 },
						{
							y: distance,
							duration: interval,
							ease: 'power1.inOut',
							yoyo: true,
							repeat: -1,
						}
					)
				}

				moveShape()

				return () => {
					gsap.killTweensOf(elementRef.current)
				}
			}
		)

		return () => {
			animations.forEach(stopAnimation => stopAnimation())
		}
	}, [shapeConfigs])
}

export default useUpDownShapeAnimation
