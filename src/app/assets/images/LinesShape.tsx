import { FC } from 'react'

interface PropsType {
	className: string
}

const LinesShape: FC<PropsType> = ({ className }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		shapeRendering='geometricPrecision'
		textRendering='geometricPrecision'
		viewBox='0 0 300 300'
		className={className}
	>
		<g fill='none' stroke='#fff' strokeMiterlimit={10} strokeWidth={25.824}>
			<path
				strokeWidth={8.9841696}
				d='m91.188 289.02-29.946-34.75 29.946-34.75-29.946-34.739 29.946-34.748-29.946-34.759 29.946-34.751-29.946-34.77 29.946-34.772M38.764 289.02 8.812 254.27l29.952-34.75L8.812 184.78l29.952-34.748-29.952-34.759 29.952-34.751-29.952-34.77 29.952-34.772'
			/>
		</g>
	</svg>
)

export default LinesShape
