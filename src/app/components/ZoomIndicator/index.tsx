import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dynamic from 'next/dynamic'

const BackgroundSvgFill = dynamic(
	() => import('@/app/assets/images/BackgroundSvgFill'),
	{ ssr: false }
)

const ZoomIndicator = () => (
	<span className='top-1/2 left-1/2 z-10 absolute flex justify-center items-center opacity-0 group-hover:opacity-100 rounded-full w-16 h-16 text-zinc-950 -translate-x-1/2 -translate-y-1/2 duration-300'>
		<BackgroundSvgFill borderRadius={32} />
		<FontAwesomeIcon
			className='z-20 relative size-5'
			icon={faMagnifyingGlassPlus}
		/>
	</span>
)

export default ZoomIndicator
