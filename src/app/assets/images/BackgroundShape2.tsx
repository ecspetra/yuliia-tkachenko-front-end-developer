import { FC } from 'react'

interface PropsType {
	className: string
}

const BackgroundShape2: FC<PropsType> = ({ className }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		shapeRendering='geometricPrecision'
		textRendering='geometricPrecision'
		viewBox='0 0 300 300'
		className={className}
	>
		<path
			fill='#a3e635'
			d='M75.447 20.909 8.742 194.441l180.496 84.65v-71.952l102.02-12.698V37.84Q67.6 20.909 75.448 20.909Z'
		/>
	</svg>
)
export default BackgroundShape2
