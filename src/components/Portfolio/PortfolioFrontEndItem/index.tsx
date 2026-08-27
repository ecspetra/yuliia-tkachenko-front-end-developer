import Button from '@/app/components/Button'
import Title from '@/app/components/Title'
import Tag from '@/components/Tag'
import useParallax from '@/hooks/useParallax'
import usePortfolioImagesAnimation from '@/hooks/usePortfolioImagesAnimation'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC, useRef } from 'react'

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
	repositoryLink?: string
	previewLink?: string
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
	const extraImages = images.slice(2)
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
					className='top-[40%] left-[25%] absolute opacity-30 w-[180vw] sm:w-[120vw] lg:w-[120vh] 2xl:w-[1300px] h-[180vw] sm:h-[120vw] lg:h-[120vh] 2xl:h-[1300px] -translate-x-1/2 -translate-y-1/2'
				/>
				{isShowLargeRadialGradientCircle && (
					<RadialGradientCircle
						color={isEven ? 'global-color-one' : 'global-color-two'}
						className='top-[80%] left-[80%] absolute opacity-30 w-[160vw] sm:w-[100vw] lg:w-[100vh] 2xl:w-[800px] h-[160vw] sm:h-[100vw] lg:h-[100vh] 2xl:h-[800px] -translate-x-1/2 -translate-y-1/2'
					/>
				)}
				{isShowCircleShape && (
					<div
						ref={circleRef}
						className='invisible top-[20%] -left-[5%] lg:-left-[15%] z-20 absolute w-12 h-12'
					>
						<CircleShape className='top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2' />
					</div>
				)}
				<div
					ref={bigImageRef}
					className='z-10 relative bg-zinc-800 rounded-xl sm:rounded-3xl w-full h-full aspect-[4/3]'
				>
					<a
						href={images[0]}
						target='_blank'
						rel='noopener noreferrer'
						className='block w-full h-full'
					>
						<Image
							className='rounded-xl sm:rounded-3xl w-full h-full object-cover mix-blend-luminosity'
							src={images[0]}
							alt='portfolio-project'
							layout='fill'
							loading='eager'
						/>
					</a>
				</div>
				<div
					ref={smallImageRef}
					className='-right-6 -bottom-6 z-10 absolute bg-zinc-800 border border-zinc-700 rounded-xl sm:rounded-3xl w-full max-w-[60%] lg:max-w-80 h-auto aspect-[4/3]'
				>
					<a
						href={images[1]}
						target='_blank'
						rel='noopener noreferrer'
						className='block w-full h-full'
					>
						<Image
							className='rounded-xl sm:rounded-3xl w-full h-full object-cover mix-blend-luminosity'
							src={images[1]}
							alt='portfolio-project'
							layout='fill'
							loading='eager'
						/>
					</a>
				</div>
			</div>
			<div
				className={`w-full relative z-40 max-w-1/2 text-center lg:text-left ${
					isEven ? 'lg:order-first' : 'lg:order-last'
				}`}
			>
				<Title variant='h3-large' className='relative mb-8 border-none'>
					{title}
				</Title>
				<p className='flex flex-wrap justify-center lg:justify-start items-start mb-8'>
					<span className='mr-4'>Created with:</span>
					{techStack.map((item, idx) => (
						<Tag key={idx} tag={item} />
					))}
				</p>
				<p className='mb-8'>{description}</p>
				{notes && (
					<p className='mb-8 text-zinc-500 text-sm'>* {notes}</p>
				)}
				{extraImages.length > 0 && (
					<div className='mb-8'>
						<p className='mb-3 text-zinc-500 text-sm'>
							Screenshots:
						</p>
						<div className='flex flex-wrap justify-center lg:justify-start gap-3'>
							{extraImages.map((image, imageIdx) => (
								<a
									key={image}
									href={image}
									target='_blank'
									rel='noopener noreferrer'
									className='block relative border border-zinc-700 hover:border-white rounded-lg w-16 h-16 overflow-hidden duration-300 shrink-0'
								>
									<Image
										className='w-full h-full object-cover mix-blend-luminosity'
										src={image}
										alt={`${title} screenshot ${
											imageIdx + 3
										}`}
										layout='fill'
										loading='lazy'
									/>
								</a>
							))}
						</div>
					</div>
				)}
				{(previewLink || repositoryLink) && (
					<div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-start items-center gap-6 mx-auto lg:mx-0 lg:max-w-full max-w-md'>
						{previewLink && (
							<Button
								context='primary'
								link={previewLink}
								icon={faSquareArrowUpRight}
							>
								Preview
							</Button>
						)}
						{repositoryLink && (
							<Button
								context='secondary'
								link={repositoryLink}
								icon={faGithub}
							>
								GitHub repository
							</Button>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default PortfolioFrontEndItem
