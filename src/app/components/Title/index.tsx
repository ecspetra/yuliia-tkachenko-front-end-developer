import { FC, RefObject, ReactNode } from 'react'
import classNames from 'classnames'
import TextSVG from '@/app/components/TextSVG'

type PropsType = {
	children: ReactNode
	variant?: 'h1' | 'h2' | 'h3' | 'h3-large'
	className?: string
	titleRef?: RefObject<HTMLHeadingElement>
}

const Title: FC<PropsType> = ({
	children,
	variant = 'h2',
	className,
	titleRef,
}) => {
	const getTitleVariant = () => {
		switch (variant) {
			case 'h1':
				return (
					<h1
						className={classNames(
							'text-5xl sm:text-7xl 2xl:text-8xl font-bold mb-8 2xl:mb-12',
							className
						)}
						ref={titleRef}
					>
						{children}
					</h1>
				)
			case 'h2':
				return (
					<h2
						className={classNames(
							'text-3xl sm:text-4xl 2xl:text-5xl !leading-tight font-semibold mb-8 2xl:mb-12',
							className
						)}
					>
						{children}
					</h2>
				)
			case 'h3':
				return (
					<h3
						className={classNames(
							'text-base !leading-tight font-bold text-global-color-two-scheme-1 mb-4 uppercase tracking-[4px]',
							className
						)}
					>
						<TextSVG text={children as string} />
					</h3>
				)
			case 'h3-large':
				return (
					<h3
						className={classNames(
							'font-bold !leading-tight uppercase tracking-[4px] text-lg sm:text-xl',
							className
						)}
					>
						{children}
					</h3>
				)
		}
	}

	return getTitleVariant()
}

export default Title
