import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import useChangeColorScheme from '@/hooks/useChangeColorScheme'
import { COLOR_SCHEME } from '@/constants/colorScheme'
import BackgroundSvgFill from '@/app/assets/images/BackgroundSvgFill'
import { SVG_IDS } from '@/constants/svgUniqueKeys'

type PropsType = {
	link?: string
	icon?: IconProp
	children?: ReactNode
	context?:
		| 'basic'
		| 'preview-link'
		| 'simple-button'
		| 'social-link-v1'
		| 'social-link-v2'
}

const Button: FC<PropsType> = ({ link, icon, children, context = 'basic' }) => {
	const { colorScheme } = useChangeColorScheme([COLOR_SCHEME[0][1]])

	if (!colorScheme.length) return null

	const basicButtonClassNames = `text-zinc-950 w-full lg:w-fit flex justify-center items-center px-6 py-4 rounded-[32px] hover:text-white after:duration-300 after:w-0 after:h-0 after:bg-zinc-900 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full hover:after:w-[calc(100%-4px)] hover:after:h-[calc(100%-4px)]`
	const simpleButtonClassNames =
		'bg-zinc-800 w-full lg:w-fit border-2 border-zinc-700 px-6 py-4 rounded-[32px] hover:text-zinc-950 hover:border-white after:duration-300 after:w-0 after:h-0 after:bg-white after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full hover:after:w-[calc(100%+2px)] hover:after:h-[calc(100%+2px)]'
	const socialLinkV1ButtonClassNames =
		'w-14 h-14 sm:w-16 sm:h-16 bg-zinc-950 !text-2xl flex justify-center items-center rounded-full hover:text-zinc-950'
	const socialLinkV2ButtonClassNames =
		'w-14 h-14 sm:w-12 sm:h-12 bg-zinc-800 border-2 border-transparent !text-xl flex justify-center items-center rounded-full hover:text-zinc-950 hover:border-white after:duration-300 after:w-0 after:h-0 after:bg-white after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full hover:after:w-full hover:after:h-full'

	const isBasicButton = context === 'basic'
	const buttonText = isBasicButton ? 'Download CV' : 'Preview'
	const buttonIcon = isBasicButton ? faCircleArrowDown : icon
	const yuliiaTkachenkoCVLink = '/CV_Yuliia_Tkachenko_Front-End-Developer.pdf'
	const buttonDownloadLink = isBasicButton ? yuliiaTkachenkoCVLink : undefined

	const getButtonClassNames = () => {
		switch (context) {
			case 'simple-button':
				return simpleButtonClassNames
			case 'social-link-v1':
				return socialLinkV1ButtonClassNames
			case 'social-link-v2':
				return socialLinkV2ButtonClassNames
		}
	}

	return context === 'basic' || context === 'preview-link' ? (
		<a
			href={isBasicButton ? yuliiaTkachenkoCVLink : link}
			target='_blank'
			rel='noopener noreferrer'
			download={buttonDownloadLink}
			className={classNames(
				'duration-300 text-base 2xl:text-lg relative font-bold',
				basicButtonClassNames
			)}
		>
			<BackgroundSvgFill id={SVG_IDS.backgroundFill6} borderRadius={30} />
			<span className='relative z-20'>{buttonText}</span>
			<FontAwesomeIcon
				className='ml-2 relative z-20'
				icon={buttonIcon!}
			/>
		</a>
	) : (
		<a
			href={link}
			target='_blank'
			rel='noopener noreferrer'
			className={classNames(
				'duration-300 text-base 2xl:text-lg relative z-40 font-bold group',
				getButtonClassNames()
			)}
		>
			{context !== 'social-link-v2' && (
				<BackgroundSvgFill
					id={SVG_IDS.backgroundFill5}
					borderRadius={32}
					className='scale-0 group-hover:scale-100 duration-300'
				/>
			)}
			<span className='relative z-20'>{children}</span>
			{icon && (
				<FontAwesomeIcon
					className={`${children && 'ml-2'} relative z-20`}
					icon={icon}
				/>
			)}
		</a>
	)
}

export default Button
