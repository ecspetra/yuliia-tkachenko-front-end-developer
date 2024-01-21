import { RefObject, useEffect } from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap'

const useTextAnimation = (animatedTextRef: RefObject<HTMLHeadingElement>) => {
	useEffect(() => {
		const startAnimation = () => {
			if (animatedTextRef.current) {
				animatedTextRef.current.style.visibility = 'hidden'

				const ourText = new SplitType(animatedTextRef.current, {
					types: 'chars',
				})
				const chars = ourText.chars

				gsap.fromTo(
					chars,
					{
						y: 100,
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						stagger: 0.05,
						duration: 5,
						ease: 'power4.out',
					}
				)

				animatedTextRef.current.style.visibility = 'visible'
			}
		}

		const handleVisibilityChange = () => {
			if (!document.hidden) {
				startAnimation()
			}
		}

		document.addEventListener('visibilitychange', handleVisibilityChange)

		startAnimation()

		return () => {
			document.removeEventListener(
				'visibilitychange',
				handleVisibilityChange
			)
		}
	}, [animatedTextRef])
}

export default useTextAnimation
