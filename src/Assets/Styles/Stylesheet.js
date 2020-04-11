import {
	StyleSheet,
	Dimensions
} from 'react-native';
import {
	colors
} from '../Contants/Colors';
import {
	ProzaLibreFontFamily,
	Inter
} from '../Contants/Fonts'

export default StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: colors.appBackground,
	},
	appBox: {
		padding: 20,
	},
	listColumn: {
		flexDirection: 'column',
	},
	listRow: {
		flexDirection: 'row',
	},
	alignCenter: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},
	// Spacing
	spaceAbove_24: {
		marginTop: 24,
	},
	// header
	profilePicBox: {
		width: 32,
		height: 32,
		padding: 3,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		borderRadius: 32
	},
	profilePic: {
		resizeMode: "cover",
		height: 26,
		width: 26,
		borderRadius: 26
	},
	piggyBankBox: {
		width: 32,
		height: 32,
		padding: 3,
		backgroundColor: 'rgba(255,124,72, 0.3)',
		borderRadius: 32
	},
	// app Logo
	appLogo: {
		width: 74,
		height: 69,
		resizeMode: 'cover'
	},
	// icons
	bulbIcon: {
		width: 12,
		height: 12,
		resizeMode: 'cover'
	},
	homeHeadText: {
		fontSize: 21,
		lineHeight: 24,
		color: colors.whiteColor,
		fontFamily: ProzaLibreFontFamily.regular
	},
	homeSubHeadText: {
		fontFamily: Inter.regular,
		fontSize: 16,
		lineHeight: 17,
		color: 'rgba(255,255,255, 0.9)',
		textAlign: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	homeRsText: {
		fontFamily: Inter.semiBold,
		fontSize: 18,
		lineHeight: 19,
		color: '#ffffff',
		textAlign: 'center',
		marginTop: 10
	},
	bulbText: {
		fontFamily: Inter.regular,
		fontSize: 12,
		lineHeight: 14,
		color: 'rgba(255,255,255,0.6)',
	},
	homeLastText: {
		fontSize: 12,
		lineHeight: 14,
		color: colors.whiteColor,
		fontFamily: Inter.medium
	},

});