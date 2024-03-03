import { FC } from 'react'
import Title from '@/app/components/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Tag from '@/components/Tag'
import BackgroundSvgFill from '@/app/assets/images/BackgroundSvgFill'
import { generateRandomId } from '@/handlers/generateRandomId'

type ExperienceItemType = {
	company: string
	country: string
	job: string
	date: string
	description: string
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
	<div className='w-full mb-8 pb-8 2xl:mb-16 2xl:pb-16 border-b border-zinc-700 last:mb-0 last:pb-0 last:border-none relative z-40'>
		<div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-start gap-0 lg:gap-16'>
			<div className='w-full lg:max-w-64'>
				<Title className='!mb-4'>{company}</Title>
				<span className='relative w-full h-0.5 block mb-4'>
					<BackgroundSvgFill
						id={generateRandomId('backgroundFill', 5)}
						borderRadius={0}
					/>
				</span>
				<div className='text-base'>
					<p className='flex justify-start items-center'>
						<FontAwesomeIcon
							icon={faLocationDot}
							className='mr-2 w-5 h-5'
						/>
						{country}
					</p>
					<p className='text-zinc-400 pl-6'>{date}</p>
				</div>
			</div>
			<div className='w-full pt-16'>
				<Title variant='h3-large' className='border-none mb-8 relative'>
					{job}
					<span className='absolute top-1/2 right-0 -translate-y-1/2 text-zinc-800 text-7xl -z-10'>
						{idx}
					</span>
				</Title>
				<p className='mb-8'>{description}</p>
				{responsibilities && (
					<ul className='mb-8 text-base text-zinc-400'>
						{responsibilities.map((item, idx) => (
							<li
								key={idx}
								className='mb-1 flex justify-start items-start'
							>
								<span className='mr-4'>—</span>
								{item}
							</li>
						))}
					</ul>
				)}
				{techStack && (
					<p className='flex justify-start items-start flex-wrap'>
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
