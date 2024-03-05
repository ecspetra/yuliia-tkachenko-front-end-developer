import Title from '@/app/components/Title'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import SpinningCircleShape from '@/app/assets/images/SpinningCircleShape'
import BackgroundGeometricShape from '@/app/assets/images/BackgroundGeometricShape'
import CircleShape from '@/app/assets/images/CircleShape'
import LinesShape from '@/app/assets/images/LinesShape'
import { generateRandomId } from '@/handlers/generateRandomId'
import { useRef } from 'react'
import useParallax from '@/hooks/useParallax'
import DotsAnimation from '@/app/assets/animation/DotsAnimation'

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
			<div className='relative overflow-hidden w-full h-full mx-auto pt-4 sm:pt-20 2xl:pt-40'>
				<DotsAnimation id='dots-animation-2' />
				<div className='container px-6 mx-auto'>
					<div className='relative bg-zinc-950 rounded-xl sm:rounded-3xl text-center'>
						<div
							ref={circleRef}
							className='w-8 h-8 absolute -top-4 left-[25%] lg:-top-12 z-20 invisible'
						>
							<CircleShape className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
						</div>
						<div className='py-20 sm:py-32 2xl:py-40 px-6 relative rounded-xl sm:rounded-3xl overflow-hidden'>
							<div
								ref={backgroundLinesShapeRef}
								className='w-[100vw] sm:w-[70vw] lg:max-w-[65vw] lg:max-h-[65vw] xl:w-[80vh] 2xl:w-[900px] absolute bottom-[60%] -right-[60%] lg:bottom-[35%] xl:-right-[30%] z-10 invisible'
							>
								<BackgroundLinesShape className='w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-10 -rotate-120' />
							</div>
							<RadialGradientCircle
								id={generateRandomId('circle', 5)}
								color='global-color-one'
								className='w-[1300px] h-[1300px] absolute top-[35%] left-[95%] -translate-y-1/2 -translate-x-1/2 opacity-30'
							/>
							<RadialGradientCircle
								id={generateRandomId('circle', 5)}
								color='global-color-three'
								className='w-[1000px] h-[1000px] absolute top-[100%] left-[85%] -translate-y-1/2 -translate-x-1/2 opacity-30'
							/>
							<SpinningCircleShape className='spinner-animation w-[15vw] h-[15vw] lg:w-[20vh] lg:h-[20vh] lg:max-w-[15vw] lg:max-h-[15vw] 2xl:w-40 2xl:h-40 absolute -bottom-8 lg:-bottom-20 left-[20%] z-20 rounded-full' />
							<div
								ref={backgroundGeometricShapeRef}
								className='w-[25vw] h-[25vw] absolute top-[60%] -left-[20%] invisible'
							>
								<BackgroundGeometricShape
									id={generateRandomId('backgroundShape', 5)}
									variant='4'
									className='w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
								/>
							</div>
							<LinesShape className='w-14 lg:w-24 absolute top-[15%] left-[85%] sm:left-[90%] z-20' />
							<div className='relative z-40'>
								<Title variant='h3'>Education</Title>
								<Title>Master of Computer Science</Title>
								<p>Pryazovskyi State Technical University</p>
								<p className='text-base text-zinc-400'>
									Ukraine, 2019
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
