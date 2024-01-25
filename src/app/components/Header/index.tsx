import { FC } from 'react'
import classNames from 'classnames'
import Title from '@/app/components/Title'
import { HEADER_ANCHORS, LINK_TO_TOP } from '@/constants/anchors'
import useHeaderAnimation from '@/hooks/useHeaderAnimation'

type PropsType = {
	className: string
}

const Header: FC<PropsType> = ({ className }) => {
	const { activeAnchor, isScrolled } = useHeaderAnimation()

	const linkClassNames = (anchor: string) =>
		classNames(
			'relative duration-300 hover:text-global-color-two px-4 py-4 -mb-4 after:duration-300 after:w-0 after:h-0.5 after:bg-global-color-two after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 hover:after:w-full',
			{
				'after:w-4':
					anchor.toLowerCase() === activeAnchor && isScrolled,
			}
		)

	return (
		<header
			className={classNames(
				'w-full bg-zinc-900/85 backdrop-blur-lg border-b border-zinc-700 min-h-12 fixed top-0 z-50',
				className
			)}
		>
			<div className='container px-6 py-4 mx-auto flex justify-between items-end'>
				<a
					href={LINK_TO_TOP}
					className='duration-300 pr-4 pb-4 -mb-4 hover:text-global-color-two group'
				>
					<Title
						variant='h3-large'
						className='border-none relative !text-sm pl-4 after:w-[1px] after:h-14 after:bg-global-color-two after:absolute after:bottom-0 after:left-0 after:duration-300 group-hover:after:-bottom-5'
					>
						Yuliia
						<br />
						Tkachenko
					</Title>
				</a>
				<nav className='flex justify-end items-center text-zinc-400'>
					{HEADER_ANCHORS.map(([key, value]) => (
						<a
							key={key}
							href={value}
							className={linkClassNames(key)}
						>
							{key}
						</a>
					))}
				</nav>
			</div>
		</header>
	)
}

export default Header
