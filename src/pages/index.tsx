import { Outfit } from 'next/font/google'
import TopBanner from '@/components/TopBanner'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Header from '@/app/components/Header'
import Introduction from '@/components/Introduction'

const outfitFont = Outfit({
	weight: ['100', '200', '300', '400', '600', '700'],
	subsets: ['latin'],
	variable: '--font-outfit',
})

const Home = () => {
	return (
		<>
			<Header />
			<main
				className={`bg-zinc-900 flex min-h-screen flex-col items-center justify-between ${outfitFont.variable} font-sans text-xl text-zinc-300`}
			>
				<TopBanner />
				<Introduction />
				<Skills />
				<Experience />
				<Projects />
			</main>
		</>
	)
}

export default Home
