import { FC } from 'react'
import classNames from 'classnames'
import Title from '@/app/components/Title'
import { HEADER_ANCHORS, LINK_TO_TOP } from '@/constants/anchors'
import useHeaderAnimation from '@/hooks/useHeaderAnimation'
import { SVG_IDS } from '@/constants/svgUniqueKeys'
import BackgroundSvgFill from '@/app/assets/images/BackgroundSvgFill'

type PropsType = {
	className: string
}

const Header: FC<PropsType> = ({ className }) => {
	const { activeAnchor, isScrolled } = useHeaderAnimation()

	const linkClassNames =
		'relative duration-300 hover:text-white px-4 py-4 -mb-4 group'

	const linkBorderClassNames = (anchor: string) =>
		classNames(
			'duration-300 w-0 h-0.5 absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:w-full',
			{
				'!w-4': anchor.toLowerCase() === activeAnchor && isScrolled,
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
					className='duration-300 pr-4 pb-4 -mb-4 group'
				>
					<Title
						variant='h3-large'
						className='border-none relative !text-sm pl-4'
					>
						<span className='w-[2px] h-14 absolute bottom-0 left-0 duration-300 group-hover:-bottom-5'>
							<BackgroundSvgFill
								id={SVG_IDS.backgroundFill2}
								borderRadius={0}
							/>
						</span>
						Yuliia
						<br />
						Tkachenko
					</Title>
				</a>
				<nav className='flex justify-end items-center text-zinc-400'>
					{HEADER_ANCHORS.map(([key, value]) => (
						<a key={key} href={value} className={linkClassNames}>
							<span className={linkBorderClassNames(key)}>
								<BackgroundSvgFill
									id={SVG_IDS.backgroundFill2}
									borderRadius={0}
								/>
							</span>
							{key}
						</a>
					))}
				</nav>
			</div>
		</header>
	)
}

export default Header
