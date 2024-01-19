import Title from '@/app/components/Title'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundShape from '@/app/assets/images/BackgroundShape'
import BackgroundShape4 from '@/app/assets/images/BackgroundShape4'
import BackgroundShape7 from '@/app/assets/images/BackgroundShape7'
import CircleShape from '@/app/assets/images/CircleShape'
import LinesShape from '@/app/assets/images/LinesShape'

const Education = () => (
	<div className='container relative mx-auto bg-zinc-950 rounded-3xl text-center'>
		<CircleShape className='w-8 absolute -top-3 left-[25%] z-20' />
		<div className='py-40 px-6 relative rounded-3xl overflow-hidden'>
			<BackgroundShape className='w-[1300px] absolute -bottom-[30%] -right-[35%] opacity-10 -rotate-120 z-10' />
			<RadialGradientCircle
				color='#22d3ee'
				size={1400}
				className='absolute -bottom-[120%] -right-[50%] opacity-20'
			/>
			<RadialGradientCircle
				color='#eab308'
				size={1000}
				className='absolute -bottom-[110%] -right-[20%] opacity-20'
			/>
			<BackgroundShape4 className='animate-spin custom-animation-duration w-40 h-40 absolute -bottom-20 left-[25%] z-20 rounded-full' />
			<BackgroundShape7 className='w-[600px] absolute -bottom-[100%] left-[5%] -translate-y-1/2 -translate-x-1/2' />
			<LinesShape className='w-24 absolute top-[30%] left-[90%] -translate-y-1/2 -translate-x-1/2 z-20' />
			<Title variant='h3'>Education</Title>
			<Title>Master of Computer Science</Title>
			<p>Pryazovskyi State Technical University</p>
			<p className='text-base text-zinc-400'>Ukraine, 2019</p>
		</div>
	</div>
)

export default Education
