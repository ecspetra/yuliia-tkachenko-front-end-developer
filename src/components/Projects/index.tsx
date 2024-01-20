import Title from '@/app/components/Title'
import ProjectsItem from '@/components/Projects/ProjectsItem'
import { PROJECTS_LIST } from '@/constants/projectsList'

const Projects = () => (
	<div className='container px-6 py-40'>
		<div className='text-center relative z-50'>
			<Title variant='h3'>Portfolio</Title>
			<Title className='!mb-40'>A few of my pet projects</Title>
		</div>
		<div className='w-full max-w-6xl mx-auto flex flex-wrap justify-center items-stretch gap-4'>
			{PROJECTS_LIST.map((item, idx) => (
				<ProjectsItem
					key={idx}
					project={item}
					isEven={idx % 2 === 0}
					idx={idx}
				/>
			))}
		</div>
	</div>
)

export default Projects
