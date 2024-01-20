import Title from '@/app/components/Title'
import topBannerImage from '@/app/assets/images/top-banner-image.jpg'
import Button from '@/app/components/Button'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import BackgroundGeometricShape from '@/app/assets/images/BackgroundGeometricShape'
import SpinningCircleShape from '@/app/assets/images/SpinningCircleShape'
import CircleShape from '@/app/assets/images/CircleShape'
import LinesShape from '@/app/assets/images/LinesShape'

const TopBanner = () => (
	<div className='relative w-screen'>
		<div className='container mx-auto w-full min-h-screen flex justify-between items-center py-60 px-6'>
			<div className='relative max-w-2xl z-10'>
				<Title variant='h1'>
					<span className='text-zinc-400'>Hi! I'm </span>
					<span className='border-b-2 border-lime-400'>
						Yuliia Tkachenko.
					</span>
				</Title>
				<Title variant='h2' className='!text-lime-400'>
					Front End Developer
				</Title>
				<Button icon={faFile} />
			</div>
			<div className='max-w-xl relative'>
				<BackgroundLinesShape className='w-[1300px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-15' />
				<BackgroundGeometricShape
					variant='1'
					className='w-[450px] absolute -top-[10%] left-[calc(50%-250px)] -translate-x-1/2'
				/>
				<SpinningCircleShape className='animate-spin custom-animation-duration w-40 h-40 absolute -top-[5%] left-[10%] z-20 rounded-full' />
				<RadialGradientCircle
					color='#22d3ee'
					className='scale-[4] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-30'
				/>
				<RadialGradientCircle
					color='#a3e635'
					className='scale-[3] absolute -bottom-[10%] -left-[20%] opacity-20'
				/>
				<RadialGradientCircle
					color='#eab308'
					className='scale-[3] absolute -top-[10%] -right-[10%] opacity-40'
				/>
				<CircleShape className='w-12 absolute -bottom-6 right-[10%] z-20' />
				<LinesShape className='w-24 absolute top-[20%] right-0 z-20' />
				<img
					className='relative z-10 rounded-3xl'
					src={topBannerImage.src}
					alt='Top Banner'
				/>
			</div>
		</div>
	</div>
)

export default TopBanner
