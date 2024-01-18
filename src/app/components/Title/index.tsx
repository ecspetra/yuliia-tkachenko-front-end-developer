import { FC, ReactNode } from 'react'
import classNames from 'classnames'

type PropsType = {
	children: ReactNode
	variant?: 'h1' | 'h2' | 'h3' | 'h3-large'
	className?: string
}

const Title: FC<PropsType> = ({ children, variant = 'h2', className }) => {
	const getTitleVariant = () => {
		switch (variant) {
			case 'h1':
				return (
					<h1
						className={classNames(
							'text-8xl font-bold mb-12',
							className
						)}
					>
						{children}
					</h1>
				)
			case 'h2':
				return (
					<h2
						className={classNames(
							'text-5xl font-semibold mb-12',
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
							'text-base font-extrabold text-lime-400 mb-4 uppercase tracking-[4px]',
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
							'font-extrabold uppercase tracking-[4px] text-xl border-b-2 border-lime-400',
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
