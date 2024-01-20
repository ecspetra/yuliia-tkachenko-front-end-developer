import { FC } from 'react'
import classNames from 'classnames'

type PropsType = {
	className: string
}

const Footer: FC<PropsType> = ({ className }) => (
	<div
		className={classNames(
			'w-screen bg-zinc-950 p-4 min-h-12 text-center text-sm text-zinc-500',
			className
		)}
	>
		<p>Created by Yuliia Tkachenko, 2024</p>
	</div>
)

export default Footer
