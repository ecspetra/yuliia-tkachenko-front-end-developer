import { FC } from 'react'
import { SOCIAL_LINKS_LIST } from '@/constants/contactsList'
import Button from '@/app/components/Button'
import classNames from 'classnames'

type PropsType = {
	variant?: 'v1' | 'v2'
	isShowTitle?: boolean
	isLeftAligned?: boolean
}

const Contacts: FC<PropsType> = ({
	variant = 'v1',
	isShowTitle = false,
	isLeftAligned = false,
}) => {
	const contactsClassNames = classNames(
		`flex items-start justify-center gap-4 ${
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
						context={
							variant === 'v1'
								? 'social-link-v1'
								: 'social-link-v2'
						}
						link={item.link}
						icon={item.icon}
					/>
					{isShowTitle && (
						<span className='[writing-mode:vertical-lr] text-base text-zinc-400 tracking-[4px]'>
							{item.title}
						</span>
					)}
				</div>
			))}
		</div>
	)
}

export default Contacts
