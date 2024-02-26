import { FC, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'
import usePortfolioImagesAnimation from '@/hooks/usePortfolioImagesAnimation'
import { SVG_IDS } from '@/constants/svgUniqueKeys'
import BackgroundSvgFill from '@/app/assets/images/BackgroundSvgFill'
import Image, { StaticImageData } from "next/image"

type PropsType = {
	image: { fullSizeSrc: string; thumbnailSrc: StaticImageData }
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
				className='group w-full h-full'
			>
				<BackgroundSvgFill
					id={SVG_IDS.backgroundFill7}
					borderRadius={24}
					isWithGradient={false}
					opacity={10}
					className='scale-0 group-hover:scale-125 duration-300 z-10'
				/>
				<span className='opacity-0 duration-300 group-hover:opacity-100 flex w-16 h-16 justify-center items-center rounded-full text-zinc-950 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10'>
					<BackgroundSvgFill
						id={SVG_IDS.backgroundFill11}
						borderRadius={32}
					/>
					<FontAwesomeIcon
						className='relative z-20'
						icon={faMagnifyingGlassPlus}
					/>
				</span>
				<span className='duration-300 w-0 h-0.5 absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:w-8 z-20'>
					<BackgroundSvgFill
						id={SVG_IDS.backgroundFill4}
						borderRadius={0}
					/>
				</span>
				<Image
					className='h-full w-full rounded-xl sm:rounded-3xl object-cover mix-blend-luminosity'
					src={thumbnailSrc}
					alt='portfolio-project'
					layout='fill'
					loading='lazy'
				/>
			</a>
		</div>
	)
}

export default PortfolioUIUXDesignItem
