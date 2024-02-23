import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'

type PropsType = {
	isMenuHidden: boolean
	toggleIsMenuHidden: () => void
}

const CloseButton: FC<PropsType> = ({ isMenuHidden, toggleIsMenuHidden }) => {
	return (
		<button
			className='w-8 h-8 md:hidden !text-2xl duration-300 relative z-40'
			onClick={toggleIsMenuHidden}
		>
			<FontAwesomeIcon
				icon={faBars}
				className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 ${
					isMenuHidden ? 'opacity-100' : 'opacity-0'
				}`}
			/>
			<FontAwesomeIcon
				icon={faXmark}
				className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 ${
					!isMenuHidden ? 'opacity-100' : 'opacity-0'
				}`}
			/>
		</button>
	)
}

export default CloseButton
