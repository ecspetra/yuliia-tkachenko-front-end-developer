import { FC } from 'react'
import classNames from 'classnames'
import Title from '@/app/components/Title'
import { HEADER_ANCHORS, LINK_TO_TOP } from '@/constants/anchors'
import useHeaderAnimation from '@/hooks/useHeaderAnimation'
import { generateRandomId } from '@/handlers/generateRandomId'
import CloseButton from '@/app/components/Button/CloseButton'
import useToggleHeaderMenu from '@/hooks/useToggleHeaderMenu'
import dynamic from 'next/dynamic'

const BackgroundSvgFill = dynamic(
	() => import('@/app/assets/images/BackgroundSvgFill'),
	{ ssr: false }
)

type PropsType = {
	className: string
}

const Header: FC<PropsType> = ({ className }) => {
	const { activeAnchor, isScrolled } = useHeaderAnimation()
	const { isMenuHidden, toggleIsMenuHidden } = useToggleHeaderMenu()

	const linkClassNames = (anchor: string) =>
		classNames(
			'relative w-full duration-300 hover:text-white px-6 py-4 md:px-4 md:py-2 xl:py-4 group',
			{
				'text-white':
					anchor.toLowerCase() === activeAnchor && isScrolled,
			}
		)

	const linkBorderClassNames = (anchor: string) =>
		classNames(
			'duration-300 w-0 h-0.5 absolute bottom-0 left-6 md:left-1/2 md:-translate-x-1/2 group-hover:w-full',
			{
				'!w-full md:!w-4':
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
			<div className='container px-6 py-2 xl:py-4 mx-auto flex justify-between items-end'>
				<a
					href={LINK_TO_TOP}
					className='duration-300 pr-4 pb-4 -mb-4 group'
				>
					<Title
						variant='h3-large'
						className='border-none relative !text-xs xl:!text-sm pl-4'
					>
						<span className='w-[2px] h-10 xl:h-14 absolute bottom-0 left-0 duration-300 group-hover:-bottom-5'>
							<BackgroundSvgFill borderRadius={0} />
						</span>
						Yuliia
						<br />
						Tkachenko
					</Title>
				</a>
				<nav className='relative'>
					<CloseButton
						isMenuHidden={isMenuHidden}
						toggleIsMenuHidden={toggleIsMenuHidden}
					/>
					<ul
						id='header-menu'
						className='hidden-menu duration-1000 h-screen pt-16 md:!w-auto md:h-auto fixed top-0 md:static bg-zinc-950 flex flex-col md:flex-row justify-start md:justify-end items-start md:items-center text-zinc-400 md:p-0 md:bg-transparent'
					>
						{HEADER_ANCHORS.map(([key, value]) => (
							<li
								key={key}
								className='w-full flex mb-0 md:-mb-2 xl:-mb-4'
							>
								<a
									href={value}
									className={linkClassNames(key)}
									onClick={toggleIsMenuHidden}
								>
									<span className={linkBorderClassNames(key)}>
										<BackgroundSvgFill borderRadius={0} />
									</span>
									{key}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
