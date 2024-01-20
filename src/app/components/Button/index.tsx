import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type PropsType = {
	icon: IconProp
	children?: ReactNode
	context?: 'basic' | 'preview-link' | 'simple-button' | 'social-link'
}

const Button: FC<PropsType> = ({ children, icon, context = 'basic' }) => {
	const basicButtonClassNames =
		'bg-lime-400 text-black px-6 py-4 font-bold border-2 border-lime-400 hover:bg-transparent rounded-[32px]'
	const simpleButtonClassNames =
		'bg-zinc-800 hover:text-lime-400 border border-zinc-700 px-6 py-4 rounded-[32px]'
	const socialLinkButtonClassNames =
		'w-16 h-16 bg-zinc-950 !text-2xl text-lime-400 flex justify-center items-center rounded-full'

	const isBasicButton = context === 'basic'

	const getButtonClassNames = () => {
		switch (context) {
			case 'simple-button':
				return simpleButtonClassNames
			case 'social-link':
				return socialLinkButtonClassNames
		}
	}

	return context === 'basic' || context === 'preview-link' ? (
		<button
			className={classNames(
				'duration-300 text-lg',
				basicButtonClassNames
			)}
		>
			{isBasicButton ? 'Download CV' : 'Preview'}
			<FontAwesomeIcon className='ml-2' icon={icon} />
		</button>
	) : (
		<button
			className={classNames(
				'duration-300 text-lg relative z-50',
				getButtonClassNames()
			)}
		>
			{children}
			{icon && (
				<FontAwesomeIcon className={children && 'ml-2'} icon={icon} />
			)}
		</button>
	)
}

export default Button
