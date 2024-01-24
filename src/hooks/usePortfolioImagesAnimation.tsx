import { RefObject, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const usePortfolioImagesAnimation = (
	imageRef: RefObject<HTMLDivElement>,
	refName: 'bigImage' | 'smallImage' | 'fullPageImage',
	idx?: number
) => {
	useEffect(() => {
		const image = imageRef.current

		const timeline = gsap.timeline({ paused: true })

		const createAnimation = () => {
			switch (refName) {
				case 'bigImage':
					timeline.fromTo(
						image,
						{
							opacity: 0,
							y: 200,
						},
						{
							opacity: 1,
							y: 0,
							duration: 1,
						}
					)
					break

				case 'smallImage':
					timeline.fromTo(
						image,
						{
							opacity: 0,
							y: 300,
						},
						{
							opacity: 1,
							y: 0,
							duration: 2,
						}
					)
					break

				case 'fullPageImage':
					timeline.fromTo(
						image,
						{
							opacity: 0,
							y: 300,
						},
						{
							opacity: 1,
							y: 0,
							duration: 2,
							delay: idx! * 0.5,
						}
					)
					break

				default:
					break
			}

			timeline.scrollTrigger = {
				trigger: image,
				start: 'top bottom',
				end: 'bottom center',
				toggleActions: 'play none none reverse',
			}
		}

		const handleScroll = () => {
			const rect = image.getBoundingClientRect()
			const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

			if (isVisible) {
				timeline.play()
			} else {
				timeline.reverse()
			}
		}

		createAnimation()
		handleScroll()

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [imageRef, refName, idx])
}

export default usePortfolioImagesAnimation
