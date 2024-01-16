import Title from '@/app/components/Title'
import SkillsItem from '@/components/Skills/SkillsItem'
import { SKILLS_LIST } from '@/constants/skillsList'

const Skills = () => {
	return (
		<div className='relative py-40 bg-zinc-950 w-screen flex justify-center overflow-hidden'>
			<span className='absolute -bottom-80 right-80 w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-3xl' />
			<div className='container z-10'>
				<Title className='text-center'>
					My <span className='text-white'>skills</span>
				</Title>
				<div className='flex flex-wrap justify-center items-stretch gap-2'>
					{SKILLS_LIST.map((item, idx) => (
						<SkillsItem key={idx}>{item}</SkillsItem>
					))}
				</div>
			</div>
		</div>
	)
}

export default Skills
