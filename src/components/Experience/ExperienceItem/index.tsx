import { FC } from 'react'
import Title from '@/app/components/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

type ExperienceItemType = {
	company: string
	country: string
	job: string
	date: string
	description: string
	responsibilities: string[]
	teckStack: string[]
}

type PropsType = {
	experience: ExperienceItemType
	idx: string
}

const ExperienceItem: FC<PropsType> = ({ experience, idx }) => {
	const {
		company,
		country,
		job,
		date,
		description,
		responsibilities,
		teckStack,
	} = experience

	return (
		<div className='w-full mb-16 pb-16 border-b border-zinc-700 last:mb-0 last:pb-0 last:border-none'>
			<div className='flex justify-between items-start gap-16'>
				<div className='w-full max-w-64'>
					<Title className='!mb-4 border-b-2 border-lime-400 pb-4'>
						{company}
					</Title>
					<div className='text-base'>
						<p>
							<FontAwesomeIcon
								icon={faEarthAmericas}
								className='mr-2'
							/>
							{country}
						</p>
						<p className='text-zinc-400 pl-6'>{date}</p>
					</div>
				</div>
				<div className='w-full pt-12'>
					<Title
						variant='h3-large'
						className='border-none mb-8 relative'
					>
						{job}
						<span className='absolute top-1/2 right-0 -translate-y-1/2 text-zinc-800 text-7xl'>
							{idx}
						</span>
					</Title>
					<p className='mb-8'>{description}</p>
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
					<p>
						Teck stack:{' '}
						<span className='ml-2 text-lime-400'>
							{teckStack.map((item, idx) => (
								<span
									key={idx}
									className='bg-lime-900/30 text-base px-4 py-2 mr-2 rounded-3xl'
								>
									{item}
								</span>
							))}
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default ExperienceItem
