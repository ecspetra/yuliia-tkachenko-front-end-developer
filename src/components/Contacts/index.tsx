import Button from '@/app/components/Button'
import { SOCIAL_LINKS_LIST } from '@/constants/contactsList'
import classNames from 'classnames'
import { FC } from 'react'

type PropsType = {
	variant?: 'icon-v1' | 'icon-v2'
	isShowTitle?: boolean
	isLeftAligned?: boolean
}

const Contacts: FC<PropsType> = ({
	variant = 'icon-v1',
	isShowTitle = false,
	isLeftAligned = false,
}) => {
	const contactsClassNames = classNames(
		`flex items-start justify-center ${
			isLeftAligned ? 'lg:justify-start gap-2 mb-4 2xl:mb-8' : 'gap-4'
		}`
	)

	return (
		<div className={contactsClassNames}>
			{SOCIAL_LINKS_LIST.map((item, idx) => (
				<div
					key={idx}
					className='flex flex-col justify-start items-center gap-4'
				>
					<Button
						context={variant}
						link={item.link}
						icon={item.icon}
					/>
					{isShowTitle && (
						<span className='text-zinc-400 text-base tracking-[4px] [writing-mode:vertical-lr]'>
							{item.title}
						</span>
					)}
				</div>
			))}
		</div>
	)
}

export default Contacts
