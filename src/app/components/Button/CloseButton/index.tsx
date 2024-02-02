import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const CloseButton = () => {
	const [isMenuHidden, setIsMenuHidden] = useState<boolean>(true)

	const toggleHeaderMenu = () => {
		const headerMenu = document.getElementById('header-menu')
		headerMenu?.classList.toggle('hidden-menu')
		document.body.classList.toggle('scroll-blocked')
		setIsMenuHidden(!isMenuHidden)
	}

	return (
		<button
			className='w-8 h-8 md:hidden !text-2xl duration-300 relative z-40'
			onClick={toggleHeaderMenu}
		>
			<FontAwesomeIcon
				icon={faBars}
				className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 opacity-${
					isMenuHidden ? 100 : 0
				}`}
			/>
			<FontAwesomeIcon
				icon={faXmark}
				className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 opacity-${
					!isMenuHidden ? 100 : 0
				}`}
			/>
		</button>
	)
}

export default CloseButton
