import { RefObject, useEffect } from 'react'
import gsap from 'gsap'

const useBasicItemAnimation = (
	itemRef: RefObject<HTMLDivElement>,
	delay: number,
	idx: number
) => {
	useEffect(() => {
		const skillItem = itemRef.current

		const tl = gsap.timeline({ paused: true })
		tl.fromTo(
			skillItem,
			{
				opacity: 0,
				y: 200,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: idx * delay,
			}
		)

		const handleScroll = () => {
			const rect = skillItem.getBoundingClientRect()
			const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

			if (isVisible) {
				tl.play()
			} else {
				tl.reverse()
			}
		}

		handleScroll()

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [itemRef, idx])
}

export default useBasicItemAnimation
