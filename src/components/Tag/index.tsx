import { FC } from 'react'
import BackgroundSvgFill from '@/app/assets/images/BackgroundSvgFill'
import TextSVG from '@/app/components/TextSVG'
import { generateRandomId } from '@/handlers/generateRandomId'

type PropsType = {
	tag: string
}

const Tag: FC<PropsType> = ({ tag }) => {
	return (
		<span className='relative w-fit inline-block h-8 text-base px-3 mr-1 mb-1 break-normal'>
			<BackgroundSvgFill
				id={generateRandomId('backgroundFill', 5)}
				borderRadius={16}
				opacity={10}
				isWithGradient={false}
			/>
			<TextSVG text={tag} />
		</span>
	)
}

export default Tag
