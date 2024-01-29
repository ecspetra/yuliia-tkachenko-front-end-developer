import Title from '@/app/components/Title'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import SpinningCircleShape from '@/app/assets/images/SpinningCircleShape'
import BackgroundGeometricShape from '@/app/assets/images/BackgroundGeometricShape'
import CircleShape from '@/app/assets/images/CircleShape'
import LinesShape from '@/app/assets/images/LinesShape'
import { SVG_IDS } from '@/constants/svgUniqueKeys'
import { useRef } from 'react'
import useParallax from '@/hooks/useParallax'

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
		<div className='w-full pt-40' id='education'>
			<div className='container relative mx-auto bg-zinc-950 rounded-3xl text-center'>
				<div
					ref={circleRef}
					className='w-8 h-8 absolute -top-12 left-[25%] z-20 invisible'
				>
					<CircleShape className='w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
				</div>
				<div className='py-40 px-6 relative rounded-3xl overflow-hidden'>
					<div
						ref={backgroundLinesShapeRef}
						className='w-[50vw] h-[50vw] absolute bottom-[35%] -right-[30%] z-10 invisible'
					>
						<BackgroundLinesShape className='w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-10 -rotate-120' />
					</div>
					<RadialGradientCircle
						id={SVG_IDS.circle10}
						color='global-color-one-scheme-1'
						size={1.6}
						className='absolute -bottom-[80%] -right-[40%] opacity-20'
					/>
					<RadialGradientCircle
						id={SVG_IDS.circle11}
						color='global-color-three-scheme-1'
						size={1.6}
						className='absolute -top-[40%] -right-[30%] opacity-20'
					/>
					<SpinningCircleShape className='spinner-animation w-40 h-40 absolute -bottom-20 left-[25%] z-20 rounded-full' />
					<div
						ref={backgroundGeometricShapeRef}
						className='w-[25vw] h-[25vw] absolute top-[60%] -left-[20%] invisible'
					>
						<BackgroundGeometricShape
							id={SVG_IDS.backgroundShape4}
							variant='4'
							className='w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
						/>
					</div>
					<LinesShape className='w-24 absolute top-[15%] left-[90%] z-20' />
					<div className='relative z-40'>
						<Title variant='h3'>Education</Title>
						<Title>Master of Computer Science</Title>
						<p>Pryazovskyi State Technical University</p>
						<p className='text-base text-zinc-400'>Ukraine, 2019</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Education
