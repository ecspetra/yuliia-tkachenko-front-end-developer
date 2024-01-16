import { FC, ReactNode } from 'react'
import classNames from 'classnames'

type PropsType = {
	children: ReactNode
	variant?: 'h1' | 'h2' | 'h3'
	className?: string
}

const Title: FC<PropsType> = ({ children, variant = 'h2', className }) => {
	const getTitleVariant = () => {
		switch (variant) {
			case 'h1':
				return (
					<h1
						className={classNames(
							'text-8xl font-bold text-zinc-400 mb-12',
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
							'text-5xl font-semibold text-zinc-400 mb-12',
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
							'text-lg font-semibold text-lime-400 mb-4 uppercase tracking-widest',
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
