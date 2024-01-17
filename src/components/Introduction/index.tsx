import Title from '@/app/components/Title'
import introductionImage from '@/app/assets/images/introduction-image.jpg'
import Button from '@/app/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RadialGradientCircle from '@/app/assets/images/RadialGradientCircle'
import { CONTACTS_LIST, SOCIAL_LINKS_LIST } from '@/constants/contactsList'
import BackgroundShape5 from '@/app/assets/images/BackgroundShape5'

const Introduction = () => (
	<div className='py-60'>
		<div className='w-full flex justify-between items-center max-w-6xl gap-16 mb-12'>
			<div className='max-w-lg relative'>
				<RadialGradientCircle
					color='#22d3ee'
					size={1100}
					className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20'
				/>
				<RadialGradientCircle
					color='#a3e635'
					size={1100}
					className='absolute top-[calc(50%+200px)] left-[calc(50%+200px)] -translate-y-1/2 -translate-x-1/2 opacity-20'
				/>
				<div className='w-8 h-8 bg-lime-400 absolute top-[calc(50%+100px)] left-[calc(50%-260px)] -translate-y-1/2 -translate-x-1/2 z-20 rounded-full drop-shadow-[0_8px_8px_rgba(163,230,53,0.3)]' />
				<div className='text-zinc-950 max-w-32 uppercase text-sm font-extrabold absolute top-[calc(50%-50px)] left-[calc(50%+200px)] -translate-y-1/2 -translate-x-1/2 rounded-xl flex flex-col justify-center items-start z-20'>
					<BackgroundShape5 className='w-44 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
					<span className='text-7xl relative z-30'>2</span>
					<p className='relative z-30'>years of experience</p>
				</div>
				<img
					className='relative z-10 rounded-3xl'
					src={introductionImage.src}
					alt='Top Banner'
				/>
			</div>
			<div className='max-w-2xl relative z-10'>
				<Title variant='h3'>Introduction</Title>
				<Title variant='h2' className='!text-white'>
					About me
				</Title>
				<p className='font-extralight mb-12'>
					Since the beginning of my journey as a developer, I have
					worked on a wide variety of tasks both by myself and in
					collaboration with talented people. I have experience in
					development of web applications, landing pages, corporate
					websites.Nowadays I’m focused on learning ReactJS to
					continue professional growth.
				</p>
				<div className='text-base text-white font-extralight'>
					{CONTACTS_LIST.map((item, idx) => (
						<p key={idx} className='mb-2'>
							<FontAwesomeIcon
								icon={item.icon}
								className='mr-2'
							/>
							<span className='mr-2 font-normal'>
								{item.title}:
							</span>
							{item.value}
						</p>
					))}
				</div>
			</div>
		</div>
		<div className='flex justify-center items-start gap-4 relative z-10'>
			{SOCIAL_LINKS_LIST.map((item, idx) => (
				<div
					key={idx}
					className='flex flex-col justify-start items-center gap-4'
				>
					<Button context='social-link'>
						<FontAwesomeIcon icon={item.icon} />
					</Button>
					<span className='[writing-mode:vertical-lr] text-base font-extralight text-lime-400'>
						{item.title}
					</span>
				</div>
			))}
		</div>
	</div>
)

export default Introduction
