import { FC } from 'react'

interface PropsType {
	className: string
}

const BackgroundShape7: FC<PropsType> = ({ className }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		shapeRendering='geometricPrecision'
		textRendering='geometricPrecision'
		viewBox='0 0 300 300'
		className={className}
	>
		<path
			fill='#a3e635'
			d='M76.945 36.175 0 250.191 102.615 300 300 0 76.945 36.175Z'
		/>
	</svg>
)
export default BackgroundShape7
