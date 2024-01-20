import { FC } from 'react'
import classNames from 'classnames'
import Title from '@/app/components/Title'

type PropsType = {
	className: string
}

const Header: FC<PropsType> = ({ className }) => (
	<div
		className={classNames(
			'bg-zinc-900 border-b border-zinc-700 min-h-12',
			className
		)}
	>
		<div className='container px-6 py-4 mx-auto flex justify-between items-end'>
			<Title
				variant='h3-large'
				className='border-none relative !text-sm pl-4 after:w-[1px] after:h-14 after:bg-lime-400 after:absolute after:bottom-0 after:left-0'
			>
				Yuliia
				<br />
				Tkachenko
			</Title>
			<nav className='flex justify-end items-center gap-8 text-zinc-400'>
				<a>About me</a>
				<a>Skills</a>
				<a>Experience</a>
				<a>Education</a>
				<a>Portfolio</a>
				<a>My CV</a>
			</nav>
		</div>
	</div>
)

export default Header
