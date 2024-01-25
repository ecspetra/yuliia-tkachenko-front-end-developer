import { useEffect, useState } from 'react'
import { HEADER_ANCHORS } from '@/constants/anchors'

const useHeaderAnimation = () => {
	const [activeAnchor, setActiveAnchor] = useState<string | null>(null)
	const [isScrolled, setIsScrolled] = useState<boolean>(false)

	useEffect(() => {
		const handleScroll = () => {
			const sections = HEADER_ANCHORS.map(([key, value]) => {
				return document.getElementById(value.slice(1))
			})

			sections.forEach((section, index) => {
				const sectionTop = section?.offsetTop - 200
				const sectionBottom = sectionTop + (section?.clientHeight || 0)

				if (
					window.scrollY >= sectionTop &&
					window.scrollY < sectionBottom
				) {
					setActiveAnchor(
						window.scrollY === 0
							? null
							: HEADER_ANCHORS[index][1].slice(1)
					)
				}

				setIsScrolled(window.scrollY !== 0)
			})
		}

		window.addEventListener('scroll', handleScroll)

		handleScroll()

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return { activeAnchor, isScrolled }
}
export default useHeaderAnimation
