import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../Assets/Styles/Stylesheet';
import { Inter } from '../Assets/Contants/Fonts';
import { colors } from '../Assets/Contants/Colors';
import LinearGradient from 'react-native-linear-gradient';

export default class SaveCompleteScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View style={[theme.appContainer]}>
				<ImageBackground
					source={require('../Assets/Images/appBackground.png')}
					style={[theme.backgroundImage, {
						justifyContent: 'center',
						alignItems: 'center',
						flex: 1
					}]}>
					<TouchableOpacity
						style={{
							position: 'absolute',
							right: 40,
							top: 70
						}}
						onPress={() => {
							this.props.navigation.navigate('HomeScreen');
						}}
						activeOpacity={0.8}>
						<Image
							source={require('../Assets/Images/closeGray.png')}
							style={{
								width: 15,
								height: 15,
							}} />
					</TouchableOpacity>
					<Image
						source={require('../Assets/Images/goalComplete.png')}
						style={[
							theme.appLogo,
							{ width: 60, height: 60, resizeMode: 'contain' },
						]}
					/>
					<View style={theme.appBox}>
						<View>
							<Text style={{
								fontSize: 20,
								fontFamily: Inter.regular,
								color: colors.whiteColor,
								textAlign: 'center',
								marginBottom: 7,
								marginTop: 10
							}}>Goal Activated!</Text>
						</View>
						<View>
							<Text style={{
								fontSize: 16,
								fontFamily: Inter.regular,
								color: colors.whiteColor,
								textAlign: 'center'
							}}>Well done you! You will now save regularly with Carrot towards your new Travel Plan!</Text>
						</View>
					</View>
					<View
						style={{
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.navigate('HomeScreen');
							}}
							activeOpacity={0.9}
							style={{
								width: 172,
							}}>
							<LinearGradient
								start={{ x: 0.0, y: 0.0 }}
								end={{ x: 1, y: 0 }}
								locations={[0, 0.6]}
								colors={['#ff7547', '#ff9d4d']}
								style={[styles.customBtnContainer]}>
								<Text style={styles.buttonActiveText}>Return to Home</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	customBtnContainer: {
		borderRadius: 26,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnBorder: {
		borderColor: '#e5e5e7',
		borderWidth: 1,
	},
	buttonActiveText: {
		color: colors.whiteColor,
		fontSize: 12,
		fontFamily: Inter.bold,
	},
	buttonText: {
		color: 'rgba(0,0,0,0.8)',
		fontSize: 12,
		fontFamily: Inter.bold,
	},
});