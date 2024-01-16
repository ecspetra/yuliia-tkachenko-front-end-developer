import { FC, ReactNode } from 'react'
import classNames from 'classnames'

type PropsType = {
	children: ReactNode
	context?: 'basic' | 'text-button' | 'social-link'
}

const Button: FC<PropsType> = ({ children, context = 'basic' }) => {
	const basicButtonClassNames =
		'bg-lime-400 text-black px-6 py-4 font-bold border-2 border-lime-400 hover:bg-transparent hover:text-white rounded-[32px]'
	const textButtonClassNames =
		'text-white bg-zinc-800 font-extralight hover:text-lime-400 border-2 border-zinc-700 px-6 py-4 rounded-[32px]'
	const socialLinkButtonClassNames =
		'w-full bg-zinc-950 p-5 !text-2xl text-lime-400 flex justify-center items-center rounded-full'

	const getButtonClassNames = () => {
		switch (context) {
			case 'basic':
				return basicButtonClassNames
			case 'text-button':
				return textButtonClassNames
			case 'social-link':
				return socialLinkButtonClassNames
		}
	}

	return (
		<button
			className={classNames(
				'duration-300 text-lg',
				getButtonClassNames()
			)}
		>
			{children}
		</button>
	)
}

export default Button
