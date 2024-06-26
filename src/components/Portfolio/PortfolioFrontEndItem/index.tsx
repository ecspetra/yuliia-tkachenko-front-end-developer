import { FC, useRef } from 'react'
import Title from '@/app/components/Title'
import Tag from '@/components/Tag'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import Button from '@/app/components/Button'
import usePortfolioImagesAnimation from '@/hooks/usePortfolioImagesAnimation'
import useParallax from '@/hooks/useParallax'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const RadialGradientCircle = dynamic(
	() => import('@/app/assets/images/RadialGradientCircle'),
	{ ssr: false }
)

const CircleShape = dynamic(() => import('@/app/assets/images/CircleShape'), {
	ssr: false,
})

type PortfolioFrontEndItemType = {
	title: string
	description: string
	repositoryLink: string
	previewLink: string
	techStack: string[]
	images: string[]
	notes?: string
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
		techStack,
		images,
		notes,
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
		<div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-16 mb-14 lg:mb-40 last:mb-0'>
			<div
				className={`w-full sm:max-w-[80%] lg:max-w-1/2 relative ${
					isEven ? 'lg:order-last' : 'lg:order-first'
				}`}
			>
				<RadialGradientCircle
					color={isEven ? 'global-color-two' : 'global-color-three'}
					className='w-[180vw] h-[180vw] sm:w-[120vw] sm:h-[120vw] lg:w-[120vh] lg:h-[120vh] 2xl:w-[1300px] 2xl:h-[1300px] absolute top-[40%] left-[25%] -translate-y-1/2 -translate-x-1/2 opacity-30'
				/>
				{isShowLargeRadialGradientCircle && (
					<RadialGradientCircle
						color={isEven ? 'global-color-one' : 'global-color-two'}
						className='w-[160vw] h-[160vw] sm:w-[100vw] sm:h-[100vw] lg:w-[100vh] lg:h-[100vh] 2xl:w-[800px] 2xl:h-[800px] absolute top-[80%] left-[80%] -translate-y-1/2 -translate-x-1/2 opacity-30'
					/>
				)}
				{isShowCircleShape && (
					<div
						ref={circleRef}
						className='w-12 h-12 absolute top-[20%] -left-[5%] lg:-left-[15%] z-20 invisible'
					>
						<CircleShape className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
					</div>
				)}
				<div
					ref={bigImageRef}
					className='aspect-[4/3] w-full h-full bg-zinc-800 relative z-10 rounded-xl sm:rounded-3xl'
				>
					<Image
						className='w-full h-full rounded-xl sm:rounded-3xl object-cover mix-blend-luminosity'
						src={images[0]}
						alt='portfolio-project'
						layout='fill'
						loading='eager'
					/>
				</div>
				<div
					ref={smallImageRef}
					className='aspect-[4/3] w-full h-auto max-w-[60%] lg:max-w-80 bg-zinc-800 absolute -bottom-6 -right-6 z-10 rounded-xl sm:rounded-3xl border border-zinc-700'
				>
					<Image
						className='w-full h-full rounded-xl sm:rounded-3xl object-cover mix-blend-luminosity'
						src={images[1]}
						alt='portfolio-project'
						layout='fill'
						loading='eager'
					/>
				</div>
			</div>
			<div
				className={`w-full relative z-40 max-w-1/2 text-center lg:text-left ${
					isEven ? 'lg:order-first' : 'lg:order-last'
				}`}
			>
				<Title variant='h3-large' className='border-none mb-8 relative'>
					{title}
				</Title>
				<p className='flex justify-center lg:justify-start items-start flex-wrap mb-8'>
					<span className='mr-4'>Created with:</span>
					{techStack.map((item, idx) => (
						<Tag key={idx} tag={item} />
					))}
				</p>
				<p className='mb-8'>{description}</p>
				{notes && (
					<p className='mb-8 text-sm text-zinc-500'>* {notes}</p>
				)}
				<div className='max-w-md mx-auto lg:mx-0 lg:max-w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-start items-center gap-6'>
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
