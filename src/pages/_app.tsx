import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Metadata } from 'next'
import Favicon from '../../public/favicon.ico'

export const metadata: Metadata = {
	title: 'Yuliia Tkachenko | Front End Developer',
	description:
		'Yuliia Tkachenko - Front End Developer with more than 6 years of experience.',
	icons: { icon: Favicon.src },
	openGraph: {
		images: Favicon.src,
	},
}

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default App
