import Title from '@/app/components/Title'
import ExperienceItem from '@/components/Experience/ExperienceItem'
import { EXPERIENCE_LIST } from '@/constants/experienceList'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import { SVG_IDS } from '@/constants/svgUniqueKeys'
import TextSVG from '@/app/components/TextSVG'

const Experience = () => (
	<div className='w-full relative max-w-6xl px-6 pt-40' id='experience'>
		<RadialGradientCircle
			id={SVG_IDS.circle8}
			color='global-color-one-scheme-1'
			className='scale-[4] absolute -bottom-[20%] -left-[10%] opacity-20'
		/>
		<RadialGradientCircle
			id={SVG_IDS.circle9}
			color='global-color-two-scheme-1'
			className='scale-[3] absolute -bottom-[20%] left-0 opacity-20'
		/>
		<div className='text-center relative z-40'>
			<Title variant='h3' className='flex justify-center'>
				Work
			</Title>
			<Title className='!mb-40'>Experience</Title>
		</div>
		<div>
			{EXPERIENCE_LIST.map((item, idx) => (
				<ExperienceItem
					key={idx}
					experience={item}
					idx={`0${idx + 1}`}
				/>
			))}
		</div>
	</div>
)

export default Experience
