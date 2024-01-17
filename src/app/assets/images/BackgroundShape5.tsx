import { FC } from 'react'

interface PropsType {
	className: string
}

const BackgroundShape5: FC<PropsType> = ({ className }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		shapeRendering='geometricPrecision'
		textRendering='geometricPrecision'
		viewBox='0 0 300 300'
		className={className}
	>
		<path
			fill='#a3e635'
			d='M52.756 44.481 288.507 5.813 271.044 259.86 71.466 300Q4.524 101.86 4.524 102.276T52.756 44.48Z'
		/>
	</svg>
)
export default BackgroundShape5
