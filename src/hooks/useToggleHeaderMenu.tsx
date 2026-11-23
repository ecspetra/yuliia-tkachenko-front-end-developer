import { useCallback, useEffect, useState } from 'react'

const MOBILE_MENU_QUERY = '(max-width: 767px)'

const useToggleHeaderMenu = () => {
	const [isMenuHidden, setIsMenuHidden] = useState<boolean>(true)

	const toggleIsMenuHidden = useCallback(() => {
		if (window.matchMedia(MOBILE_MENU_QUERY).matches) {
			setIsMenuHidden(prev => !prev)
		}
	}, [])

	useEffect(() => {
		const headerMenu = document.getElementById('header-menu')
		headerMenu?.classList.toggle('hidden-menu', isMenuHidden)
		document.body.classList.toggle('scroll-blocked', !isMenuHidden)
	}, [isMenuHidden])

	useEffect(() => {
		const mediaQuery = window.matchMedia(MOBILE_MENU_QUERY)

		const handleChange = (event: MediaQueryListEvent) => {
			if (!event.matches) {
				setIsMenuHidden(true)
			}
		}

		mediaQuery.addEventListener('change', handleChange)

		return () => {
			mediaQuery.removeEventListener('change', handleChange)
			document.body.classList.remove('scroll-blocked')
		}
	}, [])

	return { isMenuHidden, toggleIsMenuHidden }
}

export default useToggleHeaderMenu
