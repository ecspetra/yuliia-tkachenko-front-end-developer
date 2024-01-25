import { FC, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'
import usePortfolioImagesAnimation from '@/hooks/usePortfolioImagesAnimation'

type PropsType = {
	image: { fullSizeSrc: string; thumbnailSrc: string }
	idx: number
}

const PortfolioUIUXDesignItem: FC<PropsType> = ({
	image: { fullSizeSrc, thumbnailSrc },
	idx,
}) => {
	const fullPageImageRef = useRef(null)
	usePortfolioImagesAnimation(fullPageImageRef, 'fullPageImage', idx)

	return (
		<div
			ref={fullPageImageRef}
			className='bg-zinc-800 relative z-10 rounded-3xl'
		>
			<a
				href={fullSizeSrc}
				target='_blank'
				rel='noopener noreferrer'
				className='relative group after:duration-300 after:w-0 after:h-0 after:bg-global-color-two/15 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-3xl hover:after:w-full hover:after:h-full'
			>
				<span className='opacity-0 duration-300 group-hover:opacity-100 flex w-16 h-16 justify-center items-center rounded-full bg-global-color-two text-zinc-950 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10'>
					<FontAwesomeIcon
						className=''
						icon={faMagnifyingGlassPlus}
					/>
				</span>
				<img
					className='h-full w-full rounded-3xl object-cover mix-blend-luminosity'
					src={thumbnailSrc}
					alt='portfolio-project'
				/>
			</a>
		</div>
	)
}

export default PortfolioUIUXDesignItem
