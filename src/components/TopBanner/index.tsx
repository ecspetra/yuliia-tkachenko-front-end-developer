import Title from '@/app/components/Title'
import topBannerImage from '@/app/assets/images/top-banner-image.jpg'
import Button from '@/app/components/Button'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import BackgroundGeometricShape from '@/app/assets/images/BackgroundGeometricShape'
import SpinningCircleShape from '@/app/assets/images/SpinningCircleShape'
import CircleShape from '@/app/assets/images/CircleShape'
import LinesShape from '@/app/assets/images/LinesShape'
import BlurCircleShape from '@/app/assets/images/BlurCircleShape'
import { useRef } from 'react'
import useUpDownShapeAnimation from '@/hooks/useUpDownShapeAnimation'
import TitleAnimated from '@/app/components/Title/TitleAnimated'
import { SVG_IDS } from '@/constants/svgUniqueKeys'
import TextSVG from '@/app/components/TextSVG'
import useParallax from '@/hooks/useParallax'

const TopBanner = () => {
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
		'top-banner'
	)

	return (
		<div className='relative w-screen overflow-hidden' id='top-banner'>
			<div className='container mx-auto w-full h-full min-h-screen flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center py-32 2xl:py-60 px-6'>
				<div className='relative max-w-2xl z-10 order-2 lg:order-1 flex flex-col items-center lg:block'>
					<TitleAnimated />
					<Title
						variant='h2'
						className='!text-global-color-two-scheme-1 !text-3xl'
					>
						<TextSVG text='Front End Developer' />
					</Title>
					<Button />
				</div>
				<div className='max-w-[70vw] sm:max-w-[45vw] lg:max-w-[55vh] 2xl:max-w-xl relative order-1 lg:order-2 mb-24 lg:mb-0'>
					<BackgroundLinesShape className='w-[100vw] sm:w-[70vw] lg:w-[80vh] 2xl:w-[900px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-15' />
					<div
						ref={animatedGeometricShapeRef}
						className='w-[45vw] h-[45vw] sm:w-[30vw] sm:h-[30vw] lg:w-[35vh] lg:h-[35vh] 2xl:w-[400px] 2xl:h-[400px] absolute -top-[10%] -left-[30%]'
					>
						<BackgroundGeometricShape
							id={SVG_IDS.backgroundShape1}
							variant='1'
							className='w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
						/>
					</div>
					<SpinningCircleShape className='spinner-animation w-[15vw] h-[15vw] lg:w-[20vh] lg:h-[20vh] 2xl:w-40 2xl:h-40 absolute -top-[5%] left-[10%] z-20 rounded-full' />
					<RadialGradientCircle
						id={SVG_IDS.circle1}
						color='global-color-one-scheme-1'
						className='w-[120vw] h-[120vw] lg:w-[120vh] lg:h-[120vh] 2xl:w-[1300px] 2xl:h-[1300px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-30'
					/>
					<RadialGradientCircle
						id={SVG_IDS.circle2}
						color='global-color-two-scheme-1'
						className='w-[100vw] h-[100vw] lg:w-[100vh] lg:h-[100vh] 2xl:w-[800px] 2xl:h-[800px] absolute top-[calc(50%+10vw)] left-[calc(50%-8vw)] 2xl:top-[85%] 2xl:left-[15%] -translate-y-1/2 -translate-x-1/2 opacity-20'
					/>
					<RadialGradientCircle
						id={SVG_IDS.circle3}
						color='global-color-three-scheme-1'
						className='w-[100vw] h-[100vw] lg:w-[100vh] lg:h-[100vh] 2xl:w-[800px] 2xl:h-[800px] absolute top-[calc(50%-10vw)] left-[calc(50%+8vw)] 2xl:top-[15%] 2xl:left-[85%] -translate-y-1/2 -translate-x-1/2 opacity-40'
					/>
					<div
						ref={animatedBlurCircleRef}
						className='w-16 h-16 lg:w-24 lg:h-24 absolute bottom-[30%] -right-[10%] z-20'
					>
						<BlurCircleShape className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
					</div>
					<div
						ref={circleRef}
						className='w-8 h-8 lg:w-12 lg:h-12 absolute -bottom-32 -right-[5%] z-20 invisible'
					>
						<CircleShape className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
					</div>
					<LinesShape className='w-24 absolute top-[20%] right-0 z-20' />
					<img
						className='relative z-10 rounded-3xl'
						src={topBannerImage.src}
						alt='Top Banner'
					/>
				</div>
			</div>
		</div>
	)
}

export default TopBanner
