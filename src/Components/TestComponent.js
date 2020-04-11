import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import SwipeButton from 'rn-swipe-button';
import SlidingUpPanel from 'rn-sliding-up-panel';
import testStyles from './TestStyles';
import thumbIcon from '../Assets/Images/activeLock.png';
import arrowRight from '../Assets/Images/arrow.png';
import BaseComponent from './Base/BaseComponent';
const { height } = Dimensions.get('window')

export default class TestComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'swipe status appears here',
		};
	}
	showToastMessage = message => this.setState({ message });
	renderSubHeading = heading => (
		<Text style={styles.subHeading}>{heading}</Text>
	);
	renderSwipeStatus = () => (
		<Text style={styles.swipeStatus}>{this.state.message}</Text>
	);
	render() {


		setInterval(
			() => this.setState({ message: 'swipe status appears here' }),
			5000,
		);

		return (
			<View style={styles.container}>
				<SlidingUpPanel
					ref={c => (this._panel = c)}
					draggableRange={{ top: height / 2, bottom: 260 }}
					animatedValue={this._draggedValue}
					showBackdrop={false}>
					<View style={styles.panel}>
						<ScrollView>
							<BaseComponent />
							<BaseComponent />
						</ScrollView>
					</View>
				</SlidingUpPanel>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center'
	},
	panelContainer: {
		flex: 1,
		backgroundColor: '#032347',
		alignItems: 'center',
		justifyContent: 'center',
		borderTopRightRadius: 10
	},
	panel: {
		flex: 1,
		backgroundColor: '#032347',
		position: 'relative',
		padding: 20,
		paddingTop: 30,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20
	},
})