import Title from '@/app/components/Title'
import ExperienceItem from '@/components/Experience/ExperienceItem'
import {
	EXPERIENCE_LIST,
	VOLUNTEER_EXPERIENCE,
} from '@/constants/experienceList'
import dynamic from 'next/dynamic'

const RadialGradientCircle = dynamic(
	() => import('@/app/assets/images/RadialGradientCircle'),
	{ ssr: false }
)

const Experience = () => (
	<div
		className='w-full relative container xl:max-w-6xl px-6 py-20 2xl:py-40 overflow-hidden lg:overflow-visible'
		id='experience'
	>
		<RadialGradientCircle
			color='global-color-one'
			className='w-[1300px] h-[1300px] hidden lg:block absolute top-[110%] left-[5%] -translate-y-1/2 -translate-x-1/2 opacity-30'
		/>
		<RadialGradientCircle
			color='global-color-two'
			className='w-[800px] h-[800px] hidden lg:block absolute top-[110%] left-[15%] -translate-y-1/2 -translate-x-1/2 opacity-30'
		/>
		<div className='text-center relative z-40'>
			<Title variant='h3' className='flex justify-center'>
				Work
			</Title>
			<Title className='!mb-16 lg:!mb-20 2xl:!mb-40'>Experience</Title>
		</div>
		<div className='mb-40'>
			{EXPERIENCE_LIST.map((item, idx) => (
				<ExperienceItem
					key={idx}
					experience={item}
					idx={`0${idx + 1}`}
				/>
			))}
		</div>
		<div>
			<div className='text-center relative z-40'>
				<Title className='!mb-16 lg:!mb-20 2xl:!mb-40'>
					Volunteering
				</Title>
			</div>
			<ExperienceItem experience={VOLUNTEER_EXPERIENCE} />
		</div>
	</div>
)

export default Experience
