import { FC } from 'react'

interface PropsType {
	className: string
	color?: string
}

const CircleShape: FC<PropsType> = ({ className, color = '#a3e635' }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		shapeRendering='geometricPrecision'
		textRendering='geometricPrecision'
		viewBox='0 0 300 300'
		className={className}
	>
		<circle cx='150' cy='150' r='150' fill={color} />
	</svg>
)

export default CircleShape