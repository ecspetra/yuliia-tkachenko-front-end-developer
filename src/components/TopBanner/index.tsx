import Title from '@/app/components/Title'
import topBannerImage from '@/app/assets/images/top-banner-image.jpg'
import Button from '@/app/components/Button'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundShape from '@/app/assets/images/BackgroundShape'
import BackgroundShape3 from '@/app/assets/images/BackgroundShape3'
import BackgroundShape4 from '@/app/assets/images/BackgroundShape4'
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
				<div className='flex justify-start items-center gap-4'>
					<Button>Contact me</Button>
					<Button context='text-button'>
						Download CV
						<FontAwesomeIcon className='ml-2' icon={faFile} />
					</Button>
				</div>
			</div>
			<div className='max-w-xl relative'>
				<BackgroundShape className='w-[1300px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-15' />
				<BackgroundShape3 className='w-[450px] absolute top-[calc(50%-200px)] left-[calc(50%-250px)] -translate-y-1/2 -translate-x-1/2' />
				<BackgroundShape4 className='animate-spin custom-animation-duration w-40 h-40 absolute -top-12 left-16 z-20 rounded-full' />
				<RadialGradientCircle
					color='#22d3ee'
					size={1100}
					className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20'
				/>
				<RadialGradientCircle
					color='#a3e635'
					className='absolute top-[calc(50%+200px)] left-[calc(50%-200px)] -translate-y-1/2 -translate-x-1/2 opacity-20'
				/>
				<RadialGradientCircle
					color='#eab308'
					className='absolute top-[calc(50%-200px)] left-[calc(50%+200px)] -translate-y-1/2 -translate-x-1/2 opacity-40'
				/>
				<CircleShape className='w-12 absolute top-[calc(50%+340px)] left-[calc(50%+200px)] -translate-y-1/2 -translate-x-1/2 z-20' />
				<LinesShape className='w-24 absolute top-[calc(50%-150px)] left-[calc(50%+230px)] -translate-y-1/2 -translate-x-1/2 z-20' />
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
