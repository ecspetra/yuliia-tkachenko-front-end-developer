import { FC, useEffect, useRef, useState } from 'react'
import useChangeColorScheme from '@/hooks/useChangeColorScheme'
import { COLOR_SCHEME } from '@/constants/colorScheme'

type PropsType = {
	text: string
}

const TextSVG: FC<PropsType> = ({ text }) => {
	const { colorScheme } = useChangeColorScheme([COLOR_SCHEME[0][1]])
	const textRef = useRef<SVGTextElement | null>(null)
	const [svgSize, setSvgSize] = useState({ width: 0, height: 0 })

	useEffect(() => {
		const updateSvgSize = () => {
			if (textRef.current) {
				const bbox = textRef.current.getBBox()
				setSvgSize({
					width: bbox.width,
					height: bbox.height,
				})
			}
		}

		updateSvgSize()

		window.addEventListener('resize', updateSvgSize)

		return () => {
			window.removeEventListener('resize', updateSvgSize)
		}
	}, [text])

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-full inline-block'
			width={svgSize.width}
			height={svgSize.height}
		>
			<text
				ref={textRef}
				x='50%'
				y='55%'
				dominantBaseline='middle'
				textAnchor='middle'
				fill={`rgb(var(--${colorScheme[0]}))`}
			>
				{text}
			</text>
		</svg>
	)
}

export default TextSVG
