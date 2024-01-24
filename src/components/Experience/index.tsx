import Title from '@/app/components/Title'
import ExperienceItem from '@/components/Experience/ExperienceItem'
import { EXPERIENCE_LIST } from '@/constants/experienceList'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'

const Experience = () => (
	<div className='w-full relative max-w-6xl px-6 py-40' id='experience'>
		<RadialGradientCircle
			color='#22d3ee'
			className='scale-[4] absolute -bottom-[20%] -left-[10%] opacity-20'
		/>
		<RadialGradientCircle
			color='#a3e635'
			className='scale-[3] absolute -bottom-[20%] left-0 opacity-20'
		/>
		<div className='text-center relative z-40'>
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
