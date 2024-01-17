import { FC } from 'react'

interface PropsType {
	className: string
}

const BackgroundShape6: FC<PropsType> = ({ className }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		shapeRendering='geometricPrecision'
		textRendering='geometricPrecision'
		viewBox='0 0 300 300'
		className={className}
	>
		<path
			fill='#a3e635'
			d='m51.39 0 200.733 46.544L300 251.44 236.714 300Q0 40.297 0 40.713T51.39 0Z'
		/>
	</svg>
)
export default BackgroundShape6
