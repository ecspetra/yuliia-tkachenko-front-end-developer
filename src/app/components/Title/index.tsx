import { FC, RefObject, ReactNode } from 'react'
import classNames from 'classnames'

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
							'text-8xl font-bold mb-12',
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
							'text-5xl leading-tight font-semibold mb-12',
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
							'text-base font-bold text-global-color-two mb-4 uppercase tracking-[4px]',
							className
						)}
					>
						{children}
					</h3>
				)
			case 'h3-large':
				return (
					<h3
						className={classNames(
							'font-bold uppercase tracking-[4px] text-xl',
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
