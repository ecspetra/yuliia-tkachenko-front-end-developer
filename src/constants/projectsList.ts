import cinemaStreetImage1 from '@/app/assets/images/cinema-street-image-1.jpg'
import cinemaStreetImage2 from '@/app/assets/images/cinema-street-image-2.jpg'
import weatherboxImage1 from '@/app/assets/images/weatherbox-image-1.jpg'
import weatherboxImage2 from '@/app/assets/images/weatherbox-image-2.jpg'
import trackslynImage1 from '@/app/assets/images/trackslyn-image-1.jpg'
import trackslynImage2 from '@/app/assets/images/trackslyn-image-2.jpg'
import designPortfolioImage1 from '@/app/assets/images/design-portfolio-image-1.png'
import designPortfolioImage2 from '@/app/assets/images/design-portfolio-image-2.png'
import designPortfolioImage3 from '@/app/assets/images/design-portfolio-image-3.png'
import designPortfolioImage1Small from '@/app/assets/images/design-portfolio-image-1-small.jpg'
import designPortfolioImage2Small from '@/app/assets/images/design-portfolio-image-2-small.jpg'
import designPortfolioImage3Small from '@/app/assets/images/design-portfolio-image-3-small.jpg'

export const FRONT_END_DEVELOPER_PROJECTS_LIST = [
	{
		title: 'CinemaStreet (latest)',
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
		title: 'WeatherBox',
		description:
			"Weather forecast. The project requests access to the user's geolocation and displays the current weather forecast for his city. It is also possible to select any other city using the search.",
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
