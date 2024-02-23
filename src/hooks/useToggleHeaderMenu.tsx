import { useState } from 'react'

const useToggleHeaderMenu = () => {
	const [isMenuHidden, setIsMenuHidden] = useState<boolean>(true)

	const toggleIsMenuHidden = () => {
		if (window.innerWidth <= 1023) {
			const headerMenu = document.getElementById('header-menu')
			if (headerMenu) {
				headerMenu.classList.toggle('hidden-menu')
				document.body.classList.toggle('scroll-blocked')
				setIsMenuHidden(!isMenuHidden)
			}
		}
	}

	return { isMenuHidden, toggleIsMenuHidden }
}

export default useToggleHeaderMenu
