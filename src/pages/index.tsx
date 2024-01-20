import { Outfit } from 'next/font/google'
import TopBanner from '@/components/TopBanner'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Header from '@/app/components/Header'
import Introduction from '../components/Summary'
import Education from '@/components/Education'
import BottomBanner from '../components/BottomBanner'
import Footer from '@/app/components/Footer'

const outfitFont = Outfit({
	weight: ['100', '200', '300', '400', '600', '700'],
	subsets: ['latin'],
	variable: '--font-outfit',
})

const Home = () => {
	return (
		<>
			<Header className={`${outfitFont.variable} font-sans`} />
			<main
				className={`bg-zinc-900 flex min-h-screen flex-col items-center justify-between ${outfitFont.variable} font-sans font-extralight text-xl text-white`}
			>
				<TopBanner />
				<Introduction />
				<Skills />
				<Experience />
				<Education />
				<Projects />
				<BottomBanner />
			</main>
			<Footer className={`${outfitFont.variable} font-sans`} />
		</>
	)
}

export default Home
