import cinemaStreetImage1 from '@/app/assets/images/cinema-street-image-1.png'
import cinemaStreetImage2 from '@/app/assets/images/cinema-street-image-2.png'
import weatherboxImage1 from '@/app/assets/images/weatherbox-image-1.png'
import weatherboxImage2 from '@/app/assets/images/weatherbox-image-2.png'
import trackslynImage1 from '@/app/assets/images/trackslyn-image-1.png'
import trackslynImage2 from '@/app/assets/images/trackslyn-image-2.png'

export const PROJECTS_LIST = [
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
