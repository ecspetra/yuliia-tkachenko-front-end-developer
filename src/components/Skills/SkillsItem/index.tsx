import { FC, ReactNode, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Title from '@/app/components/Title'
import useSkillItemAnimation from '@/hooks/useSkillItemAnimation'

type PropsType = {
	children: ReactNode
	idx: number
}

const SkillsItem: FC<PropsType> = ({ children, idx }) => {
	const skillItemRef = useRef(null)
	useSkillItemAnimation(skillItemRef, idx)

	return (
		<div
			ref={skillItemRef}
			className='w-[calc((100%-48px)/3)] p-6 bg-zinc-950/85 backdrop-blur-lg rounded-xl border border-zinc-700'
		>
			<span className='block text-sm text-zinc-500 mb-3'>{idx}</span>
			<div className='flex justify-between items-center'>
				<Title variant='h3-large' className='!-mb-6 !pb-6'>
					{children}
				</Title>
				<FontAwesomeIcon className='text-lime-400' icon={faCode} />
			</div>
		</div>
	)
}

export default SkillsItem
