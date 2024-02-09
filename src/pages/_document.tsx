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
				<link rel='shortcut icon' href='/icon.ico' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
