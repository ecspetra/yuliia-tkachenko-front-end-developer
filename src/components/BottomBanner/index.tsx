import Title from '@/app/components/Title'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import CircleShape from '@/app/assets/images/CircleShape'
import LinesShape from '@/app/assets/images/LinesShape'
import bottomBannerImage from '../../../public/assets/images/bottom-banner-image.jpg'
import Button from '@/app/components/Button'
import BackgroundGeometricShape from '@/app/assets/images/BackgroundGeometricShape'
import { useRef } from 'react'
import useUpDownShapeAnimation from '@/hooks/useUpDownShapeAnimation'
import { generateRandomId } from '@/handlers/generateRandomId'
import useParallax from '@/hooks/useParallax'
import Contacts from '@/components/Contacts'
import { CONTACTS_LIST } from '@/constants/contactsList'
import Image from 'next/image'

const BottomBanner = () => {
	const animatedGeometricShapeRef = useRef<HTMLDivElement>(null)
	const animatedBlurCircleRef = useRef<HTMLDivElement>(null)
	const circleRef = useRef<HTMLDivElement>(null)
	useUpDownShapeAnimation([
		{ elementRef: animatedGeometricShapeRef, distance: 50, interval: 3 },
		{ elementRef: animatedBlurCircleRef, distance: 50, interval: 4 },
	])
	useParallax(
		[
			{
				shapeRef: circleRef,
				shiftXValue: -100,
				shiftYValue: -150,
			},
		],
		'cv'
	)

	return (
		<div
			className='relative min-h-screen flex justify-center items-center py-20 2xl:py-40 w-screen bg-zinc-950 overflow-hidden'
			id='cv'
		>
			<div className='container mx-auto px-6 h-full relative z-10 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-16'>
				<div className='aspect-[400/481] w-full h-full max-w-[70vw] sm:max-w-[45vw] lg:max-w-[55vh] 2xl:max-w-xl relative mb-8 lg:mb-0'>
					<BackgroundLinesShape className='w-[100vw] sm:w-[70vw] lg:w-[80vh] lg:max-w-[65vw] lg:max-h-[65vw] 2xl:w-[900px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-15 -scale-x-100 rotate-180' />
					<div
						ref={animatedGeometricShapeRef}
						className='w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] lg:w-[65vh] lg:h-[65vh] lg:max-w-[45vw] lg:max-h-[45vw] 2xl:w-[680px] 2xl:h-[680px] absolute top-[10%] left-1/2 -translate-x-1/2 z-10'
					>
						<BackgroundGeometricShape
							id={generateRandomId('backgroundShape', 5)}
							variant='5'
							className='w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
						/>
					</div>
					<RadialGradientCircle
						id={generateRandomId('circle', 5)}
						color='global-color-one'
						className='w-[160vw] h-[160vw] sm:w-[100vw] sm:h-[100vw] lg:w-[100vh] lg:h-[100vh] 2xl:w-[800px] 2xl:h-[800px] absolute top-[calc(50%+5vw)] left-[calc(50%+5vw)] lg:top-[80%] lg:left-[80%] -translate-y-1/2 -translate-x-1/2 opacity-30'
					/>
					<RadialGradientCircle
						id={generateRandomId('circle', 5)}
						color='global-color-two'
						className='w-[180vw] h-[180vw] sm:w-[120vw] sm:h-[120vw] lg:w-[120vh] lg:h-[120vh] 2xl:w-[1300px] 2xl:h-[1300px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-80'
					/>
					<RadialGradientCircle
						id={generateRandomId('circle', 5)}
						color='global-color-three'
						className='w-[160vw] h-[160vw] sm:w-[100vw] sm:h-[100vw] lg:w-[100vh] lg:h-[100vh] 2xl:w-[800px] 2xl:h-[800px] absolute top-[calc(50%-5vw)] left-[calc(50%-5vw)] lg:top-[20%] lg:left-[20%] -translate-y-1/2 -translate-x-1/2 opacity-50'
					/>
					<div
						ref={animatedBlurCircleRef}
						className='w-16 h-16 lg:w-24 lg:h-24 absolute bottom-[50%] -right-[10%] z-20'
					>
						<CircleShape
							className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
							isBlurred
						/>
					</div>
					<div
						ref={circleRef}
						className='w-8 h-8 lg:w-12 lg:h-12 absolute -bottom-4 left-[15%] lg:-bottom-6 lg:left-[10%] z-20 invisible'
					>
						<CircleShape className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
					</div>
					<LinesShape className='w-14 lg:w-24 absolute top-[10%] right-0 z-20' />
					<Image
						className='relative z-10 rounded-xl sm:rounded-3xl'
						src={bottomBannerImage}
						alt='Bottom Banner'
						layout='fill'
						loading='eager'
					/>
				</div>
				<div className='relative max-w-md lg:max-w-2xl w-full z-40 flex flex-col items-center lg:block text-center lg:text-left'>
					<div className='mb-10 2xl:mb-16'>
						<Title className='!text-5xl 2xl:!text-7xl'>
							Let’s work together
						</Title>
						<p className='mb-10 2xl:mb-14'>
							Contact me for collaboration
							<span className='text-2xl ml-1 align-middle'>
								&#128522;
							</span>
						</p>
						<Button />
					</div>
					<Contacts variant='v2' isLeftAligned />
					<div className='text-base text-zinc-400 flex flex-col sm:flex-row items-center justify-start'>
						{CONTACTS_LIST.map((item, idx) => {
							if (
								item.title === 'Email' ||
								item.title === 'Phone'
							) {
								return (
									<p key={idx}>
										{item.value}
										{idx !== CONTACTS_LIST.length - 1 && (
											<span className='mx-4 hidden sm:inline-block'>
												|
											</span>
										)}
									</p>
								)
							}
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BottomBanner
