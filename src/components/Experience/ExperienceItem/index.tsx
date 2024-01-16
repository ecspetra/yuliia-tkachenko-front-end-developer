import { FC } from 'react'
import Title from '@/app/components/Title'

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
}

const ExperienceItem: FC<PropsType> = ({ experience }) => {
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
		<div className='w-full bg-zinc-800 p-6 mb-8 last:mb-0 rounded-3xl'>
			<div className='flex justify-between items-start border-b-2 border-zinc-700 pb-4 mb-4'>
				<div className='flex items-center'>
					<Title className='!mb-0 !text-white border-r border-lime-500 pr-6 mr-6'>
						{company}
					</Title>
					<div className='font-extralight'>
						<p>{country}</p>
						<p>{date}</p>
					</div>
				</div>
				<p className='text-white'>{job}</p>
			</div>
			<p className='mb-8'>{description}</p>
			<ul className='mb-8'>
				{responsibilities.map((item, idx) => (
					<li key={idx} className='font-extralight mb-1'>
						— {item}
					</li>
				))}
			</ul>
			<p className='text-white font-semibold'>
				Teck stack:{' '}
				<span className='ml-2 text-lime-400'>
					{teckStack.map((item, idx) => (
						<span
							key={idx}
							className='bg-lime-900/30 px-4 py-2 mr-2 rounded-3xl'
						>
							{item}
						</span>
					))}
				</span>
			</p>
		</div>
	)
}

export default ExperienceItem
