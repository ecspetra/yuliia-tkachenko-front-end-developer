import { FC, ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Title from '@/app/components/Title'

type PropsType = {
	children: ReactNode
	idx: ReactNode
}

const SkillsItem: FC<PropsType> = ({ children, idx }) => (
	<div className='w-[calc((100%-48px)/3)] p-6 bg-zinc-950 rounded-xl border border-zinc-700'>
		<span className='block text-sm text-zinc-500 mb-3'>{idx}</span>
		<div className='flex justify-between items-center text-white'>
			<Title
				variant='h3'
				className='!text-xl text-white border-b-2 border-lime-400 !-mb-6 pb-6'
			>
				{children}
			</Title>
			<FontAwesomeIcon className='text-lime-400' icon={faCode} />
		</div>
	</div>
)

export default SkillsItem
