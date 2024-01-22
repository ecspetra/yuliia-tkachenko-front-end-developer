import { RefObject, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const useProjectItemAnimation = (
	imageRef: RefObject<HTMLDivElement>,
	refName: 'bigImage' | 'smallImage'
) => {
	useEffect(() => {
		const image = imageRef.current

		const createAnimashion = () => {
			switch (refName) {
				case 'bigImage':
					return gsap.fromTo(
						image,
						{
							opacity: 0,
							y: 200,
						},
						{
							opacity: 1,
							y: 0,
							duration: 1,
							scrollTrigger: {
								trigger: image,
								start: 'top bottom',
								end: 'bottom center',
								toggleActions: 'play none none reverse',
							},
						}
					)
				case 'smallImage':
					return gsap.fromTo(
						image,
						{
							opacity: 0,
							y: 300,
						},
						{
							opacity: 1,
							y: 0,
							duration: 2,
							scrollTrigger: {
								trigger: image,
								start: 'top bottom',
								end: 'bottom center',
								toggleActions: 'play none none reverse',
							},
						}
					)
			}
		}

		createAnimashion()
	}, [imageRef, refName])
}

export default useProjectItemAnimation
