import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
	return (
		<Html lang='en'>
			<Head>
				<title>Yuliia Tkachenko | Front End Developer</title>
				<link
					rel='icon'
					type='image/x-icon'
					href='/public/assets/images/favicon.ico'
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
