import { RefObject, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const useSkillsItemAnimation = (
	itemRef: RefObject<HTMLDivElement>,
	spanRef: RefObject<HTMLSpanElement>,
	idx: number
) => {
	useEffect(() => {
		const skillsItem = itemRef.current
		const spanElement = spanRef.current

		if (!skillsItem || !spanElement) {
			return
		}

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

		const scrollTrigger = ScrollTrigger.create({
			trigger: skillsItem,
			start: 'top bottom',
			end: 'bottom top',
			toggleActions: 'play none none reverse',
			animation: timeline,
		})

		return () => {
			scrollTrigger.kill()
			timeline.kill()
		}
	}, [itemRef, spanRef, idx])
}

export default useSkillsItemAnimation
