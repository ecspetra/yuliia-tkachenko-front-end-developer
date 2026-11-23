import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import Title from '@/app/components/Title'
import SkillsItem from '@/components/Skills/SkillsItem'
import { SKILLS_LIST } from '@/constants/skillsList'
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

const Skills = () => {
	const circleRef = useRef<HTMLDivElement>(null)
	useParallax(
		[{ shapeRef: circleRef, shiftXValue: 100, shiftYValue: -150 }],
		'skills'
	)

	return (
		<div
			className='relative pt-20 2xl:pt-40 pb-40 2xl:pb-20 w-screen overflow-hidden'
			id='skills'
		>
			<div className='top-0 left-0 absolute bg-zinc-950 w-full h-full lg:h-[calc(100%-340px)] 2xl:h-[calc(100%-260px)] overflow-hidden'>
				<BackgroundLinesShape className='top-[95%] lg:top-[calc(50%+400px)] left-[15%] lg:left-[calc(50%-400px)] z-10 absolute opacity-15 w-[100vw] sm:w-[70vw] lg:w-[80vh] 2xl:w-[900px] lg:max-w-[65vw] lg:max-h-[65vw] -rotate-90 -translate-x-1/2 -translate-y-1/2' />
			</div>
			<div className='z-10 relative mx-auto px-6 h-full container'>
				<div className='z-40 relative text-center'>
					<Title variant='h3'>Skills</Title>
					<Title>My Tech Stack</Title>
				</div>
				<div className='relative mx-auto max-w-full lg:max-w-4xl'>
					<RadialGradientCircle
						color='global-color-one'
						className='top-[40%] lg:top-1/2 left-[20%] lg:left-1/2 absolute opacity-50 w-[1300px] 2xl:w-[1600px] h-[1300px] 2xl:h-[1600px] -translate-x-1/2 -translate-y-1/2'
					/>
					<RadialGradientCircle
						color='global-color-three'
						className='top-[40%] lg:top-[65%] left-[40%] lg:left-[50%] absolute opacity-30 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2'
					/>
					<div className='top-[10%] left-[15%] 2xl:-left-[15%] absolute w-[100vw] lg:w-[800px] h-[100vw] lg:h-[800px]'>
						<div className='up-down-animated-shape up-down-animated-shape--decreased'>
							<BackgroundGeometricShape
								variant='3'
								className='w-[800px] h-[800px]'
							/>
						</div>
						<div className='hidden 2xl:block top-[30%] -left-[30%] absolute w-60 h-60'>
							<div
								ref={circleRef}
								className='invisible right-[0%] -bottom-[35%] z-20 absolute w-12 h-12'
							>
								<CircleShape className='top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2' />
							</div>
							<CircleShape
								className='top-0 left-0 z-20 absolute !w-24'
								color='rgb(var(--background-color))'
							/>
						</div>
					</div>
					<div className='z-10 relative'>
						<SkillsItem
							title='Technologies & Tools'
							skills={SKILLS_LIST}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
