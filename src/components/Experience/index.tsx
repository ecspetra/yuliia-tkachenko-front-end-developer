import Title from '@/app/components/Title'
import ExperienceItem from '@/components/Experience/ExperienceItem'
import { EXPERIENCE_LIST } from '@/constants/experienceList'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'

const Experience = () => (
	<div className='w-full relative max-w-6xl px-6 py-40'>
		<RadialGradientCircle
			color='#22d3ee'
			size={1300}
			className='absolute top-[70%] -left-[40%] opacity-20'
		/>
		<RadialGradientCircle
			color='#a3e635'
			className='absolute top-[85%] -left-[10%] opacity-20'
		/>
		<div className='text-center'>
			<Title variant='h3'>Work</Title>
			<Title className='!mb-40'>Experience</Title>
		</div>
		<div>
			{EXPERIENCE_LIST.map((item, idx) => (
				<ExperienceItem
					key={idx}
					experience={item}
					idx={`0${idx + 1}`}
				/>
			))}
		</div>
	</div>
)

export default Experience
