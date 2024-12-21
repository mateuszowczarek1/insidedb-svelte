
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #53e5d2 
		"--color-primary-50": "229 251 248", // #e5fbf8
		"--color-primary-100": "221 250 246", // #ddfaf6
		"--color-primary-200": "212 249 244", // #d4f9f4
		"--color-primary-300": "186 245 237", // #baf5ed
		"--color-primary-400": "135 237 224", // #87ede0
		"--color-primary-500": "83 229 210", // #53e5d2
		"--color-primary-600": "75 206 189", // #4bcebd
		"--color-primary-700": "62 172 158", // #3eac9e
		"--color-primary-800": "50 137 126", // #32897e
		"--color-primary-900": "41 112 103", // #297067
		// secondary | #57b4b1 
		"--color-secondary-50": "230 244 243", // #e6f4f3
		"--color-secondary-100": "221 240 239", // #ddf0ef
		"--color-secondary-200": "213 236 236", // #d5ecec
		"--color-secondary-300": "188 225 224", // #bce1e0
		"--color-secondary-400": "137 203 200", // #89cbc8
		"--color-secondary-500": "87 180 177", // #57b4b1
		"--color-secondary-600": "78 162 159", // #4ea29f
		"--color-secondary-700": "65 135 133", // #418785
		"--color-secondary-800": "52 108 106", // #346c6a
		"--color-secondary-900": "43 88 87", // #2b5857
		// tertiary | #b159f3 
		"--color-tertiary-50": "243 230 253", // #f3e6fd
		"--color-tertiary-100": "239 222 253", // #efdefd
		"--color-tertiary-200": "236 214 252", // #ecd6fc
		"--color-tertiary-300": "224 189 250", // #e0bdfa
		"--color-tertiary-400": "200 139 247", // #c88bf7
		"--color-tertiary-500": "177 89 243", // #b159f3
		"--color-tertiary-600": "159 80 219", // #9f50db
		"--color-tertiary-700": "133 67 182", // #8543b6
		"--color-tertiary-800": "106 53 146", // #6a3592
		"--color-tertiary-900": "87 44 119", // #572c77
		// success | #b4096a 
		"--color-success-50": "244 218 233", // #f4dae9
		"--color-success-100": "240 206 225", // #f0cee1
		"--color-success-200": "236 194 218", // #ecc2da
		"--color-success-300": "225 157 195", // #e19dc3
		"--color-success-400": "203 83 151", // #cb5397
		"--color-success-500": "180 9 106", // #b4096a
		"--color-success-600": "162 8 95", // #a2085f
		"--color-success-700": "135 7 80", // #870750
		"--color-success-800": "108 5 64", // #6c0540
		"--color-success-900": "88 4 52", // #580434
		// warning | #0ef20a 
		"--color-warning-50": "219 253 218", // #dbfdda
		"--color-warning-100": "207 252 206", // #cffcce
		"--color-warning-200": "195 252 194", // #c3fcc2
		"--color-warning-300": "159 250 157", // #9ffa9d
		"--color-warning-400": "86 246 84", // #56f654
		"--color-warning-500": "14 242 10", // #0ef20a
		"--color-warning-600": "13 218 9", // #0dda09
		"--color-warning-700": "11 182 8", // #0bb608
		"--color-warning-800": "8 145 6", // #089106
		"--color-warning-900": "7 119 5", // #077705
		// error | #854da7 
		"--color-error-50": "237 228 242", // #ede4f2
		"--color-error-100": "231 219 237", // #e7dbed
		"--color-error-200": "225 211 233", // #e1d3e9
		"--color-error-300": "206 184 220", // #ceb8dc
		"--color-error-400": "170 130 193", // #aa82c1
		"--color-error-500": "133 77 167", // #854da7
		"--color-error-600": "120 69 150", // #784596
		"--color-error-700": "100 58 125", // #643a7d
		"--color-error-800": "80 46 100", // #502e64
		"--color-error-900": "65 38 82", // #412652
		// surface | #572e6a 
		"--color-surface-50": "230 224 233", // #e6e0e9
		"--color-surface-100": "221 213 225", // #ddd5e1
		"--color-surface-200": "213 203 218", // #d5cbda
		"--color-surface-300": "188 171 195", // #bcabc3
		"--color-surface-400": "137 109 151", // #896d97
		"--color-surface-500": "87 46 106", // #572e6a
		"--color-surface-600": "78 41 95", // #4e295f
		"--color-surface-700": "65 35 80", // #412350
		"--color-surface-800": "52 28 64", // #341c40
		"--color-surface-900": "43 23 52", // #2b1734
		
	}
}