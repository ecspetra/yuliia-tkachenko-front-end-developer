import DotsAnimation from '@/app/assets/animation/DotsAnimation'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import LinesShape from '@/app/assets/images/LinesShape'
import SpinningCircleShape from '@/app/assets/images/SpinningCircleShape'
import Button from '@/app/components/Button'
import TextSVG from '@/app/components/TextSVG'
import Title from '@/app/components/Title'
import TitleAnimated from '@/app/components/Title/TitleAnimated'
import useParallax from '@/hooks/useParallax'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRef } from 'react'

const RadialGradientCircle = dynamic(
	() => import('@/app/assets/images/RadialGradientCircle'),
	{ ssr: false }
)

const BackgroundGeometricShape = dynamic(
	() => import('@/app/assets/images/BackgroundGeometricShape'),
	{ ssr: false }
)

const CircleShape = dynamic(() => import('@/app/assets/images/CircleShape'), {
	ssr: false,
})

const TopBanner = () => {
	const circleRef = useRef<HTMLDivElement>(null)
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
			<div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-16 mx-auto px-6 py-32 2xl:py-60 w-full h-full min-h-screen container'>
				<div className='lg:block z-10 relative flex flex-col items-center order-2 lg:order-1 w-full max-w-md lg:max-w-xl'>
					<TitleAnimated />
					<Title
						variant='h2'
						className='!text-3xl !text-global-color-two-scheme-1'
					>
						<TextSVG text='Software Developer' />
					</Title>
					<Button icon={faCircleArrowDown} isDownloadLink>
						Download Resume
					</Button>
				</div>
				<div className='relative order-1 lg:order-2 mb-8 lg:mb-0 w-full max-w-[70vw] sm:max-w-[45vw] lg:max-w-[55vh] 2xl:max-w-xl h-full aspect-[400/481]'>
					<BackgroundLinesShape className='top-1/2 left-1/2 absolute opacity-15 w-[100vw] sm:w-[70vw] lg:w-[80vh] 2xl:w-[900px] lg:max-w-[65vw] lg:max-h-[65vw] -translate-x-1/2 -translate-y-1/2' />
					<BackgroundGeometricShape
						variant='1'
						className='-top-[10%] -left-[30%] absolute w-[45vw] sm:w-[30vw] 2xl:w-[400px] xl:w-[35vh] h-[45vw] sm:h-[30vw] 2xl:h-[400px] xl:h-[35vh] up-down-animated-shape'
					/>
					<SpinningCircleShape className='-top-[5%] left-[10%] z-20 absolute rounded-full w-[15vw] lg:w-[20vh] 2xl:w-40 lg:max-w-[15vw] h-[15vw] lg:h-[20vh] 2xl:h-40 lg:max-h-[15vw] spinner-animation' />
					<RadialGradientCircle
						color='global-color-one'
						className='top-1/2 left-1/2 absolute opacity-80 w-[180vw] sm:w-[120vw] lg:w-[120vh] 2xl:w-[1300px] h-[180vw] sm:h-[120vw] lg:h-[120vh] 2xl:h-[1300px] -translate-x-1/2 -translate-y-1/2'
					/>
					<RadialGradientCircle
						color='global-color-two'
						className='top-[calc(50%+10vw)] 2xl:top-[85%] left-[calc(50%-8vw)] 2xl:left-[15%] absolute opacity-20 w-[160vw] sm:w-[100vw] lg:w-[100vh] 2xl:w-[800px] h-[160vw] sm:h-[100vw] lg:h-[100vh] 2xl:h-[800px] -translate-x-1/2 -translate-y-1/2'
					/>
					<RadialGradientCircle
						color='global-color-three'
						className='top-[calc(50%-10vw)] 2xl:top-[15%] left-[calc(50%+8vw)] 2xl:left-[85%] absolute opacity-40 w-[160vw] sm:w-[100vw] lg:w-[100vh] 2xl:w-[800px] h-[160vw] sm:h-[100vw] lg:h-[100vh] 2xl:h-[800px] -translate-x-1/2 -translate-y-1/2'
					/>
					<CircleShape
						className='-right-[10%] bottom-[30%] z-20 absolute w-16 lg:w-24 h-16 lg:h-24 up-down-animated-shape up-down-animated-shape--slow'
						isBlurred
					/>
					<div
						ref={circleRef}
						className='invisible right-[15%] lg:-right-[5%] -bottom-4 lg:-bottom-32 z-20 absolute w-8 lg:w-12 h-8 lg:h-12'
					>
						<CircleShape className='top-1/2 left-1/2 absolute w-full h-full -translate-x-1/2 -translate-y-1/2' />
					</div>
					<LinesShape className='top-[20%] right-0 z-20 absolute w-14 lg:w-24' />
					<Image
						className='z-10 relative rounded-xl sm:rounded-3xl'
						src='/assets/images/top-banner-image.jpg'
						alt='Top Banner'
						fill
						sizes='(min-width: 1536px) 576px, (min-width: 640px) 45vw, 70vw'
						priority
					/>
					<DotsAnimation id='dots-animation-1' />
				</div>
			</div>
		</div>
	)
}

export default TopBanner
