import { FC } from 'react'

interface PropsType {
	className: string
	variant?: '1' | '2' | '3' | '4' | '5' | '6' | '7'
}

const BackgroundGeometricShape: FC<PropsType> = ({
	className,
	variant = '1',
}) => {
	const gradientId = 'greenToBlue'

	const getShape = () => {
		switch (variant) {
			case '1':
				return (
					<path
						fill={`url(#${gradientId})`}
						d='M4.841 5.214h290.318v289.572h-144.97L4.842 5.214Z'
					/>
				)
			case '2':
				return (
					<path
						fill={`url(#${gradientId})`}
						d='M52.756 44.481 288.507 5.813 271.044 259.86 71.466 300Q4.524 101.86 4.524 102.276T52.756 44.48Z'
					/>
				)
			case '3':
				return (
					<path
						fill={`url(#${gradientId})`}
						d='m51.39 0 200.733 46.544L300 251.44 236.714 300Q0 40.297 0 40.713T51.39 0Z'
					/>
				)
			case '4':
				return (
					<path
						fill={`url(#${gradientId})`}
						d='M76.945 36.175 0 250.191 102.615 300 300 0 76.945 36.175Z'
					/>
				)
			case '5':
				return (
					<path
						d='M343.444454,43.276161l-60.406216,67.282646L408.453151,213.324238l44.63316-170.048077h-109.641857Z'
						transform='matrix(1.764207 0 0 1.764207-499.338042-76.348115)'
						fill={`url(#${gradientId})`}
					/>
				)
			case '6':
				return (
					<path
						fill={`url(#${gradientId})`}
						d='M75.447 20.909 8.742 194.441l180.496 84.65v-71.952l102.02-12.698V37.84Q67.6 20.909 75.448 20.909Z'
					/>
				)
			case '7':
				return (
					<path
						fill={`url(#${gradientId})`}
						d='M75.447 20.909 8.742 194.441l180.496 84.65v-71.952l102.02-12.698V37.84Q67.6 20.909 75.448 20.909Z'
					/>
				)
		}
	}

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			shapeRendering='geometricPrecision'
			textRendering='geometricPrecision'
			viewBox='0 0 300 300'
			className={className}
		>
			<defs>
				<linearGradient
					id='greenToBlue'
					x1='0%'
					y1='0%'
					x2='100%'
					y2='100%'
				>
					<stop
						offset='30%'
						style={{
							stopColor: 'rgb(var(--global-color-two))',
							stopOpacity: 1,
						}}
					/>
					<stop
						offset='100%'
						style={{
							stopColor: 'rgb(var(--global-color-four))',
							stopOpacity: 1,
						}}
					/>
				</linearGradient>
			</defs>
			{getShape()}
		</svg>
	)
}

export default BackgroundGeometricShape
