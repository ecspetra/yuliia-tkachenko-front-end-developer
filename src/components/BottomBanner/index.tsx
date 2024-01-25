import Title from '@/app/components/Title'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import CircleShape from '@/app/assets/images/CircleShape'
import LinesShape from '@/app/assets/images/LinesShape'
import bottomBannerImage from '@/app/assets/images/bottom-banner-image.jpg'
import Button from '@/app/components/Button'
import BackgroundGeometricShape from '@/app/assets/images/BackgroundGeometricShape'
import BlurCircleShape from '@/app/assets/images/BlurCircleShape'
import { useRef } from 'react'
import useUpDownShapeAnimation from '@/hooks/useUpDownShapeAnimation'

const BottomBanner = () => {
	const animatedGeometricShapeRef = useRef(null)
	const animatedBlurCircleRef = useRef(null)
	useUpDownShapeAnimation(animatedGeometricShapeRef, animatedBlurCircleRef)

	return (
		<div
			className='relative min-h-screen flex justify-center items-center py-40 w-screen bg-zinc-950 overflow-hidden'
			id='cv'
		>
			<div className='container mx-auto px-6 h-full relative z-10 flex justify-between items-center gap-6'>
				<div className='max-w-xl relative'>
					<BackgroundLinesShape className='w-[1300px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-15 -scale-x-100 rotate-180' />
					<div
						ref={animatedGeometricShapeRef}
						className='w-[27vw] h-[27vw] absolute top-[10%] left-1/2 -translate-x-1/2 z-10'
					>
						<BackgroundGeometricShape
							variant='5'
							className='w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
						/>
					</div>
					<RadialGradientCircle
						color='--global-color-two'
						className='scale-[4] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-30'
					/>
					<RadialGradientCircle
						color='--global-color-three'
						className='scale-[3] absolute top-[10%] left-0 opacity-50'
					/>
					<RadialGradientCircle
						color='--global-color-one'
						className='scale-[4] absolute -bottom-[10%] -right-[10%] opacity-30'
					/>
					<div
						ref={animatedBlurCircleRef}
						className='w-24 h-24 absolute bottom-[50%] -right-[10%] z-20'
					>
						<BlurCircleShape className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
					</div>
					<CircleShape className='w-12 absolute -bottom-6 left-[10%] z-20' />
					<LinesShape className='w-24 absolute top-[10%] right-0 z-20' />
					<img
						className='relative z-10 rounded-3xl'
						src={bottomBannerImage.src}
						alt='Bottom Banner'
					/>
				</div>
				<div className='relative z-40'>
					<Title variant='h3'>Resume</Title>
					<Title className='!text-7xl'>
						Want to see my{' '}
						<span className='text-global-color-two'>CV?</span>
						<br />
						Download it!
					</Title>
					<p className='mb-16'>I will be glad to work with you ;)</p>
					<Button />
				</div>
			</div>
		</div>
	)
}

export default BottomBanner
