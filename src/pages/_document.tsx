import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
	return (
		<Html lang='en'>
			<Head>
				<title>Yuliia Tkachenko | Front End Developer</title>
				<meta
					name='description'
					content='Yuliia Tkachenko - Front End Developer with more than 6 years of experience.'
				/>
				<meta name='author' content='Yuliia Tkachenko' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/favicon/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon/favicon-16x16.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='192x192'
					href='/favicon/android-chrome-192x192.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='512x512'
					href='/favicon/android-chrome-512x512.png'
				/>
				<link
					rel='shortcut icon'
					href='/favicon/favicon.ico'
					type='image/x-icon'
				/>
				<link rel='manifest' href='/favicon/site.webmanifest' />
				<meta name='msapplication-TileColor' content='#a3e635' />
				<meta name='theme-color' content='#ffffff' />
				<meta
					property='og:image'
					content='/assets/images/opengraph-image.png'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
