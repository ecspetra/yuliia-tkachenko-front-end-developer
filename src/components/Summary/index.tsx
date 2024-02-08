import Title from '@/app/components/Title'
import summaryImage from '../../../public/assets/images/summary-image.jpg'
import Button from '@/app/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import { CONTACTS_LIST, SOCIAL_LINKS_LIST } from '@/constants/contactsList'
import BackgroundGeometricShape from '@/app/assets/images/BackgroundGeometricShape'
import CircleShape from '@/app/assets/images/CircleShape'
import { SVG_IDS } from '@/constants/svgUniqueKeys'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import useParallax from '@/hooks/useParallax'
gsap.registerPlugin(ScrollTrigger)

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
			<div className='container xl:max-w-6xl mx-auto px-6 py-20 2xl:py-60'>
				<div className='w-full mx-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-16 mb-12'>
					<div className='w-full flex items-end flex-grow max-w-full lg:max-w-1/2 relative'>
						<RadialGradientCircle
							id={SVG_IDS.circle4}
							color='global-color-one-scheme-1'
							className='w-[110vw] h-[110vw] lg:w-[800px] lg:h-[800px] 2xl:w-[1300px] 2xl:h-[1300px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20'
						/>
						<RadialGradientCircle
							id={SVG_IDS.circle5}
							color='global-color-two-scheme-1'
							className='w-[110vw] h-[110vw] lg:w-[800px] lg:h-[800px] absolute top-[65%] left-[95%] -translate-y-1/2 -translate-x-1/2 opacity-20'
						/>
						<div
							ref={circleRef}
							className='w-8 h-8 absolute top-[30%] -left-4 lg:-left-[10%] z-20 invisible'
						>
							<CircleShape className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
						</div>
						<div className='text-zinc-950 max-w-32 uppercase text-sm font-bold absolute bottom-24 -right-4 lg:top-[20%] lg:-right-[3%] px-5 flex flex-col justify-center items-start z-20'>
							<BackgroundGeometricShape
								id={SVG_IDS.backgroundShape2}
								variant='2'
								className='w-44 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
							/>
							<span className='text-7xl relative z-30'>6+</span>
							<p className='relative z-30 leading-none font-bold'>
								years of experience in IT
							</p>
						</div>
						<div
							ref={imageRef}
							className='relative z-10 aspect-[4/3] h-fit rounded-xl sm:rounded-3xl overflow-hidden'
						>
							<img
								src={summaryImage.src}
								className='object-cover w-full h-full'
								alt='Summary'
							/>
						</div>
					</div>
					<div className='w-full sm:w-[80%] lg:max-w-1/2 relative z-40 text-center lg:text-left'>
						<Title variant='h3'>Summary</Title>
						<Title variant='h2'>About me</Title>
						<div>
							<p className='mb-4'>
								I have{' '}
								<span className='underline'>over 2 years</span>{' '}
								of experience in front-end development and{' '}
								<span className='underline'>
									more than 4 years
								</span>{' '}
								of experience in UI/UX design.
							</p>
							<p className='mb-12'>
								Since the beginning of my journey as a
								developer, I have worked on a wide variety of
								tasks both by myself and in collaboration with
								talented people. I have experience in
								development of web applications, landing pages,
								corporate websites.
							</p>
							<p className='mb-4'>My contacts:</p>
						</div>
						<div className='text-base'>
							{CONTACTS_LIST.map((item, idx) => (
								<p key={idx} className='mb-2'>
									<FontAwesomeIcon
										icon={item.icon}
										className='mr-2'
									/>
									<span className='mr-2 font-semibold'>
										{item.title}:
									</span>
									{item.value}
								</p>
							))}
						</div>
					</div>
				</div>
				<div className='flex justify-center items-start gap-4'>
					{SOCIAL_LINKS_LIST.map((item, idx) => (
						<div
							key={idx}
							className='flex flex-col justify-start items-center gap-4'
						>
							<Button
								context='social-link'
								link={item.link}
								icon={item.icon}
							/>
							<span className='[writing-mode:vertical-lr] text-base text-zinc-400 tracking-[4px]'>
								{item.title}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Summary
