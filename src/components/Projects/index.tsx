import Title from '@/app/components/Title'
import { EXPERIENCE_LIST } from '@/constants/experienceList'
import ProjectsItem from '@/components/Projects/ProjectsItem'

const Projects = () => (
	<div>
		<Title className='text-center'>
			My <span className='text-white'>projects</span>
		</Title>
		<div className='flex flex-wrap justify-center items-stretch gap-4 max-w-md'>
			{EXPERIENCE_LIST.map((item, idx) => (
				<ProjectsItem key={idx} />
			))}
		</div>
	</div>
)

export default Projects
