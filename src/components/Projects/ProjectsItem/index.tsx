import { FC } from 'react'
import Title from '@/app/components/Title'
import Tag from '@/components/Tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Button from '@/app/components/Button'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import CircleShape from '@/app/assets/images/CircleShape'

type ProjectsItemType = {
	title: string
	description: string
	repositoryLink: string
	previewLink: string
	teckStack: string[]
	images: string[]
}

type PropsType = {
	project: ProjectsItemType
	isEven: boolean
	idx: number
}

const ProjectsItem: FC<PropsType> = ({ project, isEven, idx }) => {
	const {
		title,
		description,
		repositoryLink,
		previewLink,
		teckStack,
		images,
	} = project
	const isShowLargeRadialGradientCircle = idx !== 2
	const isShowCircleShape = idx === 1

	return (
		<div className='flex justify-between items-center gap-16 mb-40'>
			<div
				className={`w-full max-w-1/2 relative ${
					isEven ? 'order-last' : 'order-first'
				}`}
			>
				<RadialGradientCircle
					color={isEven ? '#a3e635' : '#eab308'}
					className='scale-[3] absolute -bottom-[30%] -right-[20%] opacity-20'
				/>
				{isShowLargeRadialGradientCircle && (
					<RadialGradientCircle
						color={isEven ? '#22d3ee' : '#a3e635'}
						className='scale-[4] absolute bottom-[10%] right-0 opacity-15'
					/>
				)}
				{isShowCircleShape && (
					<CircleShape className='w-12 absolute top-[20%] -left-[5%] z-20' />
				)}
				<div className='bg-zinc-800 relative z-10 rounded-3xl'>
					<img
						className='aspect-[4/3] rounded-3xl object-cover mix-blend-luminosity'
						src={images[0].src}
						alt='Top Banner'
					/>
				</div>
				<div className='max-w-80 bg-zinc-800 aspect-[4/3] absolute -bottom-6 -right-6 z-10 rounded-3xl border border-zinc-700'>
					<img
						className='aspect-[4/3] rounded-3xl object-cover mix-blend-luminosity'
						src={images[1].src}
						alt='Top Banner'
					/>
				</div>
			</div>
			<div
				className={`w-full relative z-50 max-w-1/2 ${
					isEven ? 'order-first' : 'order-last'
				}`}
			>
				<Title variant='h3-large' className='border-none mb-8 relative'>
					{title}
				</Title>
				<p className='inline-flex flex-wrap mb-8'>
					<span className='mr-4'>Created with:</span>
					{teckStack.map((item, idx) => (
						<Tag key={idx} tag={item} />
					))}
				</p>
				<p className='mb-8'>{description}</p>
				<div className='flex justify-start items-center gap-4'>
					<Button
						context='preview-link'
						icon={faArrowUpRightFromSquare}
					/>
					<Button context='simple-button' icon={faGithub}>
						GitHub repository
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProjectsItem
