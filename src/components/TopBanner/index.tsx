import Title from '@/app/components/Title'
import topBannerImage from '../../../public/assets/images/top-banner-image.jpg'
import Button from '@/app/components/Button'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import BackgroundGeometricShape from '@/app/assets/images/BackgroundGeometricShape'
import SpinningCircleShape from '@/app/assets/images/SpinningCircleShape'
import CircleShape from '@/app/assets/images/CircleShape'
import LinesShape from '@/app/assets/images/LinesShape'
import { useRef } from 'react'
import useUpDownShapeAnimation from '@/hooks/useUpDownShapeAnimation'
import TitleAnimated from '@/app/components/Title/TitleAnimated'
import { SVG_IDS } from '@/constants/svgUniqueKeys'
import TextSVG from '@/app/components/TextSVG'
import useParallax from '@/hooks/useParallax'
import Image from "next/image";

const TopBanner = () => {
	const animatedGeometricShapeRef = useRef<HTMLDivElement>(null)
	const animatedBlurCircleRef = useRef<HTMLDivElement>(null)
	const circleRef = useRef<HTMLDivElement>(null)
	useUpDownShapeAnimation([
		{ elementRef: animatedGeometricShapeRef, distance: 50, interval: 3 },
		{ elementRef: animatedBlurCircleRef, distance: 50, interval: 4 },
	])
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
			<div className='container mx-auto w-full h-full min-h-screen flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center py-32 2xl:py-60 px-6 gap-16'>
				<div className='relative w-full max-w-md lg:max-w-xl z-10 order-2 lg:order-1 flex flex-col items-center lg:block'>
					<TitleAnimated />
					<Title
						variant='h2'
						className='!text-global-color-two-scheme-1 !text-3xl'
					>
						<TextSVG text='Front End Developer' />
					</Title>
					<Button />
				</div>
				<div className='aspect-[400/481] w-full h-full max-w-[70vw] sm:max-w-[45vw] lg:max-w-[55vh] 2xl:max-w-xl relative order-1 lg:order-2 mb-8 lg:mb-0'>
					<BackgroundLinesShape className='w-[100vw] sm:w-[70vw] lg:w-[80vh] lg:max-w-[65vw] lg:max-h-[65vw] 2xl:w-[900px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-15' />
					<div
						ref={animatedGeometricShapeRef}
						className='w-[45vw] h-[45vw] sm:w-[30vw] sm:h-[30vw] xl:w-[35vh] xl:h-[35vh] 2xl:w-[400px] 2xl:h-[400px] absolute -top-[10%] -left-[30%]'
					>
						<BackgroundGeometricShape
							id={SVG_IDS.backgroundShape1}
							variant='1'
							className='w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
						/>
					</div>
					<SpinningCircleShape className='spinner-animation w-[15vw] h-[15vw] lg:w-[20vh] lg:h-[20vh] lg:max-w-[15vw] lg:max-h-[15vw] 2xl:w-40 2xl:h-40 absolute -top-[5%] left-[10%] z-20 rounded-full' />
					<RadialGradientCircle
						id={SVG_IDS.circle1}
						color='global-color-one'
						className='w-[180vw] h-[180vw] sm:w-[120vw] sm:h-[120vw] lg:w-[120vh] lg:h-[120vh] 2xl:w-[1300px] 2xl:h-[1300px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-30'
					/>
					<RadialGradientCircle
						id={SVG_IDS.circle2}
						color='global-color-two'
						className='w-[160vw] h-[160vw] sm:w-[100vw] sm:h-[100vw] lg:w-[100vh] lg:h-[100vh] 2xl:w-[800px] 2xl:h-[800px] absolute top-[calc(50%+10vw)] left-[calc(50%-8vw)] 2xl:top-[85%] 2xl:left-[15%] -translate-y-1/2 -translate-x-1/2 opacity-20'
					/>
					<RadialGradientCircle
						id={SVG_IDS.circle3}
						color='global-color-three'
						className='w-[160vw] h-[160vw] sm:w-[100vw] sm:h-[100vw] lg:w-[100vh] lg:h-[100vh] 2xl:w-[800px] 2xl:h-[800px] absolute top-[calc(50%-10vw)] left-[calc(50%+8vw)] 2xl:top-[15%] 2xl:left-[85%] -translate-y-1/2 -translate-x-1/2 opacity-40'
					/>
					<div
						ref={animatedBlurCircleRef}
						className='w-16 h-16 lg:w-24 lg:h-24 absolute bottom-[30%] -right-[10%] z-20'
					>
						<CircleShape
							className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
							isBlurred
						/>
					</div>
					<div
						ref={circleRef}
						className='w-8 h-8 lg:w-12 lg:h-12 absolute -bottom-4 right-[15%] lg:-bottom-32 lg:-right-[5%] z-20 invisible'
					>
						<CircleShape className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
					</div>
					<LinesShape className='w-14 lg:w-24 absolute top-[20%] right-0 z-20' />
					<Image
						className='relative z-10 rounded-xl sm:rounded-3xl'
						src={topBannerImage}
						alt='Top Banner'
						layout='fill'
						loading='lazy'
					/>
				</div>
			</div>
		</div>
	)
}

export default TopBanner
