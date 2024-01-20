import Title from '@/app/components/Title'
import SkillsItem from '@/components/Skills/SkillsItem'
import { SKILLS_LIST } from '@/constants/skillsList'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundGeometricShape from '@/app/assets/images/BackgroundGeometricShape'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import CircleShape from '@/app/assets/images/CircleShape'

const Skills = () => {
	return (
		<div className='relative py-40 w-screen'>
			<div className='absolute top-0 left-0 bg-zinc-950 w-full h-[calc(100%-210px)] overflow-hidden'>
				<BackgroundLinesShape className='w-[1300px] absolute top-[calc(50%+400px)] left-[calc(50%-400px)] -translate-y-1/2 -translate-x-1/2 opacity-15 -rotate-90 z-10' />
			</div>
			<div className='container mx-auto px-6 h-full relative z-10 flex justify-between items-start gap-6'>
				<div className='relative z-50'>
					<Title variant='h3'>Skills</Title>
					<Title className='text-center'>What I do</Title>
				</div>
				<div className='relative max-w-6xl'>
					<RadialGradientCircle
						color='#22d3ee'
						className='scale-[5.5] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-30'
					/>
					<RadialGradientCircle
						color='#eab308'
						className='scale-[4] absolute bottom-[10%] right-[30%] opacity-30'
					/>
					<div className='w-[800px] h-[800px] absolute top-[10%] -left-[15%]'>
						<BackgroundGeometricShape
							variant='3'
							className='w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
						/>
						<div className='w-60 h-60 absolute top-[30%] -left-[30%]'>
							<CircleShape className='w-12 absolute bottom-0 right-0 z-20' />
							<CircleShape
								className='w-24 absolute top-0 left-0 z-20'
								color='#18181b'
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