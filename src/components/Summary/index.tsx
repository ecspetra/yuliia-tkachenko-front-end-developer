import Title from '@/app/components/Title'
import Contacts from '@/components/Contacts'
import { CONTACTS_LIST } from '@/constants/contactsList'
import useParallax from '@/hooks/useParallax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

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

const Summary = () => {
	const imageRef = useRef<HTMLDivElement>(null)
	const circleRef = useRef<HTMLDivElement>(null)
	useParallax(
		[
			{ shapeRef: imageRef, shiftYValue: -150 },
			{ shapeRef: circleRef, shiftXValue: 100, shiftYValue: 250 },
		],
		'summary'
	)

	return (
		<div className='w-screen overflow-hidden' id='summary'>
			<div className='mx-auto px-6 py-20 2xl:py-60 xl:max-w-6xl container'>
				<div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-16 mx-auto mb-12 w-full'>
					<div className='relative flex flex-grow items-end w-full max-w-full lg:max-w-1/2'>
						<RadialGradientCircle
							color='global-color-one'
							className='top-1/2 left-1/2 absolute opacity-40 w-[110vw] lg:w-[800px] 2xl:w-[1300px] h-[110vw] lg:h-[800px] 2xl:h-[1300px] -translate-x-1/2 -translate-y-1/2'
						/>
						<RadialGradientCircle
							color='global-color-two'
							className='top-[65%] left-[95%] absolute opacity-20 w-[110vw] lg:w-[800px] h-[110vw] lg:h-[800px] -translate-x-1/2 -translate-y-1/2'
						/>
						<div
							ref={circleRef}
							className='invisible top-[30%] -left-4 lg:-left-[10%] z-20 absolute w-8 h-8'
						>
							<CircleShape className='top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2' />
						</div>
						<div className='lg:top-[20%] -right-4 lg:-right-[3%] bottom-24 z-20 absolute flex flex-col justify-center items-start px-5 max-w-32 font-bold text-zinc-950 text-sm uppercase'>
							<BackgroundGeometricShape
								variant='2'
								className='top-1/2 left-1/2 absolute w-44 -translate-x-1/2 -translate-y-1/2'
							/>
							<span className='z-30 relative text-7xl'>6+</span>
							<p className='z-30 relative font-bold leading-none'>
								years of experience
							</p>
						</div>
						<div
							ref={imageRef}
							className='z-10 relative rounded-xl sm:rounded-3xl w-full h-fit aspect-[4/3] overflow-hidden'
						>
							<Image
								className='w-full h-full object-cover'
								src='/assets/images/summary-image.webp'
								alt='Summary'
								fill
								sizes='(min-width: 1024px) 500px, 100vw'
								loading='lazy'
							/>
						</div>
					</div>
					<div className='z-40 relative w-full sm:w-[80%] lg:max-w-1/2 lg:text-left text-center'>
						<Title variant='h3'>Summary</Title>
						<Title variant='h2'>About me</Title>
						<div>
							<p className='mb-4'>
								I offer{' '}
								<span className='underline'>over 6 years</span>{' '}
								of commercial work experience in Web
								Development:{' '}
								<span className='underline'>2.5 years</span> as
								a Software Developer and{' '}
								<span className='underline'>4 years</span> as a
								UI/UX designer.
							</p>
							<p className='mb-12'>
								During this time, I have contributed to creating
								and developing{' '}
								<span className='underline'>20+ projects</span>{' '}
								of various sizes and complexity. I have
								established myself as a software developer with
								a passion for creating efficient and innovative
								solutions to complex problems.
							</p>
							<p className='mb-4'>My contacts:</p>
							<div className='text-base'>
								{CONTACTS_LIST.map((item, idx) => (
									<p
										key={idx}
										className='flex justify-center lg:justify-start items-center mb-2'
									>
										<FontAwesomeIcon
											icon={item.icon}
											className='mr-2 size-4'
										/>
										<span className='mr-2 font-semibold'>
											{item.title}:
										</span>
										{item.title === 'Email' ? (
											<a
												href={`mailto:${item.value}`}
												className='rounded-sm outline-none underline decoration-transparent hover:text-white focus-visible:text-white hover:decoration-current focus-visible:decoration-current focus-visible:ring-1 focus-visible:ring-white duration-300'
											>
												{item.value}
											</a>
										) : (
											item.value
										)}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
				<Contacts isShowTitle />
			</div>
		</div>
	)
}

export default Summary
