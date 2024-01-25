import Title from '@/app/components/Title'
import topBannerImage from '@/app/assets/images/top-banner-image.jpg'
import Button from '@/app/components/Button'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import BackgroundGeometricShape from '@/app/assets/images/BackgroundGeometricShape'
import SpinningCircleShape from '@/app/assets/images/SpinningCircleShape'
import CircleShape from '@/app/assets/images/CircleShape'
import LinesShape from '@/app/assets/images/LinesShape'
import BlurCircleShape from '@/app/assets/images/BlurCircleShape'
import { useRef } from 'react'
import useUpDownShapeAnimation from '@/hooks/useUpDownShapeAnimation'
import TitleAnimated from '@/app/components/Title/TitleAnimated'

const TopBanner = () => {
	const animatedGeometricShapeRef = useRef(null)
	const animatedBlurCircleRef = useRef(null)
	useUpDownShapeAnimation(animatedGeometricShapeRef, animatedBlurCircleRef)

	return (
		<div className='relative w-screen' id='top-banner'>
			<div className='container mx-auto w-full min-h-screen flex justify-between items-center py-60 px-6'>
				<div className='relative max-w-2xl z-10'>
					<TitleAnimated />
					<Title variant='h2' className='!text-global-color-two'>
						Front End Developer
					</Title>
					<Button />
				</div>
				<div className='max-w-xl relative'>
					<BackgroundLinesShape className='w-[1300px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-15' />
					<div
						ref={animatedGeometricShapeRef}
						className='w-[15vw] h-[15vw] absolute -top-[10%] left-[calc(50%-250px)] -translate-x-1/2'
					>
						<BackgroundGeometricShape
							variant='1'
							className='w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
						/>
					</div>
					<SpinningCircleShape className='animate-spin custom-animation-duration w-40 h-40 absolute -top-[5%] left-[10%] z-20 rounded-full' />
					<RadialGradientCircle
						color='--global-color-one'
						className='scale-[4] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-30'
					/>
					<RadialGradientCircle
						color='--global-color-two'
						className='scale-[3] absolute -bottom-[10%] -left-[20%] opacity-20'
					/>
					<RadialGradientCircle
						color='--global-color-three'
						className='scale-[3] absolute -top-[10%] -right-[10%] opacity-40'
					/>
					<div
						ref={animatedBlurCircleRef}
						className='w-24 h-24 absolute bottom-[30%] -right-[10%] z-20'
					>
						<BlurCircleShape className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
					</div>
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
}

export default TopBanner
