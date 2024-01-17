import Title from '@/app/components/Title'
import ExperienceItem from '@/components/Experience/ExperienceItem'
import { EXPERIENCE_LIST } from '@/constants/experienceList'

const Experience = () => (
	<div className='w-full max-w-6xl pt-40 pb-80'>
		<Title variant='h3' className='text-center'>
			History
		</Title>
		<Title className='text-center !mb-36'>Experience</Title>
		<div>
			{EXPERIENCE_LIST.map((item, idx) => (
				<ExperienceItem key={idx} experience={item} />
			))}
		</div>
	</div>
)

export default Experience
