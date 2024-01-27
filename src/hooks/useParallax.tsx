import { RefObject, useEffect } from 'react'
import gsap from 'gsap'

const useParallax = (
	imageRef: RefObject<HTMLElement>,
	triggerId: string,
	shiftValue: number
) => {
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: `#${triggerId}`,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1,
			},
		})

		tl.to(imageRef.current, {
			y: shiftValue,
		})
	}, [imageRef, triggerId])
}

export default useParallax
