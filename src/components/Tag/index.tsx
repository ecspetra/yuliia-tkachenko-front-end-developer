import { FC } from 'react'
import BackgroundSvgFill from '@/app/assets/images/BackgroundSvgFill'
import TextSVG from '@/app/components/TextSVG'
import { SVG_IDS } from '@/constants/svgUniqueKeys'

type PropsType = {
	tag: string
}

const Tag: FC<PropsType> = ({ tag }) => {
	return (
		<span className='relative w-fit inline-block h-8 text-base px-3 mr-1 mb-1 break-normal'>
			<BackgroundSvgFill
				id={SVG_IDS.backgroundFill10}
				borderRadius={16}
				opacity={10}
				isWithGradient={false}
			/>
			{/*<TextSVG text={tag} />*/}
		</span>
	)
}

export default Tag
