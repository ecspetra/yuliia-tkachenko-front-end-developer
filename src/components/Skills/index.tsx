import Title from '@/app/components/Title'
import SkillsItem from '@/components/Skills/SkillsItem'
import { SKILLS_LIST } from '@/constants/skillsList'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundGeometricShape from '@/app/assets/images/BackgroundGeometricShape'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import CircleShape from '@/app/assets/images/CircleShape'
import { useRef } from 'react'
import useUpDownShapeAnimation from '@/hooks/useUpDownShapeAnimation'
import { SVG_IDS } from '@/constants/svgUniqueKeys'
import useParallax from '@/hooks/useParallax'

const Skills = () => {
	const animatedGeometricShapeRef = useRef<HTMLDivElement>(null)
	const animatedBlurCircleRef = useRef<HTMLDivElement>(null)
	const circleRef = useRef<HTMLDivElement>(null)
	useUpDownShapeAnimation(animatedGeometricShapeRef, animatedBlurCircleRef)
	useParallax(
		[{ shapeRef: circleRef, shiftXValue: 100, shiftYValue: -150 }],
		'skills'
	)

	return (
		<div
			className='relative py-20 2xl:py-40 w-screen overflow-hidden'
			id='skills'
		>
			<div className='absolute top-0 left-0 bg-zinc-950 w-full h-full lg:h-[calc(100%-210px)] overflow-hidden'>
				<BackgroundLinesShape className='w-[100vw] sm:w-[70vw] lg:w-[80vh] 2xl:w-[900px] absolute top-[95%] left-[15%] lg:top-[calc(50%+400px)] lg:left-[calc(50%-400px)] -translate-y-1/2 -translate-x-1/2 opacity-15 -rotate-90 z-10' />
			</div>
			<div className='container mx-auto px-6 h-full relative z-10 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-start gap-6'>
				<div className='relative z-40 text-center lg:text-left'>
					<Title variant='h3'>Skills</Title>
					<Title className='text-center'>What I do</Title>
				</div>
				<div className='relative max-w-full sm:max-w-[80%] lg:max-w-6xl'>
					<RadialGradientCircle
						id={SVG_IDS.circle6}
						color='global-color-one-scheme-1'
						className='w-[1300px] h-[1300px] 2xl:w-[1600px] 2xl:h-[1600px] absolute top-[40%] left-[20%] lg:top-1/2 lg:left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-30'
					/>
					<RadialGradientCircle
						id={SVG_IDS.circle7}
						color='global-color-three-scheme-1'
						className='w-[1000px] h-[1000px] absolute top-[40%] left-[40%] lg:top-[65%] lg:left-[50%] -translate-y-1/2 -translate-x-1/2 opacity-30'
					/>
					<div className='w-[100vw] h-[100vw] lg:w-[30vw] lg:h-[30vw] absolute top-[10%] -left-[15%]'>
						<div
							ref={animatedGeometricShapeRef}
							className='w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
						>
							<BackgroundGeometricShape
								id={SVG_IDS.backgroundShape3}
								variant='3'
								className='w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
							/>
						</div>
						<div className='w-60 h-60 absolute top-[30%] -left-[30%] hidden lg:block'>
							<div
								ref={circleRef}
								className='w-12 h-12 absolute -bottom-[35%] right-[0%] z-20 invisible'
							>
								<CircleShape className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
							</div>
							<CircleShape
								className='!w-24 absolute top-0 left-0 z-20'
								color='rgb(var(--background-color))'
							/>
						</div>
					</div>
					<div className='flex flex-wrap justify-start items-stretch gap-6 relative z10'>
						{SKILLS_LIST.map((item, idx) => (
							<SkillsItem
								key={idx}
								idx={idx < 9 ? `0${idx + 1}` : idx + 1}
							>
								{item}
							</SkillsItem>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
