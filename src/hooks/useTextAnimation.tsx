import { RefObject, useEffect } from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap'

const useTextAnimation = (
	textRefOne: RefObject<HTMLHeadingElement>,
	textRefTwo: RefObject<HTMLHeadingElement>,
	textRefThree: RefObject<HTMLHeadingElement>
) => {
	useEffect(() => {
		const startAnimation = () => {
			if (
				textRefOne.current &&
				textRefTwo.current &&
				textRefThree.current
			) {
				;[textRefOne, textRefTwo, textRefThree].forEach(ref => {
					ref.current!.style.visibility = 'hidden'
				})

				const createAnimation = (chars: HTMLElement[] | null) => {
					return gsap.fromTo(
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
				}

				const animatedTextOne = new SplitType(textRefOne.current, {
					types: 'chars',
					tagName: 'span',
				})
				const animatedTextTwo = new SplitType(textRefTwo.current, {
					types: 'chars',
					tagName: 'span',
				})
				const animatedTextThree = new SplitType(textRefThree.current, {
					types: 'chars',
					tagName: 'span',
				})

				const timeline = gsap.timeline()

				timeline.add(createAnimation(animatedTextOne.chars))
				timeline.add(createAnimation(animatedTextTwo.chars), '-=4')
				timeline.add(createAnimation(animatedTextThree.chars), '-=4')
				;[textRefOne, textRefTwo, textRefThree].forEach(ref => {
					ref.current!.style.visibility = 'visible'
				})
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
	}, [textRefOne, textRefTwo, textRefThree])
}

export default useTextAnimation
