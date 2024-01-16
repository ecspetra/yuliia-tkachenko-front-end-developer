const RadialGradientCircle = () => {
	return (
		<svg width='800' height='800' xmlns='http://www.w3.org/2000/svg'>
			<defs>
				<radialGradient
					id='grad'
					cx='50%'
					cy='50%'
					r='50%'
					fx='50%'
					fy='50%'
				>
					<stop
						offset='0%'
						style={{ stopColor: 'green', stopOpacity: 1 }}
					/>
					<stop
						offset='100%'
						style={{ stopColor: 'transparent', stopOpacity: 0 }}
					/>
				</radialGradient>
			</defs>
			<circle cx='400' cy='400' r='400' fill='url(#grad)' />
		</svg>
	)
}

export default RadialGradientCircle
