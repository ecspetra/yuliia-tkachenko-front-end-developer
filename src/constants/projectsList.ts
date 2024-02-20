import cinemaStreetImage1 from '../../public/assets/images/cinema-street-image-1.jpg'
import cinemaStreetImage2 from '../../public/assets/images/cinema-street-image-2.jpg'
import portfolioValeriiImage1 from '../../public/assets/images/portfolio-valerii-image-1.jpg'
import portfolioValeriiImage2 from '../../public/assets/images/portfolio-valerii-image-2.jpg'
import weatherboxImage1 from '../../public/assets/images/weatherbox-image-1.jpg'
import weatherboxImage2 from '../../public/assets/images/weatherbox-image-2.jpg'
import trackslynImage1 from '../../public/assets/images/trackslyn-image-1.jpg'
import trackslynImage2 from '../../public/assets/images/trackslyn-image-2.jpg'
import designPortfolioImage1 from '../../public/assets/images/design-portfolio-image-1.png'
import designPortfolioImage2 from '../../public/assets/images/design-portfolio-image-2.png'
import designPortfolioImage3 from '../../public/assets/images/design-portfolio-image-3.png'
import designPortfolioImage1Small from '../../public/assets/images/design-portfolio-image-1-small.jpg'
import designPortfolioImage2Small from '../../public/assets/images/design-portfolio-image-2-small.jpg'
import designPortfolioImage3Small from '../../public/assets/images/design-portfolio-image-3-small.jpg'

export const FRONT_END_DEVELOPER_PROJECTS_LIST = [
	{
		title: 'CinemaStreet',
		description:
			'Film library. The user has the opportunity to register on the project, view information about films, TV series, actors, use a quick search and filter, leave reviews, ratings and reactions, add other project participants as friends, and also create their own collection.',
		repositoryLink: 'https://github.com/ecspetra/cinema-street',
		previewLink: 'https://cinema-tan.vercel.app/',
		teckStack: [
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind',
			'Firebase',
			'TMDB API',
		],
		images: [cinemaStreetImage1, cinemaStreetImage2],
	},
	{
		title: 'Portfolio for Valerii',
		description:
			"Landing page for Backend developer portfolio. This project combines a unique design, parallax effects implemented using the 'React Scroll Parallax library'. The layout is adapted for all devices.",
		repositoryLink:
			'https://github.com/ecspetra/valerii-tkachenko-back-end-developer',
		previewLink: 'https://www.valerii-tkachenko.dev',
		teckStack: [
			'React Scroll Parallax',
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind',
		],
		images: [portfolioValeriiImage1, portfolioValeriiImage2],
	},
	{
		title: 'WeatherBox',
		description:
			"Weather forecast. This project offers weather forecast based on the user's location and lets them easily select any city using a search feature.",
		repositoryLink: 'https://github.com/ecspetra/weather-box',
		previewLink: 'https://ecspetra.github.io/weather-box/',
		teckStack: [
			'React',
			'TypeScript',
			'HTML',
			'SCSS',
			'OpenWeather API',
			'Unsplash Image API',
		],
		images: [weatherboxImage1, weatherboxImage2],
	},
	{
		title: 'Trackslyn',
		description:
			"Web audio player. Allows you to access a user's tracks on Spotify through registration. The project implements a custom audio player for playing previews of tracks from the user's library.",
		repositoryLink: 'https://github.com/ecspetra/trackslyn',
		previewLink: 'https://ecspetra.github.io/trackslyn/#',
		teckStack: ['React', 'TypeScript', 'HTML', 'SCSS', 'Spotify API'],
		images: [trackslynImage1, trackslynImage2],
	},
]

export const UI_UX_DESIGNER_PROJECTS_LIST = [
	{
		fullSizeSrc: designPortfolioImage1.src,
		thumbnailSrc: designPortfolioImage1Small.src,
	},
	{
		fullSizeSrc: designPortfolioImage2.src,
		thumbnailSrc: designPortfolioImage2Small.src,
	},
	{
		fullSizeSrc: designPortfolioImage3.src,
		thumbnailSrc: designPortfolioImage3Small.src,
	},
]
