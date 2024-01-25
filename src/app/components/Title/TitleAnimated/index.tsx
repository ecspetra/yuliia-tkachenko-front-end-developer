import Title from '@/app/components/Title'
import useTextAnimation from '@/hooks/useTextAnimation'
import { useRef } from 'react'

const TitleAnimated = () => {
	const textRef = useRef<HTMLHeadingElement>(null)
	useTextAnimation(textRef)

	return (
		<Title variant='h1' className='invisible' titleRef={textRef}>
			<span className='text-zinc-400 mr-4'>Hi! I&apos;m</span>
			<span>
				Yuliia
				<span className='animated-border w-full h-0.5 block bg-global-color-two' />
			</span>
			<br />
			<span>
				Tkachenko.
				<span className='animated-border w-full h-0.5 block bg-global-color-two' />
			</span>
		</Title>
	)
}

export default TitleAnimated
