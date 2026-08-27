import DotsAnimation from '@/app/assets/animation/DotsAnimation'
import BackgroundLinesShape from '@/app/assets/images/BackgroundLinesShape'
import LinesShape from '@/app/assets/images/LinesShape'
import Button from '@/app/components/Button'
import Title from '@/app/components/Title'
import Contacts from '@/components/Contacts'
import { CONTACTS_LIST } from '@/constants/contactsList'
import useParallax from '@/hooks/useParallax'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRef } from 'react'

const RadialGradientCircle = dynamic(
	() => import('@/app/assets/images/RadialGradientCircle'),
	{ ssr: false }
)

const BackgroundGeometricShape = dynamic(
	() => import('@/app/assets/images/BackgroundGeometricShape'),
	{ ssr: false }
)

const CircleShape = dynamic(() => import('@/app/assets/images/CircleShape'), {
	ssr: false,
})

const BottomBanner = () => {
	const circleRef = useRef<HTMLDivElement>(null)
	useParallax(
		[
			{
				shapeRef: circleRef,
				shiftXValue: -100,
				shiftYValue: -150,
			},
		],
		'resume'
	)

	return (
		<div
			className='relative flex justify-center items-center bg-zinc-950 py-20 2xl:py-40 w-screen min-h-screen overflow-hidden'
			id='resume'
		>
			<div className='z-10 relative flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-16 mx-auto px-6 h-full container'>
				<div className='relative mb-8 lg:mb-0 w-full max-w-[70vw] sm:max-w-[45vw] lg:max-w-[55vh] 2xl:max-w-xl h-full aspect-[400/481]'>
					<BackgroundLinesShape className='top-1/2 left-1/2 absolute opacity-15 w-[100vw] sm:w-[70vw] lg:w-[80vh] 2xl:w-[900px] lg:max-w-[65vw] lg:max-h-[65vw] rotate-180 -scale-x-100 -translate-x-1/2 -translate-y-1/2' />
					<div className='top-[10%] left-1/2 z-10 absolute w-[80vw] sm:w-[50vw] lg:w-[65vh] 2xl:w-[680px] lg:max-w-[45vw] h-[80vw] sm:h-[50vw] lg:h-[65vh] 2xl:h-[680px] lg:max-h-[45vw] -translate-x-1/2'>
						<BackgroundGeometricShape
							variant='5'
							className='w-full h-full up-down-animated-shape up-down-animated-shape--decreased'
						/>
					</div>
					<RadialGradientCircle
						color='global-color-one'
						className='top-[calc(50%+5vw)] lg:top-[80%] left-[calc(50%+5vw)] lg:left-[80%] absolute opacity-30 w-[160vw] sm:w-[100vw] lg:w-[100vh] 2xl:w-[800px] h-[160vw] sm:h-[100vw] lg:h-[100vh] 2xl:h-[800px] -translate-x-1/2 -translate-y-1/2'
					/>
					<RadialGradientCircle
						color='global-color-two'
						className='top-1/2 left-1/2 absolute opacity-80 w-[180vw] sm:w-[120vw] lg:w-[120vh] 2xl:w-[1300px] h-[180vw] sm:h-[120vw] lg:h-[120vh] 2xl:h-[1300px] -translate-x-1/2 -translate-y-1/2'
					/>
					<RadialGradientCircle
						color='global-color-three'
						className='top-[calc(50%-5vw)] lg:top-[20%] left-[calc(50%-5vw)] lg:left-[20%] absolute opacity-50 w-[160vw] sm:w-[100vw] lg:w-[100vh] 2xl:w-[800px] h-[160vw] sm:h-[100vw] lg:h-[100vh] 2xl:h-[800px] -translate-x-1/2 -translate-y-1/2'
					/>
					<CircleShape
						className='-right-[10%] bottom-[50%] z-20 absolute w-16 lg:w-24 h-16 lg:h-24 up-down-animated-shape up-down-animated-shape--slow'
						isBlurred
					/>
					<div
						ref={circleRef}
						className='invisible -bottom-4 lg:-bottom-6 left-[15%] lg:left-[10%] z-20 absolute w-8 lg:w-12 h-8 lg:h-12'
					>
						<CircleShape className='top-1/2 left-1/2 absolute w-full h-full -translate-x-1/2 -translate-y-1/2' />
					</div>
					<LinesShape className='top-[10%] right-0 z-20 absolute w-14 lg:w-24' />
					<Image
						className='z-10 relative rounded-xl sm:rounded-3xl'
						src='/assets/images/bottom-banner-image.jpg'
						alt='Bottom Banner'
						layout='fill'
						loading='eager'
					/>
					<DotsAnimation id='dots-animation-3' />
				</div>
				<div className='lg:block z-40 relative flex flex-col items-center w-full max-w-md lg:max-w-2xl lg:text-left text-center'>
					<div className='mb-10 2xl:mb-16'>
						<div className='lg:block z-10 relative flex flex-col items-center order-2 lg:order-1 w-full max-w-md lg:max-w-xl'>
							{/* <Title variant='h1'>
								Yuliia <br />
								Tkachenko
							</Title>
							<Title
								variant='h2'
								className='!text-3xl !text-global-color-two-scheme-1'
							>
								<TextSVG text='Software Developer' />
							</Title>
							<Button icon={faCircleArrowDown}>Download Resume</Button> */}
							<Title className='!text-5xl 2xl:!text-7xl'>
								Let’s work together
							</Title>
							<p className='mb-10 2xl:mb-14'>
								Contact me for collaboration
								<span className='ml-1 text-2xl align-middle'>
									&#128522;
								</span>
							</p>
							<Button icon={faCircleArrowDown} isDownloadLink>
								Download Resume
							</Button>
						</div>
					</div>
					<Contacts variant='icon-v2' isLeftAligned />
					<div className='flex sm:flex-row flex-col justify-start items-center text-zinc-400 text-base'>
						{CONTACTS_LIST.map((item, idx) => {
							if (
								item.title === 'Email' ||
								item.title === 'Phone'
							) {
								return (
									<p key={idx}>
										{item.value}
										{idx !== CONTACTS_LIST.length - 1 && (
											<span className='hidden sm:inline-block mx-4'>
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
