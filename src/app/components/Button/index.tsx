import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import dynamic from 'next/dynamic'

const RadialGradientCircle = dynamic(
	() => import('@/app/assets/images/RadialGradientCircle'),
	{ ssr: false }
)

const BackgroundSvgFill = dynamic(
	() => import('@/app/assets/images/BackgroundSvgFill'),
	{ ssr: false }
)

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
	const basicButtonClassNames = `text-sm sm:text-base overflow-hidden text-zinc-950 w-full lg:w-fit flex justify-center items-center px-6 py-4 rounded-[32px] group-hover:text-white group-hover:scale-[1.1] after:pointer-events-none after:duration-300 after:w-14 after:h-14 after:opacity-0 after:bg-zinc-900 after:absolute after:top-full after:rounded-full group-hover:after:w-[calc(100%-4px)] group-hover:after:h-[calc(100%-4px)] group-hover:after:top-1/2 group-hover:after:-translate-y-1/2 group-hover:after:opacity-100`
	const simpleButtonClassNames =
		'text-sm sm:text-base overflow-hidden bg-zinc-800 w-full lg:w-fit flex justify-center items-center border-2 border-zinc-700 px-6 py-4 rounded-[32px] hover:text-zinc-950 hover:border-white hover:scale-[1.1] after:duration-300 after:w-14 after:h-14 after:opacity-0 after:bg-white after:absolute after:top-full hover:after:-translate-y-1/2 after:rounded-full hover:after:w-[calc(100%+2px)] hover:after:h-[calc(100%+2px)] hover:after:top-1/2 hover:after:opacity-100'
	const socialLinkV1ButtonClassNames =
		'w-14 h-14 sm:w-16 sm:h-16 bg-zinc-950 !text-2xl flex justify-center items-center rounded-full hover:text-zinc-950 hover:scale-[1.1]'
	const socialLinkV2ButtonClassNames =
		'w-14 h-14 sm:w-12 sm:h-12 bg-zinc-800 border-2 border-transparent !text-xl flex justify-center items-center rounded-full hover:text-zinc-950 hover:border-white hover:scale-[1.1] after:duration-300 after:w-0 after:h-0 after:bg-white after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full hover:after:w-full hover:after:h-full'

	const isBasicButton = context === 'basic'
	const isSimpleButton = context === 'simple-button'
	const buttonText = isBasicButton ? 'Download Resume' : 'Preview'
	const buttonIcon = isBasicButton ? faCircleArrowDown : icon
	const resumeFileName = 'Resume_Yuliia_Tkachenko_Front-End-Developer.pdf'
	const yuliiaTkachenkoResumeLink = `/resume/${resumeFileName}`

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
			href={isBasicButton ? yuliiaTkachenkoResumeLink : link}
			target='_blank'
			rel='noopener noreferrer'
			download={isBasicButton ? resumeFileName : undefined}
			className='relative block w-full sm:w-fit group'
		>
			<RadialGradientCircle
				color='global-color-two'
				className='w-[100%] h-[100%] scale-x-[6] scale-y-[4] absolute top-[calc(50%+10px)] -translate-y-1/2 opacity-0 group-hover:opacity-20 group-hover:scale-x-[7] group-hover:scale-y-[5] group-hover:top-[calc(50%+40px)] pointer-events-none duration-700'
			/>
			<span
				className={classNames(
					'duration-300 text-base 2xl:text-lg font-bold relative',
					basicButtonClassNames
				)}
			>
				<BackgroundSvgFill borderRadius={30} />
				<span className='relative z-20 duration-300'>{buttonText}</span>
				<FontAwesomeIcon
					className='relative z-20 w-5 h-5 ml-2 group-hover:w-7 group-hover:h-7 group-hover:ml-7 duration-300'
					icon={buttonIcon!}
				/>
			</span>
		</a>
	) : (
		<a
			href={link}
			target='_blank'
			rel='noopener noreferrer'
			className='relative block w-full sm:w-fit group'
		>
			{isSimpleButton && (
				<RadialGradientCircle
					color='global-color-two'
					className='w-[100%] h-[100%] scale-x-[6] scale-y-[4] absolute top-[calc(50%+10px)] -translate-y-1/2 opacity-0 group-hover:opacity-20 group-hover:scale-x-[7] group-hover:scale-y-[5] group-hover:top-[calc(50%+40px)] pointer-events-none duration-700'
				/>
			)}
			<span
				className={classNames(
					'duration-300 text-base 2xl:text-lg relative z-40 font-bold group',
					getButtonClassNames()
				)}
			>
				{context !== 'social-link-v2' && !isSimpleButton && (
					<BackgroundSvgFill
						borderRadius={32}
						className='scale-0 group-hover:scale-100 duration-300'
					/>
				)}
				<span className='relative z-20'>{children}</span>
				{icon && (
					<FontAwesomeIcon
						className={`${
							children && 'ml-2 group-hover:ml-7'
						} relative z-20 w-5 h-5 ${
							isSimpleButton &&
							'duration-300 group-hover:w-7 group-hover:h-7'
						}`}
						icon={icon}
					/>
				)}
			</span>
		</a>
	)
}

export default Button
