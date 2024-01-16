import { FC, ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

type PropsType = {
	children: ReactNode
}

const SkillsItem: FC<PropsType> = ({ children }) => (
	<div className='min-w-40 flex flex-col justify-center items-center p-4 text-white bg-lime-400/20 rounded-xl'>
		<FontAwesomeIcon
			className='p-2 bg-zinc-900 rounded-full text-lime-400'
			icon={faCheck}
		/>
		<p className=''>{children}</p>
	</div>
)

export default SkillsItem
