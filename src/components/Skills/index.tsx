import Title from '@/app/components/Title'
import SkillsItem from '@/components/Skills/SkillsItem'
import { SKILLS_LIST } from '@/constants/skillsList'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundGeometricShape from '@/app/assets/images/BackgroundGeometricShape'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import CircleShape from '@/app/assets/images/CircleShape'
import { useRef } from 'react'
import { generateRandomId } from '@/handlers/generateRandomId'
import useParallax from '@/hooks/useParallax'

const Skills = () => {
	const circleRef = useRef<HTMLDivElement>(null)
	useParallax(
		[{ shapeRef: circleRef, shiftXValue: 100, shiftYValue: -150 }],
		'skills'
	)

	return (
		<div
			className='relative pt-20 pb-40 2xl:pt-40 2xl:pb-20 w-screen overflow-hidden'
			id='skills'
		>
			<div className='absolute top-0 left-0 bg-zinc-950 w-full h-full lg:h-[calc(100%-340px)] 2xl:h-[calc(100%-260px)] overflow-hidden'>
				<BackgroundLinesShape className='w-[100vw] sm:w-[70vw] lg:w-[80vh] lg:max-w-[65vw] lg:max-h-[65vw] 2xl:w-[900px] absolute top-[95%] left-[15%] lg:top-[calc(50%+400px)] lg:left-[calc(50%-400px)] -translate-y-1/2 -translate-x-1/2 opacity-15 -rotate-90 z-10' />
			</div>
			<div className='container mx-auto px-6 h-full relative z-10 flex flex-wrap 2xl:flex-nowrap justify-center 2xl:justify-between items-start gap-6'>
				<div className='relative z-40 text-center 2xl:text-left'>
					<Title variant='h3'>Skills</Title>
					<Title>My Tech Stack</Title>
				</div>
				<div className='relative max-w-full 2xl:max-w-6xl'>
					<RadialGradientCircle
						id={generateRandomId('circle', 5)}
						color='global-color-one'
						className='w-[1300px] h-[1300px] 2xl:w-[1600px] 2xl:h-[1600px] absolute top-[40%] left-[20%] lg:top-1/2 lg:left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-50'
					/>
					<RadialGradientCircle
						id={generateRandomId('circle', 5)}
						color='global-color-three'
						className='w-[1000px] h-[1000px] absolute top-[40%] left-[40%] lg:top-[65%] lg:left-[50%] -translate-y-1/2 -translate-x-1/2 opacity-30'
					/>
					<div className='w-[100vw] h-[100vw] lg:w-[800px] lg:h-[800px] absolute top-[10%] left-[15%] 2xl:-left-[15%]'>
						<div className='up-down-animated-shape up-down-animated-shape--decreased'>
							<BackgroundGeometricShape
								id={generateRandomId('backgroundShape', 5)}
								variant='3'
								className='w-[800px] h-[800px]'
							/>
						</div>
						<div className='w-60 h-60 absolute top-[30%] -left-[30%] hidden 2xl:block'>
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
								counter={idx < 9 ? `0${idx + 1}` : `${idx + 1}`}
								idx={idx + 1}
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
