import Title from '@/app/components/Title'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import SpinningCircleShape from '@/app/assets/images/SpinningCircleShape'
import BackgroundGeometricShape from '@/app/assets/images/BackgroundGeometricShape'
import CircleShape from '@/app/assets/images/CircleShape'
import LinesShape from '@/app/assets/images/LinesShape'
import { SVG_IDS } from '@/constants/svgUniqueKeys'
import TextSVG from '@/app/components/TextSVG'

const Education = () => (
	<div className='w-full pt-40' id='education'>
		<div className='container relative mx-auto bg-zinc-950 rounded-3xl text-center'>
			<CircleShape className='w-8 absolute -top-3 left-[25%] z-20' />
			<div className='py-40 px-6 relative rounded-3xl overflow-hidden'>
				<BackgroundLinesShape className='w-full absolute -bottom-[35%] -right-[45%] opacity-10 -rotate-120 z-10' />
				<RadialGradientCircle
					id={SVG_IDS.circle10}
					color='global-color-one-scheme-1'
					className='scale-[4] absolute top-0 -right-[10%] opacity-20'
				/>
				<RadialGradientCircle
					id={SVG_IDS.circle11}
					color='global-color-three-scheme-1'
					className='scale-[4] absolute -bottom-[40%] right-0 opacity-20'
				/>
				<SpinningCircleShape className='spinner-animation w-40 h-40 absolute -bottom-20 left-[25%] z-20 rounded-full' />
				<BackgroundGeometricShape
					id={SVG_IDS.backgroundShape4}
					variant='4'
					className='w-[600px] absolute top-[30%] -left-[20%]'
				/>
				<LinesShape className='w-24 absolute top-[15%] left-[90%] z-20' />
				<div className='relative z-40'>
					<Title variant='h3'>Education</Title>
					<Title>Master of Computer Science</Title>
					<p>Pryazovskyi State Technical University</p>
					<p className='text-base text-zinc-400'>Ukraine, 2019</p>
				</div>
			</div>
		</div>
	</div>
)

export default Education
