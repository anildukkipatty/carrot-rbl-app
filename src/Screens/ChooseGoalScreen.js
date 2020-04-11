import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Inter } from '../Assets/Contants/Fonts';

export default class ChooseGoalScreen extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<View style={{
				flex: 1,
				backgroundColor: '#f1f5f9'
			}}>
				<View style={{
					flexDirection: 'column',
					alignItems: 'center',
					marginTop: 64,
				}}>
					<View style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						position: 'relative',
						width: '100%',
					}}>
						<Text style={{
							color: '#032347',
							fontFamily: Inter.regular,
							fontSize: 20,
						}}>Set new goal</Text>
						<TouchableOpacity
							style={{
								position: 'absolute',
								right: 40
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

					</View>
					<Text style={{
						color: '#000000',
						fontFamily: Inter.regular,
						fontSize: 16,
						width: 236,
						textAlign: 'center',
						marginTop: 8
					}}>
						What do you want Carrot to help you achieve?
						</Text>
				</View>
				<ScrollView contentContainerStyle={{
					flex: 1,
					backgroundColor: '#fff',
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20,
					padding: 20,
					marginTop: 25,
				}}>
					<View>
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
								borderWidth: 1,
								borderColor: '#f3f3f3',
								padding: 20,
								borderRadius: 8,
								marginBottom: 15,
							}}
							onPress={() => {
								this.props.navigation.navigate('CalculatorScreen');
							}}
							activeOpacity={0.8}>
							<View style={{
								marginRight: 15,
							}}>
								<Image source={require('../Assets/Images/moneyBag.png')} style={{
									width: 26,
									height: 34,
									resizeMode: 'contain'
								}} />
							</View>
							<View style={{
								alignItems: 'center',
								justifyContent: 'space-around',
								flexDirection: 'row',
							}}>
								<View
									style={{
										width: '70%'
									}}>
									<Text style={{
										color: '#424242',
										fontFamily: Inter.regular,
										fontSize: 17
									}}>Have an emergency fund</Text>
									<Text style={{
										color: '#ff7d48',
										fontFamily: Inter.regular,
										fontSize: 13
									}}>Emergency Fund</Text>
								</View>
								<View style={{
									justifyContent: 'center',
									alignItems: 'center',
									width: '30%'
								}}>
									<Image source={require('../Assets/Images/keyboard_arrow_right.png')} style={{
										width: 7,
										height: 12,
										resizeMode: 'contain'
									}} />
								</View>
							</View>
						</TouchableOpacity>

						<TouchableOpacity
							style={{
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
								borderWidth: 1,
								borderColor: '#f3f3f3',
								padding: 20,
								borderRadius: 8,
								marginBottom: 15

							}}
							onPress={() => {
								this.props.navigation.navigate('CalculatorScreen');
							}}
						>
							<View style={{
								marginRight: 15,
							}}>
								<Image source={require('../Assets/Images/planeIcon.png')} style={{
									width: 26,
									height: 34,
									resizeMode: 'contain'
								}} />
							</View>
							<View style={{
								alignItems: 'center',
								justifyContent: 'space-around',
								flexDirection: 'row',
							}}>
								<View
									style={{
										width: '70%'
									}}>
									<Text style={{
										color: '#424242',
										fontFamily: Inter.regular,
										fontSize: 17
									}}>Travel to far away lands</Text>
									<Text style={{
										color: '#ff7d48',
										fontFamily: Inter.regular,
										fontSize: 13
									}}>Travel Funds</Text>
								</View>
								<View style={{
									justifyContent: 'center',
									alignItems: 'center',
									width: '30%'
								}}>
									<Image source={require('../Assets/Images/keyboard_arrow_right.png')} style={{
										width: 7,
										height: 12,
										resizeMode: 'contain'
									}} />
								</View>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
								borderWidth: 1,
								borderColor: '#f3f3f3',
								padding: 20,
								borderRadius: 8,
								marginBottom: 15
							}}
							onPress={() => {
								this.props.navigation.navigate('CalculatorScreen');
							}}
						>
							<View style={{
								marginRight: 15,
							}}>
								<Image source={require('../Assets/Images/TravelIcon.png')} style={{
									width: 26,
									height: 34,
									resizeMode: 'contain'
								}} />
							</View>
							<View style={{
								alignItems: 'center',
								justifyContent: 'space-around',
								flexDirection: 'row',
							}}>
								<View style={{
									width: '70%'
								}}>
									<Text style={{
										color: '#424242',
										fontFamily: Inter.regular,
										fontSize: 17
									}}>Save for the future</Text>
									<Text style={{
										color: '#ff7d48',
										fontFamily: Inter.regular,
										fontSize: 13
									}}>Retirement Fund</Text>
								</View>
								<View style={{
									justifyContent: 'center',
									alignItems: 'center',
									width: '30%'
								}}>
									<Image source={require('../Assets/Images/keyboard_arrow_right.png')} style={{
										width: 7,
										height: 12,
										resizeMode: 'contain'
									}} />
								</View>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
								borderWidth: 1,
								borderColor: '#f3f3f3',
								padding: 20,
								borderRadius: 8,
								marginBottom: 15

							}}
							onPress={() => {
								this.props.navigation.navigate('CalculatorScreen');
							}}
						>
							<View style={{
								marginRight: 15,
							}}>
								<Image source={require('../Assets/Images/100.png')} style={{
									width: 26,
									height: 34,
									resizeMode: 'contain'
								}} />
							</View>
							<View style={{
								alignItems: 'center',
								justifyContent: 'space-around',
								flexDirection: 'row',

							}}>
								<View
									style={{
										width: '70%'
									}}>
									<Text style={{
										color: '#424242',
										fontFamily: Inter.regular,
										fontSize: 17
									}}>Create your own goal</Text>
									<Text style={{
										color: '#ff7d48',
										fontFamily: Inter.regular,
										fontSize: 13
									}}>Unique Goal</Text>
								</View>
								<View style={{
									justifyContent: 'center',
									alignItems: 'center',
									width: '30%'
								}}>
									<Image source={require('../Assets/Images/keyboard_arrow_right.png')} style={{
										width: 7,
										height: 12,
										resizeMode: 'contain'
									}} />
								</View>
							</View>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({})
