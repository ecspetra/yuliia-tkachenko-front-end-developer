import { useEffect, useState } from 'react'
import { HEADER_ANCHORS } from '@/constants/anchors'

const useHeaderAnimation = () => {
	const [activeAnchor, setActiveAnchor] = useState<string | null>(null)
	const [isScrolled, setIsScrolled] = useState<boolean>(false)

	useEffect(() => {
		const sections = HEADER_ANCHORS.map(
			([, value]) => document.getElementById(value.slice(1))
		)

		let ticking = false

		const updateAnchor = () => {
			const scrollY = window.scrollY

			setIsScrolled(scrollY !== 0)

			sections.forEach((section, index) => {
				if (!section) {
					return
				}

				const sectionTop = section.offsetTop - 200
				const sectionBottom = sectionTop + (section.clientHeight || 0)

				if (scrollY >= sectionTop && scrollY < sectionBottom) {
					setActiveAnchor(
						scrollY === 0 ? null : HEADER_ANCHORS[index][1].slice(1)
					)
				}
			})

			ticking = false
		}

		const handleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(updateAnchor)
				ticking = true
			}
		}

		window.addEventListener('scroll', handleScroll, { passive: true })

		updateAnchor()

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return { activeAnchor, isScrolled }
}
export default useHeaderAnimation
