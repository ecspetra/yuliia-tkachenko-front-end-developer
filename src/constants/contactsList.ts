import {
	faGithub,
	faLinkedinIn,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
	faEarthAmericas,
	faPhoneVolume,
	faEnvelope,
	faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'

export const CONTACTS_LIST = [
	{
		icon: faEarthAmericas,
		title: 'Address',
		value: 'Vancouver, BC, Canada',
	},
	{
		icon: faPhoneVolume,
		title: 'Phone',
		value: '+1 (778) 957 63 12',
	},
	{
		icon: faEnvelope,
		title: 'Email',
		value: 'ecspetra@gmail.com',
	},
]

export const SOCIAL_LINKS_LIST = [
	{
		icon: faGithub,
		title: 'GitHub',
	},
	{
		icon: faLinkedinIn,
		title: 'LinkedIn',
	},
	{
		icon: faPaperPlane,
		title: 'Telegram',
	},
	{
		icon: faInstagram,
		title: 'Instagram',
	},
]
