import { FC, useRef } from 'react'
import ZoomIndicator from '@/app/components/ZoomIndicator'
import usePortfolioImagesAnimation from '@/hooks/usePortfolioImagesAnimation'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const BackgroundSvgFill = dynamic(
	() => import('@/app/assets/images/BackgroundSvgFill'),
	{ ssr: false }
)

type PropsType = {
	image: { fullSizeSrc: string; thumbnailSrc: string }
	idx: number
}

const PortfolioUIUXDesignItem: FC<PropsType> = ({
	image: { fullSizeSrc, thumbnailSrc },
	idx,
}) => {
	const fullPageImageRef = useRef<HTMLDivElement>(null)
	usePortfolioImagesAnimation(fullPageImageRef, 'fullPageImage', idx)

	return (
		<div
			ref={fullPageImageRef}
			className='aspect-[300/647] w-full h-full bg-zinc-800 relative z-10 rounded-xl sm:rounded-3xl overflow-hidden'
		>
			<a
				href={fullSizeSrc}
				target='_blank'
				rel='noopener noreferrer'
				className='group block relative w-full h-full rounded-xl sm:rounded-3xl outline-none focus-visible:border-[6px] focus-visible:border-white'
			>
				<BackgroundSvgFill
					borderRadius={24}
					isWithGradient={false}
					opacity={10}
					className='scale-0 group-hover:scale-125 duration-300 z-10'
				/>
				<ZoomIndicator />
				<span className='duration-300 w-0 h-0.5 absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:w-8 z-20'>
					<BackgroundSvgFill borderRadius={0} />
				</span>
				<Image
					className='h-full w-full rounded-xl sm:rounded-3xl object-cover mix-blend-luminosity'
					src={thumbnailSrc}
					alt='portfolio-project'
					fill
					sizes='(min-width: 672px) 220px, 30vw'
					loading='lazy'
				/>
			</a>
		</div>
	)
}

export default PortfolioUIUXDesignItem
