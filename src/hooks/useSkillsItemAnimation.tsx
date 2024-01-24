import { RefObject, useEffect } from 'react'
import gsap from 'gsap'

const useSkillsItemAnimation = (
	itemRef: RefObject<HTMLDivElement>,
	spanRef: RefObject<HTMLSpanElement>,
	idx: number
) => {
	useEffect(() => {
		const skillsItem = itemRef.current
		const spanElement = spanRef.current

		const timeline = gsap.timeline({ paused: true })
		timeline.fromTo(
			skillsItem,
			{
				opacity: 0,
				y: 200,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: idx * 0.1,
			}
		)

		timeline.fromTo(
			spanElement,
			{
				width: '0%',
			},
			{
				width: '100%',
				duration: 4,
				delay: 1,
			},
			0
		)

		const handleScroll = () => {
			const rect = skillsItem.getBoundingClientRect()
			const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

			if (isVisible) {
				timeline.play()
			} else {
				timeline.reverse()
			}
		}

		handleScroll()

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [itemRef, spanRef, idx])
}

export default useSkillsItemAnimation
