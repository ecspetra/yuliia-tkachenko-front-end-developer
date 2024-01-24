import { Urbanist } from 'next/font/google'
import TopBanner from '@/components/TopBanner'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '../components/Portfolio'
import Header from '@/app/components/Header'
import Summary from '../components/Summary'
import Education from '@/components/Education'
import BottomBanner from '../components/BottomBanner'
import Footer from '@/app/components/Footer'

const urbanistFont = Urbanist({
	weight: ['400', '600', '700', '800'],
	subsets: ['latin'],
	variable: '--font-urbanist',
})

const Home = () => {
	return (
		<>
			<Header className={`${urbanistFont.variable} font-sans`} />
			<main
				className={`bg-zinc-900 flex min-h-screen flex-col items-center justify-between ${urbanistFont.variable} font-sans font-normal leading-normal tracking-wide text-xl text-white`}
			>
				<TopBanner />
				<Summary />
				<Skills />
				<Experience />
				<Education />
				<Projects />
				<BottomBanner />
			</main>
			<Footer className={`${urbanistFont.variable} font-sans`} />
		</>
	)
}

export default Home
