import { FC } from 'react'
import Title from '@/app/components/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import Tag from '@/components/Tag'
import BackgroundSvgFill from '@/app/assets/images/BackgroundSvgFill'
import { SVG_IDS } from '@/constants/svgUniqueKeys'

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

const ExperienceItem: FC<PropsType> = ({
	experience: {
		company,
		country,
		job,
		date,
		description,
		responsibilities,
		teckStack,
	},
	idx,
}) => (
	<div className='w-full mb-8 pb-8 2xl:mb-16 2xl:pb-16 border-b border-zinc-700 last:mb-0 last:pb-0 last:border-none relative z-40'>
		<div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-start gap-0 lg:gap-16'>
			<div className='w-full sm:max-w-[80%] lg:max-w-64'>
				<Title className='!mb-4'>{company}</Title>
				<span className='relative w-full h-0.5 block mb-4'>
					<BackgroundSvgFill
						id={SVG_IDS.backgroundFill9}
						borderRadius={0}
					/>
				</span>
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
			<div className='w-full sm:w-[80%] lg:w-full pt-16'>
				<Title variant='h3-large' className='border-none mb-8 relative'>
					{job}
					<span className='absolute top-1/2 right-0 -translate-y-1/2 text-zinc-800 text-7xl -z-10'>
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
				<p className='flex justify-start items-start flex-wrap'>
					<span className='mr-4'>Teck stack:</span>
					{teckStack.map((item, idx) => (
						<Tag key={idx} tag={item} />
					))}
				</p>
			</div>
		</div>
	</div>
)

export default ExperienceItem
