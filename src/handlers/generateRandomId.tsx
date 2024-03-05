export const generateRandomId = (prefix: string, length: number) => {
	const characters =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	const idArray = Array.from(
		{ length },
		() => characters[Math.floor(Math.random() * characters.length)]
	)
	const randomId = `${prefix}-${idArray.join('')}`
	return randomId
}
