import { FC, useRef } from 'react'
import Title from '@/app/components/Title'
import Tag from '@/components/Tag'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import Button from '@/app/components/Button'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import CircleShape from '@/app/assets/images/CircleShape'
import usePortfolioImagesAnimation from '@/hooks/usePortfolioImagesAnimation'
import { SVG_IDS } from '@/constants/svgUniqueKeys'
import useParallax from '@/hooks/useParallax'

type PortfolioFrontEndItemType = {
	title: string
	description: string
	repositoryLink: string
	previewLink: string
	teckStack: string[]
	images: { src: string }[]
}

type PropsType = {
	project: PortfolioFrontEndItemType
	isEven: boolean
	idx: number
}

const PortfolioFrontEndItem: FC<PropsType> = ({
	project: {
		title,
		description,
		repositoryLink,
		previewLink,
		teckStack,
		images,
	},
	isEven,
	idx,
}) => {
	const bigImageRef = useRef<HTMLDivElement>(null)
	const smallImageRef = useRef<HTMLDivElement>(null)
	const circleRef = useRef<HTMLDivElement>(null)
	usePortfolioImagesAnimation(bigImageRef, 'bigImage')
	usePortfolioImagesAnimation(smallImageRef, 'smallImage')
	const isShowLargeRadialGradientCircle = idx !== 2
	const isShowCircleShape = idx === 1
	useParallax(
		[{ shapeRef: circleRef, shiftXValue: 100, shiftYValue: 250 }],
		'portfolio'
	)

	return (
		<div className='flex justify-between items-center gap-16 mb-40'>
			<div
				className={`w-full max-w-1/2 relative ${
					isEven ? 'order-last' : 'order-first'
				}`}
			>
				<RadialGradientCircle
					id={SVG_IDS.circle14}
					color={
						isEven
							? 'global-color-two-scheme-1'
							: 'global-color-three-scheme-1'
					}
					className='scale-[3] absolute -bottom-[30%] -right-[20%] opacity-20'
				/>
				{isShowLargeRadialGradientCircle && (
					<RadialGradientCircle
						id={SVG_IDS.circle15}
						color={
							isEven
								? 'global-color-one-scheme-1'
								: 'global-color-two-scheme-1'
						}
						className='scale-[4] absolute bottom-[10%] right-0 opacity-15'
					/>
				)}
				{isShowCircleShape && (
					<div
						ref={circleRef}
						className='w-12 h-12 absolute top-[20%] -left-[15%] z-20 invisible'
					>
						<CircleShape className='w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
					</div>
				)}
				<div
					ref={bigImageRef}
					className='bg-zinc-800 relative z-10 rounded-3xl'
				>
					<img
						className='aspect-[4/3] rounded-3xl object-cover mix-blend-luminosity'
						src={images[0].src}
						alt='portfolio-project'
					/>
				</div>
				<div
					ref={smallImageRef}
					className='max-w-80 bg-zinc-800 aspect-[4/3] absolute -bottom-6 -right-6 z-10 rounded-3xl border border-zinc-700'
				>
					<img
						className='aspect-[4/3] rounded-3xl object-cover mix-blend-luminosity'
						src={images[1].src}
						alt='portfolio-project'
					/>
				</div>
			</div>
			<div
				className={`w-full relative z-40 max-w-1/2 ${
					isEven ? 'order-first' : 'order-last'
				}`}
			>
				<Title variant='h3-large' className='border-none mb-8 relative'>
					{title}
				</Title>
				<p className='flex justify-start items-start flex-wrap mb-8'>
					<span className='mr-4'>Created with:</span>
					{teckStack.map((item, idx) => (
						<Tag key={idx} tag={item} />
					))}
				</p>
				<p className='mb-8'>{description}</p>
				<div className='flex justify-start items-center gap-4'>
					<Button
						context='preview-link'
						link={previewLink}
						icon={faSquareArrowUpRight}
					/>
					<Button
						context='simple-button'
						link={repositoryLink}
						icon={faGithub}
					>
						GitHub repository
					</Button>
				</div>
			</div>
		</div>
	)
}

export default PortfolioFrontEndItem
