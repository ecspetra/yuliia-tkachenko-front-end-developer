import designPortfolioImage1 from '../../public/assets/images/design-portfolio-image-1.png'
import designPortfolioImage2 from '../../public/assets/images/design-portfolio-image-2.png'
import designPortfolioImage3 from '../../public/assets/images/design-portfolio-image-3.png'

export const FRONT_END_DEVELOPER_PROJECTS_LIST = [
	{
		title: 'Interactive Movie & TV Platform',
		description:
			'This web platform allows users to register and discover information about movies, TV shows, and actors. They can search and filter easily, leave reviews and ratings, react to content, connect with friends, and create their own collections.',
		repositoryLink: 'https://github.com/ecspetra/cinema-street',
		previewLink: 'https://cinema-street.yuliia-tkachenko.dev/',
		techStack: [
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind',
			'Firebase',
			'TMDB API',
		],
		images: [
			'/assets/images/cinema-street-image-1.jpg',
			'/assets/images/cinema-street-image-2.jpg',
		],
	},
	{
		title: 'Backend Developer Portfolio Website',
		description:
			'A modern landing page for a Backend Developer portfolio with clean design, smooth parallax effects, and full responsiveness across all devices.',
		repositoryLink:
			'https://github.com/ecspetra/valerii-tkachenko-back-end-developer',
		previewLink: 'https://www.valeriitkachenko.dev',
		techStack: [
			'React Scroll Parallax',
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind',
		],
		images: [
			'/assets/images/portfolio-valerii-image-1.jpg',
			'/assets/images/portfolio-valerii-image-2.jpg',
		],
	},
	{
		title: 'Weather App',
		description:
			'A responsive weather forecast application that displays real-time weather data based on geolocation. Users can also search and switch between cities to view up-to-date weather conditions anywhere in the world.',
		repositoryLink: 'https://github.com/ecspetra/weather-box',
		previewLink: 'https://weather-box.yuliia-tkachenko.dev/',
		techStack: [
			'React',
			'TypeScript',
			'HTML',
			'SCSS',
			'OpenWeather API',
			'Unsplash Image API',
		],
		images: [
			'/assets/images/weatherbox-image-1.jpg',
			'/assets/images/weatherbox-image-2.jpg',
		],
	},
	{
		title: 'Music Preview Web Player',
		description:
			'A web audio player that connects to a user’s Spotify account and allows playback of track previews through a custom-built player interface.',
		repositoryLink: 'https://github.com/ecspetra/trackslyn',
		previewLink: 'https://trackslyn.yuliia-tkachenko.dev/',
		techStack: ['React', 'TypeScript', 'HTML', 'SCSS', 'Spotify API'],
		images: [
			'/assets/images/trackslyn-image-1.jpg',
			'/assets/images/trackslyn-image-2.jpg',
		],
		notes: "To access the project preview, users must be included in the project's allowlist on Spotify for Developers.",
	},
]

export const UI_UX_DESIGNER_PROJECTS_LIST = [
	{
		fullSizeSrc: designPortfolioImage1.src,
		thumbnailSrc: '/assets/images/design-portfolio-image-1-small.jpg',
	},
	{
		fullSizeSrc: designPortfolioImage2.src,
		thumbnailSrc: '/assets/images/design-portfolio-image-2-small.jpg',
	},
	{
		fullSizeSrc: designPortfolioImage3.src,
		thumbnailSrc: '/assets/images/design-portfolio-image-3-small.jpg',
	},
]
