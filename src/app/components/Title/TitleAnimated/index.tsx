import Title from '@/app/components/Title'
import useTextAnimation from '@/hooks/useTextAnimation'
import { useRef } from 'react'
import dynamic from 'next/dynamic'

const BackgroundSvgFill = dynamic(
	() => import('@/app/assets/images/BackgroundSvgFill'),
	{ ssr: false }
)

const TitleAnimated = () => {
	const textRefOne = useRef<HTMLHeadingElement>(null)
	const textRefTwo = useRef<HTMLHeadingElement>(null)
	const textRefThree = useRef<HTMLHeadingElement>(null)
	useTextAnimation(textRefOne, textRefTwo, textRefThree)

	return (
		<Title variant='h1'>
			<span className='text-zinc-400 mr-4 invisible' ref={textRefOne}>
				Hi! I&apos;m
			</span>
			<span className='relative'>
				<span ref={textRefTwo} className='invisible'>
					Yuliia
				</span>
				<span className='animated-border w-full h-0.5 block absolute bottom-0 left-0'>
					<BackgroundSvgFill borderRadius={0} />
				</span>
			</span>
			<br />
			<span className='relative'>
				<span ref={textRefThree} className='invisible'>
					Tkachenko.
				</span>
				<span className='animated-border w-full h-0.5 block absolute bottom-0 left-0'>
					<BackgroundSvgFill borderRadius={0} />
				</span>
			</span>
		</Title>
	)
}

export default TitleAnimated
