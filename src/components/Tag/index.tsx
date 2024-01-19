import { FC } from 'react'

type PropsType = {
	tag: string
}

const Tag: FC<PropsType> = ({ tag }) => (
	<span className='bg-lime-900/30 text-lime-400 text-base px-3 py-1 mr-1 mb-1 rounded-3xl break-normal'>
		{tag}
	</span>
)

export default Tag
