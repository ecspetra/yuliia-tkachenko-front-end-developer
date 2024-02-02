import { COLOR_SCHEME, ColorSchemeType } from '@/constants/colorScheme'

export const getNextColorFromColorScheme = (
	currentColor: ColorSchemeType
): ColorSchemeType => {
	let nextColor = ''

	for (let colorSet = 0; colorSet < COLOR_SCHEME.length; colorSet++) {
		const colorIdx = COLOR_SCHEME[colorSet].indexOf(currentColor)

		if (colorIdx !== -1) {
			if (colorSet + 1 < COLOR_SCHEME.length) {
				nextColor = COLOR_SCHEME[colorSet + 1][colorIdx]
				break
			} else {
				nextColor = COLOR_SCHEME[0][colorIdx]
				break
			}
		}
	}

	return nextColor
}
