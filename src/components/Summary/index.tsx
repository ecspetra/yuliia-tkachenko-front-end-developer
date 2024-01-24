import Title from '@/app/components/Title'
import summaryImage from '@/app/assets/images/summary-image.jpg'
import Button from '@/app/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import { CONTACTS_LIST, SOCIAL_LINKS_LIST } from '@/constants/contactsList'
import BackgroundGeometricShape from '@/app/assets/images/BackgroundGeometricShape'
import CircleShape from '@/app/assets/images/CircleShape'

const Summary = () => (
	<div className='max-w-6xl px-6 py-60' id='summary'>
		<div className='w-full flex justify-between items-center gap-16 mb-12'>
			<div className='w-full max-w-1/2 relative'>
				<RadialGradientCircle
					color='#22d3ee'
					className='scale-[4] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20'
				/>
				<RadialGradientCircle
					color='#a3e635'
					className='scale-[4] absolute -bottom-[40%] -right-[10%] opacity-20'
				/>
				<CircleShape className='w-8 absolute top-[70%] -left-[3%] z-20' />
				<div className='text-zinc-950 max-w-32 uppercase text-sm font-bold absolute top-[20%] -right-[3%] px-5 rounded-xl flex flex-col justify-center items-start z-20'>
					<BackgroundGeometricShape
						variant='2'
						className='w-44 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
					/>
					<span className='text-7xl relative z-30'>6+</span>
					<p className='relative z-30 leading-none font-extrabold'>
						years of experience in IT
					</p>
				</div>
				<img
					className='relative z-10 rounded-3xl'
					src={summaryImage.src}
					alt='Summary'
				/>
			</div>
			<div className='w-full max-w-1/2 relative z-40'>
				<Title variant='h3'>Summary</Title>
				<Title variant='h2'>About me</Title>
				<div className='mb-12'>
					<p className='mb-4'>
						Have 2+ years of experience in Front End Development and
						4+ years in UI/UX Design.
					</p>
					<p>
						Since the beginning of my journey as a developer, I have
						worked on a wide variety of tasks both by myself and in
						collaboration with talented people. I have experience in
						development of web applications, landing pages,
						corporate websites.Nowadays I’m focused on learning
						ReactJS to continue professional growth.
					</p>
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
					<span className='[writing-mode:vertical-lr] text-base text-lime-400'>
						{item.title}
					</span>
				</div>
			))}
		</div>
	</div>
)

export default Summary
