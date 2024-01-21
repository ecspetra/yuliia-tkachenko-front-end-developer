import Title from '@/app/components/Title'
import ProjectsItem from '@/components/Projects/ProjectsItem'
import {
	FRONT_END_DEVELOPER_PROJECTS_LIST,
	UI_UX_DESIGNER_PROJECTS_LIST,
} from '@/constants/projectsList'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import CircleShape from '@/app/assets/images/CircleShape'
import ProjectsImageItem from '@/components/Projects/ProjectsImageItem'

const Projects = () => (
	<div className='container px-6 py-40'>
		<div className='max-w-2xl mx-auto text-center relative z-50'>
			<Title variant='h3'>Front End Developer portfolio</Title>
			<Title className='!mb-40'>
				A few of my pet projects from Front End Developer portfolio
			</Title>
		</div>
		<div className='w-full max-w-6xl mx-auto flex flex-wrap justify-center items-stretch gap-4'>
			{FRONT_END_DEVELOPER_PROJECTS_LIST.map((item, idx) => (
				<ProjectsItem
					key={idx}
					project={item}
					isEven={idx % 2 === 0}
					idx={idx}
				/>
			))}
		</div>
		<div className='max-w-2xl mx-auto text-center relative z-50'>
			<Title variant='h3'>UI/UX designer portfolio</Title>
			<Title className='!mb-40'>
				A few of my pet projects from UI/UX designer portfolio
			</Title>
		</div>
		<div className='relative grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-2xl mx-auto'>
			<RadialGradientCircle
				color='#22d3ee'
				className='scale-[4] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20'
			/>
			<RadialGradientCircle
				color='#eab308'
				className='scale-[4] absolute -bottom-[40%] -right-[10%] opacity-20'
			/>
			<CircleShape className='w-4 absolute bottom-[30%] -right-[10%] z-20' />
			{UI_UX_DESIGNER_PROJECTS_LIST.map((item, idx) => (
				<ProjectsImageItem key={idx} image={item} />
			))}
		</div>
	</div>
)

export default Projects
