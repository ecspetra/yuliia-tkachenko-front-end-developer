import { FC } from 'react'
import classNames from 'classnames'

interface PropsType {
	className?: string
}

const BlurCircleShape: FC<PropsType> = ({ className }) => (
	<div
		className={classNames(
			'w-full h-full bg-white/20 backdrop-blur-md rounded-full',
			className
		)}
	/>
)

export default BlurCircleShape
