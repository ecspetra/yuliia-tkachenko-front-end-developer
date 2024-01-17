import Title from '@/app/components/Title'
import ExperienceItem from '@/components/Experience/ExperienceItem'
import { EXPERIENCE_LIST } from '@/constants/experienceList'

const Experience = () => (
	<div className='w-full max-w-6xl py-80'>
		<Title className='text-center'>
			My <span className='text-white'>experience</span>
		</Title>
		<div>
			{EXPERIENCE_LIST.map((item, idx) => (
				<ExperienceItem key={idx} experience={item} />
			))}
		</div>
	</div>
)

export default Experience
