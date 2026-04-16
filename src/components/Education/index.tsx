import DotsAnimation from '@/app/assets/animation/DotsAnimation'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import LinesShape from '@/app/assets/images/LinesShape'
import SpinningCircleShape from '@/app/assets/images/SpinningCircleShape'
import Title from '@/app/components/Title'
import useParallax from '@/hooks/useParallax'
import dynamic from 'next/dynamic'
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

const Education = () => {
	const backgroundGeometricShapeRef = useRef<HTMLDivElement>(null)
	const backgroundLinesShapeRef = useRef<HTMLDivElement>(null)
	const circleRef = useRef<HTMLDivElement>(null)
	useParallax(
		[
			{ shapeRef: backgroundGeometricShapeRef, shiftYValue: -250 },
			{
				shapeRef: backgroundLinesShapeRef,
				shiftXValue: -100,
				shiftYValue: 350,
			},
			{ shapeRef: circleRef, shiftXValue: 100, shiftYValue: 50 },
		],
		'education'
	)

	return (
		<div className='w-screen overflow-x-hidden' id='education'>
			<div className='relative mx-auto py-4 sm:py-20 2xl:py-40 w-full h-full overflow-hidden'>
				<DotsAnimation id='dots-animation-2' />
				<div className='mx-auto px-6 container'>
					<div className='relative bg-zinc-950 rounded-xl sm:rounded-3xl text-center'>
						<div
							ref={circleRef}
							className='invisible -top-4 lg:-top-12 left-[25%] z-20 absolute w-8 h-8'
						>
							<CircleShape className='top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2' />
						</div>
						<div className='relative px-6 py-20 sm:py-32 2xl:py-40 rounded-xl sm:rounded-3xl overflow-hidden'>
							<div
								ref={backgroundLinesShapeRef}
								className='invisible -right-[60%] xl:-right-[30%] bottom-[60%] lg:bottom-[35%] z-10 absolute w-[100vw] sm:w-[70vw] 2xl:w-[900px] xl:w-[80vh] lg:max-w-[65vw] lg:max-h-[65vw]'
							>
								<BackgroundLinesShape className='top-1/2 left-1/2 absolute opacity-10 w-full -rotate-120 -translate-x-1/2 -translate-y-1/2' />
							</div>
							<RadialGradientCircle
								color='global-color-one'
								className='top-[35%] left-[95%] absolute opacity-30 w-[1300px] h-[1300px] -translate-x-1/2 -translate-y-1/2'
							/>
							<RadialGradientCircle
								color='global-color-three'
								className='top-[100%] left-[85%] absolute opacity-30 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2'
							/>
							<SpinningCircleShape className='-bottom-8 lg:-bottom-20 left-[20%] z-20 absolute rounded-full w-[15vw] lg:w-[20vh] 2xl:w-40 lg:max-w-[15vw] h-[15vw] lg:h-[20vh] 2xl:h-40 lg:max-h-[15vw] spinner-animation' />
							<div
								ref={backgroundGeometricShapeRef}
								className='invisible top-[60%] -left-[20%] absolute w-[25vw] h-[25vw]'
							>
								<BackgroundGeometricShape
									variant='4'
									className='top-1/2 left-1/2 absolute w-full h-full -translate-x-1/2 -translate-y-1/2'
								/>
							</div>
							<LinesShape className='top-[15%] left-[85%] sm:left-[90%] z-20 absolute w-14 lg:w-24' />
							<div className='z-40 relative'>
								<Title variant='h3'>Education</Title>
								<Title>
									Master’s Degree in Computer Science
								</Title>
								<p>Pryazovskyi State Technical University</p>
								<p className='text-zinc-400 text-base'>
									Ukraine, 2018
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Education
