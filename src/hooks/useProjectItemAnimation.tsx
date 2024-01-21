import { RefObject, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const useProjectItemAnimation = (
	bigImageRef: RefObject<HTMLDivElement>,
	smallImageRef: RefObject<HTMLDivElement>
) => {
	useEffect(() => {
		const bigImage = bigImageRef.current
		const smallImage = smallImageRef.current

		gsap.fromTo(
			bigImage,
			{
				opacity: 0,
				y: 200,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: bigImage,
					start: 'top bottom',
					end: 'bottom center',
					toggleActions: 'play none none reverse',
				},
			}
		)
		gsap.fromTo(
			smallImage,
			{
				opacity: 0,
				y: 300,
			},
			{
				opacity: 1,
				y: 0,
				duration: 2,
				scrollTrigger: {
					trigger: smallImage,
					start: 'top bottom',
					end: 'bottom center',
					toggleActions: 'play none none reverse',
				},
			}
		)
	}, [bigImageRef, smallImageRef])
}

export default useProjectItemAnimation
