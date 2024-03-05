import { FC, useEffect, useRef, useState } from 'react'
import { useColorScheme } from '@/context/ColorSchemeContext'
import {debounce} from "next/dist/server/utils"

type PropsType = {
	text: string
}

const TextSVG: FC<PropsType> = ({ text }) => {
	const { colorScheme } = useColorScheme()
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

		const debouncedUpdateSvgSize = debounce(updateSvgSize, 300)

		window.addEventListener('resize', debouncedUpdateSvgSize)

		return () => {
			window.removeEventListener('resize', debouncedUpdateSvgSize)
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
				fill={`rgb(var(--${colorScheme[1]}))`}
				lengthAdjust='spacingAndGlyphs'
			>
				{text}
			</text>
		</svg>
	)
}

export default TextSVG
