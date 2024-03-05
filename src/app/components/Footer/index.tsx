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
		<p className='mb-2'>Designed and developed by Yuliia Tkachenko, 2024</p>
		<a
			href='https://github.com/ecspetra/yuliia-tkachenko-front-end-developer'
			target='_blank'
			className='border-b border-b-zinc-500'
		>
			Link to repository
		</a>
	</footer>
)

export default Footer
