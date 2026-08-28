import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import { FC, ReactNode } from 'react'

const RadialGradientCircle = dynamic(
	() => import('@/app/assets/images/RadialGradientCircle'),
	{ ssr: false }
)

const BackgroundSvgFill = dynamic(
	() => import('@/app/assets/images/BackgroundSvgFill'),
	{ ssr: false }
)

const RESUME_FILE_NAME = 'Resume_Yuliia_Tkachenko_Front-End-Developer.pdf'
const RESUME_LINK = `/resume/${RESUME_FILE_NAME}`

const EXTERNAL_LINK_PROPS = {
	target: '_blank',
	rel: 'noopener noreferrer',
} as const

type ButtonContext = 'primary' | 'secondary' | 'icon-v1' | 'icon-v2'

type PropsType = {
	link?: string
	icon?: IconProp
	onClick?: () => void
	children?: ReactNode
	context?: ButtonContext
	isDownloadLink?: boolean
	isSmallButton?: boolean
	buttonClassNames?: string
}

const getContextClassNames = (
	isSmallButton?: boolean
): Record<ButtonContext, string> => ({
	primary:
		'text-sm sm:text-base h-[56px] overflow-hidden text-zinc-950 w-full lg:w-fit flex justify-center items-center px-6 py-4 rounded-[32px] group-hover:text-white group-hover:scale-[1.1] after:pointer-events-none after:duration-300 after:w-14 after:h-14 after:opacity-0 after:bg-zinc-900 after:absolute after:top-full after:rounded-full group-hover:after:w-[calc(100%-4px)] group-hover:after:h-[calc(100%-4px)] group-hover:after:top-1/2 group-hover:after:-translate-y-1/2 group-hover:after:opacity-100',
	secondary:
		'text-sm sm:text-base h-[56px] overflow-hidden bg-zinc-800 w-full lg:w-fit flex justify-center items-center border-2 border-zinc-700 px-6 py-4 rounded-[32px] group-hover:text-zinc-950 group-hover:border-white group-hover:scale-[1.1] after:duration-300 after:w-14 after:h-14 after:opacity-0 after:bg-white after:absolute after:top-full group-hover:after:-translate-y-1/2 after:rounded-full group-hover:after:w-[calc(100%+2px)] group-hover:after:h-[calc(100%+2px)] group-hover:after:top-1/2 group-hover:after:opacity-100',
	'icon-v1':
		'w-14 h-14 sm:w-16 sm:h-16 bg-zinc-950 !text-2xl flex justify-center items-center rounded-full group-hover:text-zinc-950 group-hover:scale-[1.1]',
	'icon-v2': `${
		isSmallButton ? 'w-8 h-8' : 'w-14 h-14'
	} sm:w-12 sm:h-12 bg-zinc-800 border-2 border-transparent !text-xl flex justify-center items-center rounded-full group-hover:text-zinc-950 group-hover:border-white group-hover:scale-[1.1] after:duration-300 after:w-0 after:h-0 after:bg-white after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full group-hover:after:w-full group-hover:after:h-full`,
})

const CONTEXT_ROUNDED: Record<ButtonContext, string> = {
	primary: 'rounded-[32px]',
	secondary: 'rounded-[32px]',
	'icon-v1': 'rounded-full',
	'icon-v2': 'rounded-full',
}

const Button: FC<PropsType> = ({
	link,
	icon,
	onClick,
	children,
	context = 'primary',
	isDownloadLink = false,
	isSmallButton,
	buttonClassNames = '',
}) => {
	const isPrimary = context === 'primary'
	const isSecondary = context === 'secondary'
	const isIconV1 = context === 'icon-v1'
	const CONTEXT_CLASSNAMES = getContextClassNames(isSmallButton)

	const href = isPrimary && isDownloadLink ? RESUME_LINK : link
	const download = isPrimary && isDownloadLink ? RESUME_FILE_NAME : undefined

	const showRadialGradient = isPrimary || isSecondary
	const showBackgroundFill = isPrimary || isIconV1

	return (
		<a
			href={href}
			download={download}
			className={classNames(
				'group block relative w-full sm:w-fit outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900',
				CONTEXT_ROUNDED[context]
			)}
			onClick={onClick}
			{...EXTERNAL_LINK_PROPS}
		>
			{showRadialGradient && (
				<RadialGradientCircle
					color='global-color-two'
					className='top-[calc(50%+10px)] group-hover:top-[calc(50%+40px)] absolute opacity-0 group-hover:opacity-20 w-[100%] h-[100%] scale-x-[6] group-hover:scale-x-[7] scale-y-[4] group-hover:scale-y-[5] -translate-y-1/2 duration-700 pointer-events-none'
				/>
			)}
			<span
				className={classNames(
					'relative duration-300 text-base 2xl:text-lg font-bold cursor-pointer',
					CONTEXT_CLASSNAMES[context],
					buttonClassNames
				)}
			>
				{showBackgroundFill && (
					<BackgroundSvgFill
						borderRadius={isPrimary ? 30 : 32}
						className={
							isPrimary
								? undefined
								: 'scale-0 group-hover:scale-100 duration-300'
						}
					/>
				)}
				{children && (
					<span className='z-20 relative duration-300'>
						{children}
					</span>
				)}
				{icon && (
					<FontAwesomeIcon
						icon={icon}
						className={classNames('relative z-20 w-5 h-5', {
							'ml-2 group-hover:ml-7':
								isPrimary || Boolean(children),
							'group-hover:w-7 group-hover:h-7 duration-300':
								isPrimary || isSecondary,
						})}
					/>
				)}
			</span>
		</a>
	)
}

export default Button
