import Title from '@/app/components/Title'
import SkillsItem from '@/components/Skills/SkillsItem'
import { SKILLS_LIST } from '@/constants/skillsList'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundShape6 from '@/app/assets/images/BackgroundShape6'
import BackgroundShape from '@/app/assets/images/BackgroundShape'
import CircleShape from '@/app/assets/images/CircleShape'

const Skills = () => {
	return (
		<div className='relative py-40 w-screen'>
			<div className='absolute top-0 left-0 bg-zinc-950 w-full h-[calc(100%-210px)] overflow-hidden'>
				<BackgroundShape className='w-[1300px] absolute top-[calc(50%+400px)] left-[calc(50%-400px)] -translate-y-1/2 -translate-x-1/2 opacity-15 -rotate-90 z-10' />
			</div>
			<div className='container mx-auto px-6 h-full relative z-10 flex justify-between items-start gap-6'>
				<div>
					<Title variant='h3'>Skills</Title>
					<Title className='text-center'>What I do</Title>
				</div>
				<div className='relative max-w-6xl'>
					<RadialGradientCircle
						color='#22d3ee'
						size={1300}
						className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-30'
					/>
					<RadialGradientCircle
						color='#eab308'
						size={1000}
						className='absolute top-[calc(50%+100px)] left-[calc(50%+200px)] -translate-y-1/2 -translate-x-1/2 opacity-30'
					/>
					<div className='relative'>
						<div className='w-[800px] absolute top-[calc(50%+100px)] left-[calc(50%-400px)] -translate-y-1/2 -translate-x-1/2'>
							<BackgroundShape6 className='w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
							<CircleShape className='w-12 absolute top-[calc(50%+100px)] left-[calc(50%-300px)] -translate-y-1/2 -translate-x-1/2 z-20' />
							<CircleShape
								className='w-24 absolute top-[calc(50%-50px)] left-[calc(50%-500px)] -translate-y-1/2 -translate-x-1/2 z-20'
								color='#18181b'
							/>
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
		</div>
	)
}

export default Skills
