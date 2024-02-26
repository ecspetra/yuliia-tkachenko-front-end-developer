import { FC, ReactNode, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Title from '@/app/components/Title'
import useSkillsItemAnimation from '@/hooks/useSkillsItemAnimation'
import BackgroundSvgFill from '@/app/assets/images/BackgroundSvgFill'
import { SVG_IDS } from '@/constants/svgUniqueKeys'

type PropsType = {
	children: ReactNode
	counter: string
	idx: number
}

const SkillsItem: FC<PropsType> = ({ children, counter, idx }) => {
	const skillItemRef = useRef<HTMLDivElement>(null)
	const spanRef = useRef<HTMLSpanElement>(null)
	useSkillsItemAnimation(skillItemRef, spanRef, idx)

	return (
		<div
			ref={skillItemRef}
			className='w-full lg:w-[calc((100%-48px)/3)] p-6 bg-zinc-950/85 backdrop-blur-lg rounded-xl border border-zinc-700'
		>
			<span className='block text-sm text-zinc-500 mb-3'>{counter}</span>
			<div className='flex justify-between items-center'>
				<div>
					<Title variant='h3-large'>{children}</Title>
					<span
						ref={spanRef}
						className='relative w-full h-0.5 block mt-6 -mb-6'
					>
						<BackgroundSvgFill
							id={SVG_IDS.backgroundFill8}
							borderRadius={0}
						/>
					</span>
				</div>
				<FontAwesomeIcon className='text-zinc-500 w-6 h-6' icon={faCode} />
			</div>
		</div>
	)
}

export default SkillsItem
