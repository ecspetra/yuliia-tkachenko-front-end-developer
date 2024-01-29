import Title from '@/app/components/Title'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import CircleShape from '@/app/assets/images/CircleShape'
import LinesShape from '@/app/assets/images/LinesShape'
import bottomBannerImage from '@/app/assets/images/bottom-banner-image.jpg'
import Button from '@/app/components/Button'
import BackgroundGeometricShape from '@/app/assets/images/BackgroundGeometricShape'
import BlurCircleShape from '@/app/assets/images/BlurCircleShape'
import { useRef } from 'react'
import useUpDownShapeAnimation from '@/hooks/useUpDownShapeAnimation'
import { SVG_IDS } from '@/constants/svgUniqueKeys'
import TextSVG from '@/app/components/TextSVG'
import useParallax from '@/hooks/useParallax'

const BottomBanner = () => {
	const animatedGeometricShapeRef = useRef<HTMLDivElement>(null)
	const animatedBlurCircleRef = useRef<HTMLDivElement>(null)
	const circleRef = useRef<HTMLDivElement>(null)
	useUpDownShapeAnimation(animatedGeometricShapeRef, animatedBlurCircleRef)
	useParallax(
		[
			{
				shapeRef: circleRef,
				shiftXValue: -100,
				shiftYValue: -150,
			},
		],
		'cv'
	)

	return (
		<div
			className='relative min-h-screen flex justify-center items-center py-40 w-screen bg-zinc-950 overflow-hidden'
			id='cv'
		>
			<div className='container mx-auto px-6 h-full relative z-10 flex justify-between items-center gap-6'>
				<div className='max-w-[23vw] relative'>
					<BackgroundLinesShape className='w-[50vw] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-15 -scale-x-100 rotate-180' />
					<div
						ref={animatedGeometricShapeRef}
						className='w-[27vw] h-[27vw] absolute top-[10%] left-1/2 -translate-x-1/2 z-10'
					>
						<BackgroundGeometricShape
							id={SVG_IDS.backgroundShape5}
							variant='5'
							className='w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
						/>
					</div>
					<RadialGradientCircle
						id={SVG_IDS.circle16}
						color='global-color-two-scheme-1'
						size={1.6}
						className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-30'
					/>
					<RadialGradientCircle
						id={SVG_IDS.circle17}
						color='global-color-three-scheme-1'
						size={2.3}
						className='absolute top-0 -left-[10%] opacity-50'
					/>
					<RadialGradientCircle
						id={SVG_IDS.circle18}
						color='global-color-one-scheme-1'
						size={2.3}
						className='absolute bottom-0 -right-[15%] opacity-30'
					/>
					<div
						ref={animatedBlurCircleRef}
						className='w-24 h-24 absolute bottom-[50%] -right-[10%] z-20'
					>
						<BlurCircleShape className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
					</div>
					<div
						ref={circleRef}
						className='w-12 h-12 absolute -bottom-6 left-[10%] z-20 invisible'
					>
						<CircleShape className='w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
					</div>
					<LinesShape className='w-24 absolute top-[10%] right-0 z-20' />
					<img
						className='relative z-10 rounded-3xl'
						src={bottomBannerImage.src}
						alt='Bottom Banner'
					/>
				</div>
				<div className='relative max-w-2xl w-full z-40'>
					<Title variant='h3'>Resume</Title>
					<Title className='!text-7xl'>
						Want to see my <TextSVG text='CV' />?
						<br />
						Download it!
					</Title>
					<p className='mb-16'>I will be glad to work with you ;)</p>
					<Button />
				</div>
			</div>
		</div>
	)
}

export default BottomBanner
