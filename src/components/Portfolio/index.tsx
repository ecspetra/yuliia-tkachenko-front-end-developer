import Title from '@/app/components/Title'
import {
	FRONT_END_DEVELOPER_PROJECTS_LIST,
	UI_UX_DESIGNER_PROJECTS_LIST,
} from '@/constants/projectsList'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import CircleShape from '@/app/assets/images/CircleShape'
import PortfolioFrontEndItem from '@/components/Portfolio/PortfolioFrontEndItem'
import PortfolioUIUXDesignItem from '@/components/Portfolio/PortfolioUIUXDesignItem'
import { SVG_IDS } from '@/constants/svgUniqueKeys'
import TextSVG from '@/app/components/TextSVG'

const Portfolio = () => (
	<div className='container px-6 py-40' id='portfolio'>
		<div className='max-w-2xl mx-auto text-center relative z-40'>
			<Title variant='h3' className='flex justify-center'>
				Front End Developer portfolio
			</Title>
			<Title className='!mb-40'>
				A few of my pet projects from Front End Developer portfolio
			</Title>
		</div>
		<div className='w-full max-w-6xl mx-auto flex flex-wrap justify-center items-stretch gap-4'>
			{FRONT_END_DEVELOPER_PROJECTS_LIST.map((item, idx) => (
				<PortfolioFrontEndItem
					key={idx}
					project={item}
					isEven={idx % 2 === 0}
					idx={idx}
				/>
			))}
		</div>
		<div className='max-w-2xl mx-auto text-center relative z-40'>
			<Title variant='h3' className='flex justify-center'>
				UI/UX designer portfolio
			</Title>
			<Title className='!mb-40'>
				A few of my pet projects from UI/UX designer portfolio
			</Title>
		</div>
		<div className='relative grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-2xl mx-auto'>
			<RadialGradientCircle
				id={SVG_IDS.circle12}
				color='global-color-one-scheme-1'
				className='scale-[4] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20'
			/>
			<RadialGradientCircle
				id={SVG_IDS.circle13}
				color='global-color-three-scheme-1'
				className='scale-[4] absolute -bottom-[40%] -right-[10%] opacity-20'
			/>
			<CircleShape className='w-4 absolute bottom-[30%] -right-[10%] z-20' />
			{UI_UX_DESIGNER_PROJECTS_LIST.map((item, idx) => (
				<PortfolioUIUXDesignItem key={idx} image={item} idx={idx} />
			))}
		</div>
	</div>
)

export default Portfolio
