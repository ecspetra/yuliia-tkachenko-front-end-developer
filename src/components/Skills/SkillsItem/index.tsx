import { FC, ReactNode, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Title from '@/app/components/Title'
import useSkillsItemAnimation from '@/hooks/useSkillsItemAnimation'

type PropsType = {
	children: ReactNode
	idx: number
}

const SkillsItem: FC<PropsType> = ({ children, idx }) => {
	const skillItemRef = useRef(null)
	const spanRef = useRef(null)
	useSkillsItemAnimation(skillItemRef, spanRef, idx)

	return (
		<div
			ref={skillItemRef}
			className='w-[calc((100%-48px)/3)] p-6 bg-zinc-950/85 backdrop-blur-lg rounded-xl border border-zinc-700'
		>
			<span className='block text-sm text-zinc-500 mb-3'>{idx}</span>
			<div className='flex justify-between items-center'>
				<div>
					<Title variant='h3-large'>{children}</Title>
					<span
						ref={spanRef}
						className='w-full h-0.5 bg-global-color-two block mt-6 -mb-6'
					/>
				</div>
				<FontAwesomeIcon
					className='text-global-color-two'
					icon={faCode}
				/>
			</div>
		</div>
	)
}

export default SkillsItem
