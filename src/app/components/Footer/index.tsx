import { FC } from 'react'
import classNames from 'classnames'

type PropsType = {
	className: string
}

const Footer: FC<PropsType> = ({ className }) => (
	<footer
		className={classNames(
			'w-screen bg-zinc-950 p-4 text-center text-sm text-zinc-500',
			className
		)}
	>
		<p>Designed and developed by Yuliia Tkachenko, 2024</p>
	</footer>
)

export default Footer
