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
import { useRef } from 'react'
import useParallax from '@/hooks/useParallax'

const Portfolio = () => {
	const circleRef = useRef<HTMLDivElement>(null)
	useParallax(
		[
			{
				shapeRef: circleRef,
				shiftXValue: -100,
				shiftYValue: 150,
			},
		],
		'portfolio--designer'
	)

	return (
		<div className='w-screen overflow-hidden' id='portfolio'>
			<div className='container xl:max-w-6xl mx-auto px-6 py-20 2xl:py-40'>
				<div className='max-w-2xl mx-auto text-center relative z-40'>
					<Title variant='h3' className='flex justify-center'>
						Portfolio
					</Title>
					<Title className='!mb-16 lg:!mb-20 2xl:!mb-40'>
						A few of my pet projects from Front End Developer
						portfolio
					</Title>
				</div>
				<div className='w-full flex flex-wrap justify-center items-stretch gap-4 mb-20 lg:mb-40'>
					{FRONT_END_DEVELOPER_PROJECTS_LIST.map((item, idx) => (
						<PortfolioFrontEndItem
							key={idx}
							project={item}
							isEven={idx % 2 === 0}
							idx={idx}
						/>
					))}
				</div>
				<div
					className='max-w-2xl mx-auto text-center relative z-40'
					id='portfolio--designer'
				>
					<Title variant='h3' className='flex justify-center'>
						Portfolio
					</Title>
					<Title className='!mb-16 lg:!mb-20 2xl:!mb-40'>
						A few of my pet projects from UI/UX designer portfolio
					</Title>
				</div>
				<div className='relative grid grid-cols-3 gap-4 max-w-2xl mx-auto'>
					<RadialGradientCircle
						id={SVG_IDS.circle12}
						color='global-color-one'
						className='w-[180vw] h-[180vw] sm:w-[120vw] sm:h-[120vw] lg:w-[120vh] lg:h-[120vh] 2xl:w-[1300px] 2xl:h-[1300px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20'
					/>
					<RadialGradientCircle
						id={SVG_IDS.circle13}
						color='global-color-three'
						className='w-[160vw] h-[160vw] sm:w-[100vw] sm:h-[100vw] lg:w-[100vh] lg:h-[100vh] 2xl:w-[1000px] 2xl:h-[1000px] absolute top-[80%] left-[75%] -translate-y-1/2 -translate-x-1/2 opacity-20'
					/>
					<div
						ref={circleRef}
						className='w-4 h-4 absolute bottom-[60%] -right-[20%] z-20 invisible'
					>
						<CircleShape className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
					</div>
					{UI_UX_DESIGNER_PROJECTS_LIST.map((item, idx) => (
						<PortfolioUIUXDesignItem
							key={idx}
							image={item}
							idx={idx}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Portfolio
