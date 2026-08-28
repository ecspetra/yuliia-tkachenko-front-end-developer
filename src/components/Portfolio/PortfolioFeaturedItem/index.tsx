import Button from '@/app/components/Button'
import Title from '@/app/components/Title'
import Tag from '@/components/Tag'
import usePortfolioImagesAnimation from '@/hooks/usePortfolioImagesAnimation'
import {
	faChevronLeft,
	faChevronRight,
	faMagnifyingGlassPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'

const RadialGradientCircle = dynamic(
	() => import('@/app/assets/images/RadialGradientCircle'),
	{ ssr: false }
)

const BackgroundSvgFill = dynamic(
	() => import('@/app/assets/images/BackgroundSvgFill'),
	{ ssr: false }
)

type PortfolioFeaturedItemType = {
	title: string
	description: string
	repositoryLink?: string
	previewLink?: string
	techStack: string[]
	images: string[]
	notes?: string
}

type PropsType = {
	project: PortfolioFeaturedItemType
}

const PortfolioFeaturedItem: FC<PropsType> = ({
	project: {
		title,
		description,
		repositoryLink,
		previewLink,
		techStack,
		images,
		notes,
	},
}) => {
	const heroImageRef = useRef<HTMLDivElement>(null)
	const sliderRef = useRef<HTMLDivElement>(null)
	usePortfolioImagesAnimation(heroImageRef, 'bigImage')

	const [selectedIndex, setSelectedIndex] = useState(0)
	const mainImage = images[selectedIndex]

	const [canScrollLeft, setCanScrollLeft] = useState(false)
	const [canScrollRight, setCanScrollRight] = useState(false)

	const updateScrollFades = () => {
		const el = sliderRef.current
		if (!el) return
		setCanScrollLeft(el.scrollLeft > 4)
		setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
	}

	useEffect(() => {
		updateScrollFades()
		const el = sliderRef.current
		if (!el) return
		el.addEventListener('scroll', updateScrollFades, { passive: true })
		window.addEventListener('resize', updateScrollFades)
		return () => {
			el.removeEventListener('scroll', updateScrollFades)
			window.removeEventListener('resize', updateScrollFades)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [images.length])

	const scrollSlider = (direction: 'left' | 'right') => {
		const el = sliderRef.current
		if (!el) return
		const amount = el.clientWidth * 0.8
		el.scrollBy({
			left: direction === 'left' ? -amount : amount,
			behavior: 'smooth',
		})
	}

	return (
		<div className='relative mb-14 lg:mb-40 last:mb-0 w-full'>
			<RadialGradientCircle
				color='global-color-two'
				className='top-0 left-1/2 -z-10 absolute opacity-30 w-[160vw] sm:w-[70vw] lg:w-[60vh] 2xl:w-[900px] h-[160vw] sm:h-[70vw] lg:h-[60vh] 2xl:h-[900px] -translate-x-1/2 -translate-y-1/3 pointer-events-none'
			/>
			<Title variant='h3-large' className='!mb-8 border-none text-center'>
				{title}
			</Title>
			<div
				ref={heroImageRef}
				className='relative bg-zinc-800 mb-[6px] sm:mb-6 rounded-xl sm:rounded-3xl w-full aspect-[320/169] overflow-hidden'
			>
				<a
					href={mainImage}
					target='_blank'
					rel='noopener noreferrer'
					className='group block w-full h-full'
				>
					<BackgroundSvgFill
						borderRadius={24}
						isWithGradient={false}
						opacity={10}
						className='z-10 scale-0 group-hover:scale-125 duration-300'
					/>
					<span className='top-1/2 left-1/2 z-10 absolute flex justify-center items-center opacity-0 group-hover:opacity-100 rounded-full w-16 h-16 text-zinc-950 -translate-x-1/2 -translate-y-1/2 duration-300'>
						<BackgroundSvgFill borderRadius={32} />
						<FontAwesomeIcon
							className='z-20 relative'
							icon={faMagnifyingGlassPlus}
						/>
					</span>
					<span className='bottom-0 left-1/2 z-20 absolute w-0 group-hover:w-8 h-0.5 -translate-x-1/2 duration-300'>
						<BackgroundSvgFill borderRadius={0} />
					</span>
					<Image
						className='rounded-xl sm:rounded-3xl w-full h-full object-cover'
						src={mainImage}
						alt={`${title} main screenshot`}
						layout='fill'
						loading='eager'
					/>
				</a>
			</div>
			{images.length > 1 && (
				<div className='relative mb-10'>
					<div
						ref={sliderRef}
						className='flex gap-1 sm:gap-4 pb-2 overflow-x-auto scroll-smooth snap-mandatory snap-x no-scrollbar'
					>
						{images.map((image, idx) => (
							<button
								key={image}
								type='button'
								onClick={() => setSelectedIndex(idx)}
								aria-label={`Show screenshot ${idx + 1}`}
								aria-pressed={idx === selectedIndex}
								className={`relative rounded-xl sm:rounded-3xl w-[25%] sm:w-[35%] lg:w-[30%] aspect-[16/10] overflow-hidden duration-300 snap-center shrink-0 border-2 ${
									idx === selectedIndex
										? 'border-white'
										: 'border-zinc-700 hover:border-zinc-500'
								}`}
							>
								<Image
									className='w-full h-full object-cover'
									src={image}
									alt={`${title} screenshot ${idx + 1}`}
									layout='fill'
									loading='lazy'
								/>
							</button>
						))}
					</div>
					<div
						aria-hidden
						className={`top-0 bottom-2 left-0 flex justify-start items-center z-10 absolute w-8 sm:w-16 bg-gradient-to-r from-background-color to-transparent duration-300 ${
							canScrollLeft ? 'opacity-100' : 'opacity-0'
						}`}
					>
						<Button
							context='icon-v2'
							link={repositoryLink}
							icon={faChevronLeft}
							onClick={() => scrollSlider('left')}
							buttonClassNames={`z-20 ${
								canScrollLeft
									? 'opacity-100'
									: 'opacity-0 pointer-events-none'
							}`}
							isSmallButton
						/>
					</div>
					<div
						aria-hidden
						className={`top-0 right-0 bottom-2 flex justify-end items-center z-10 absolute w-8 sm:w-16 bg-gradient-to-l from-background-color to-transparent duration-300 ${
							canScrollRight ? 'opacity-100' : 'opacity-0'
						}`}
					>
						<Button
							context='icon-v2'
							link={repositoryLink}
							icon={faChevronRight}
							onClick={() => scrollSlider('right')}
							buttonClassNames={`z-20 ${
								canScrollRight
									? 'opacity-100'
									: 'opacity-0 pointer-events-none'
							}`}
							isSmallButton
						/>
					</div>
				</div>
			)}
			<div className='mx-auto max-w-2xl text-center'>
				<p className='flex flex-wrap justify-center items-start mb-6'>
					<span className='mr-4'>Created with:</span>
					{techStack.map((item, idx) => (
						<Tag key={idx} tag={item} />
					))}
				</p>
				<p className='mb-6'>{description}</p>
				{notes && (
					<p className='mb-6 text-zinc-500 text-sm'>* {notes}</p>
				)}
			</div>
		</div>
	)
}

export default PortfolioFeaturedItem
