import { FC } from 'react'

interface PropsType {
	className: string
}

const BackgroundShape3: FC<PropsType> = ({ className }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		shapeRendering='geometricPrecision'
		textRendering='geometricPrecision'
		viewBox='0 0 300 300'
		className={className}
	>
		<path
			fill='#a3e635'
			d='M4.841 5.214h290.318v289.572h-144.97L4.842 5.214Z'
		/>
	</svg>
)
export default BackgroundShape3
