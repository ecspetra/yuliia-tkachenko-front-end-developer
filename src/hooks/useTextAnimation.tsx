import { gsap } from 'gsap'
import { RefObject, useEffect } from 'react'
import SplitType from 'split-type'

const useTextAnimation = (
	textRefOne: RefObject<HTMLHeadingElement>,
	textRefTwo: RefObject<HTMLHeadingElement>,
	textRefThree: RefObject<HTMLHeadingElement>
) => {
	useEffect(() => {
		const elements = [
			textRefOne.current,
			textRefTwo.current,
			textRefThree.current,
		]

		if (elements.some(element => !element)) {
			return
		}

		const createAnimation = (chars: HTMLElement[] | null) =>
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

		const splitTexts = elements.map(
			element =>
				new SplitType(element!, {
					types: 'chars',
					tagName: 'span',
				})
		)

		const timeline = gsap.timeline()

		splitTexts.forEach((splitText, idx) => {
			timeline.add(
				createAnimation(splitText.chars),
				idx === 0 ? undefined : '-=4'
			)
		})

		elements.forEach(element => {
			element!.style.visibility = 'visible'
		})

		const handleVisibilityChange = () => {
			if (!document.hidden) {
				timeline.restart()
			}
		}

		document.addEventListener('visibilitychange', handleVisibilityChange)

		return () => {
			document.removeEventListener(
				'visibilitychange',
				handleVisibilityChange
			)
			timeline.kill()
			splitTexts.forEach(splitText => splitText.revert())
		}
	}, [textRefOne, textRefTwo, textRefThree])
}

export default useTextAnimation
