import { RefObject, useEffect } from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap'

const useTextAnimation = (textRef: RefObject<HTMLHeadingElement>) => {
	useEffect(() => {
		const startAnimation = () => {
			if (textRef.current) {
				textRef.current.style.visibility = 'hidden'

				const animatedText = new SplitType(textRef.current, {
					types: 'chars',
					tagName: 'span',
				})
				const chars = animatedText.chars

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

				textRef.current.style.visibility = 'visible'
			}
		}

		const handleVisibilityChange = () => {
			if (!document.hidden) {
				startAnimation()
			}
		}

		startAnimation()

		document.addEventListener('visibilitychange', handleVisibilityChange)

		return () => {
			document.removeEventListener(
				'visibilitychange',
				handleVisibilityChange
			)
		}
	}, [textRef])
}

export default useTextAnimation
