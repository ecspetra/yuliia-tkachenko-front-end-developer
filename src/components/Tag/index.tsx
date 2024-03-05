import { FC } from 'react'
import TextSVG from '@/app/components/TextSVG'
import dynamic from 'next/dynamic'

const BackgroundSvgFill = dynamic(
	() => import('@/app/assets/images/BackgroundSvgFill'),
	{ ssr: false }
)

type PropsType = {
	tag: string
}

const Tag: FC<PropsType> = ({ tag }) => (
	<span className='relative w-fit inline-block h-8 text-base px-3 mr-1 mb-1 break-normal'>
		<BackgroundSvgFill
			borderRadius={16}
			opacity={10}
			isWithGradient={false}
		/>
		<TextSVG text={tag} />
	</span>
)

export default Tag
