import Title from '@/app/components/Title'
import useSkillsItemAnimation from '@/hooks/useSkillsItemAnimation'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dynamic from 'next/dynamic'
import { FC, ReactNode, useRef } from 'react'

const BackgroundSvgFill = dynamic(
	() => import('@/app/assets/images/BackgroundSvgFill'),
	{ ssr: false }
)

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
			className='bg-zinc-950/85 backdrop-blur-lg p-6 border border-zinc-700 rounded-xl w-full lg:w-[calc((100%-48px)/3)]'
		>
			<span className='block mb-3 text-zinc-500 text-sm'>{counter}</span>
			<div className='flex justify-between items-center'>
				<div>
					<Title variant='h3-large'>{children}</Title>
					<span
						ref={spanRef}
						className='block relative mt-6 -mb-6 w-full h-0.5'
					>
						<BackgroundSvgFill borderRadius={0} />
					</span>
				</div>
				<FontAwesomeIcon
					className='size-6 text-zinc-500'
					icon={faCode}
				/>
			</div>
		</div>
	)
}

export default SkillsItem
