import Title from '@/app/components/Title'
import useSkillsItemAnimation from '@/hooks/useSkillsItemAnimation'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dynamic from 'next/dynamic'
import { FC, useRef } from 'react'

const BackgroundSvgFill = dynamic(
	() => import('@/app/assets/images/BackgroundSvgFill'),
	{ ssr: false }
)

type PropsType = {
	title: string
	skills: string[]
}

const SkillsItem: FC<PropsType> = ({ title, skills }) => {
	const skillItemRef = useRef<HTMLDivElement>(null)
	const spanRef = useRef<HTMLSpanElement>(null)
	useSkillsItemAnimation(skillItemRef, spanRef, 1)

	return (
		<div
			ref={skillItemRef}
			className='bg-zinc-950/85 backdrop-blur-lg p-6 sm:p-10 border border-zinc-700 rounded-xl'
		>
			<span className='block mb-3 text-zinc-500 text-sm'>
				{skills.length} skills
			</span>
			<div className='flex justify-between items-center gap-4'>
				<Title variant='h3-large'>{title}</Title>
				<FontAwesomeIcon className='size-6 text-zinc-500' icon={faCode} />
			</div>
			<span ref={spanRef} className='block relative my-6 w-full h-0.5'>
				<BackgroundSvgFill borderRadius={0} />
			</span>
			<ul className='flex flex-wrap gap-3'>
				{skills.map(skill => (
					<li
						key={skill}
						className='bg-zinc-900/60 hover:bg-zinc-800 px-4 py-2 border border-zinc-700 hover:border-zinc-500 rounded-full text-zinc-200 text-base transition-colors'
					>
						{skill}
					</li>
				))}
			</ul>
		</div>
	)
}

export default SkillsItem
