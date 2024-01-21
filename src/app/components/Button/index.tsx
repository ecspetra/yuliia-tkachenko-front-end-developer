import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import yuliiaTkachenkoCV from '@/app/assets/cv/CV_Yuliia_Tkachenko_Front-End-Developer.pdf'

type PropsType = {
	link?: string
	icon?: IconProp
	children?: ReactNode
	context?: 'basic' | 'preview-link' | 'simple-button' | 'social-link'
}

const Button: FC<PropsType> = ({ link, icon, children, context = 'basic' }) => {
	const basicButtonClassNames =
		'bg-lime-400 text-zinc-950 px-6 py-4 border border-lime-400 rounded-[32px] hover:text-lime-400 after:duration-300 after:w-0 after:h-0 after:bg-zinc-900 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full hover:after:w-full hover:after:h-full'
	const simpleButtonClassNames =
		'bg-zinc-800 border border-zinc-700 px-6 py-4 rounded-[32px] hover:text-zinc-950 hover:border-white after:duration-300 after:w-0 after:h-0 after:bg-white after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full hover:after:w-full hover:after:h-full'
	const socialLinkButtonClassNames =
		'w-16 h-16 bg-zinc-950 !text-2xl text-lime-400 flex justify-center items-center rounded-full hover:text-zinc-950 after:duration-300 after:w-0 after:h-0 after:bg-lime-400 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full hover:after:w-full hover:after:h-full'

	const isBasicButton = context === 'basic'
	const buttonText = isBasicButton ? 'Download CV' : 'Preview'
	const buttonIcon = isBasicButton ? faCircleArrowDown : icon
	const buttonDownlodLink = isBasicButton
		? 'CV_Yuliia_Tkachenko_Front-End-Developer.pdf'
		: undefined

	const getButtonClassNames = () => {
		switch (context) {
			case 'simple-button':
				return simpleButtonClassNames
			case 'social-link':
				return socialLinkButtonClassNames
		}
	}
	console.log(yuliiaTkachenkoCV)
	return context === 'basic' || context === 'preview-link' ? (
		<button
			className={classNames(
				'duration-300 text-lg relative font-bold',
				basicButtonClassNames
			)}
		>
			{/*<a*/}
			{/*	href={isBasicButton ? yuliiaTkachenkoCV.src : link}*/}
			{/*	target='_blank'*/}
			{/*	rel='noopener noreferrer'*/}
			{/*	download={buttonDownlodLink}*/}
			{/*>*/}
			{/*	<span className='relative z-20'>{buttonText}</span>*/}
			{/*	<FontAwesomeIcon*/}
			{/*		className='ml-2 relative z-20'*/}
			{/*		icon={buttonIcon}*/}
			{/*	/>*/}
			{/*</a>*/}
		</button>
	) : (
		<button
			className={classNames(
				'duration-300 text-lg relative z-50 font-bold',
				getButtonClassNames()
			)}
		>
			<a href={link} target='_blank' rel='noopener noreferrer'>
				<span className='relative z-20'>{children}</span>
				{icon && (
					<FontAwesomeIcon
						className={`${children && 'ml-2'} relative z-20`}
						icon={icon}
					/>
				)}
			</a>
		</button>
	)
}

export default Button
