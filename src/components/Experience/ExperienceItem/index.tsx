import Title from '@/app/components/Title'
import Tag from '@/components/Tag'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dynamic from 'next/dynamic'
import { FC } from 'react'

const BackgroundSvgFill = dynamic(
	() => import('@/app/assets/images/BackgroundSvgFill'),
	{ ssr: false }
)

type ExperienceItemType = {
	company: string
	country: string
	job: string
	date: string
	description?: string
	responsibilities?: string[]
	techStack?: string[]
}

type PropsType = {
	experience: ExperienceItemType
	idx?: string
}

const ExperienceItem: FC<PropsType> = ({
	experience: {
		company,
		country,
		job,
		date,
		description,
		responsibilities,
		techStack,
	},
	idx,
}) => (
	<div className='z-40 relative mb-8 2xl:mb-16 last:mb-0 pb-8 2xl:pb-16 last:pb-0 border-zinc-700 border-b last:border-none w-full'>
		<div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-start gap-0 lg:gap-16'>
			<div className='w-full lg:max-w-64'>
				<Title className='!mb-4'>{company}</Title>
				<span className='block relative mb-4 w-full h-0.5'>
					<BackgroundSvgFill borderRadius={0} />
				</span>
				<div className='text-base'>
					<p className='flex justify-start items-center'>
						<FontAwesomeIcon
							icon={faLocationDot}
							className='mr-2 size-5'
						/>
						{country}
					</p>
					<p className='pl-6 text-zinc-400'>{date}</p>
				</div>
			</div>
			<div className='pt-16 w-full'>
				<Title variant='h3-large' className='relative mb-8 border-none'>
					{job}
					<span className='top-1/2 right-0 -z-10 absolute text-zinc-800 text-7xl -translate-y-1/2'>
						{idx}
					</span>
				</Title>
				<p className='mb-8'>{description}</p>
				{responsibilities && (
					<ul className='mb-8 text-zinc-400 text-base'>
						{responsibilities.map((item, idx) => (
							<li
								key={idx}
								className='flex justify-start items-start mb-1'
							>
								<span className='mr-4'>—</span>
								{item}
							</li>
						))}
					</ul>
				)}
				{techStack && (
					<p className='flex flex-wrap justify-start items-start'>
						<span className='mr-4'>Tech stack:</span>
						{techStack.map((item, idx) => (
							<Tag key={idx} tag={item} />
						))}
					</p>
				)}
			</div>
		</div>
	</div>
)

export default ExperienceItem
