import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Animated,
} from 'react-native';
import theme from '../Assets/Styles/Stylesheet';
import SwipeUpDown from 'react-native-swipe-up-down-fix';
import BaseComponent from '../Components/Base/BaseComponent';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../Assets/Contants/Colors';
import {Inter} from '../Assets/Contants/Fonts';
import SlidingUpPanel from 'rn-sliding-up-panel';

const {height} = Dimensions.get('window');

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalMargin: 0,
      logoState: true,
    };
  }

  _draggedValue = new Animated.Value(180);

  render() {
    const {top, bottom} = {
      top: Math.floor(height * 0.85),
      bottom: Math.floor(height * 0.35),
    };
    const iconScale = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [1, 0.3],
      extrapolate: 'clamp',
    });
    const iconTranslateY = this._draggedValue.interpolate({
      inputRange: [bottom, height],
      outputRange: [0, -170],
      extrapolate: 'clamp',
    });
    const smIconOpacity = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 1],
    });
    const bgIconOpacity = this._draggedValue.interpolate({
      inputRange: [bottom, Math.floor(top * 0.85)],
      outputRange: [1, 0],
    });
    return (
      <View style={theme.appContainer}>
        <ImageBackground
          source={require('../Assets/Images/appBackground.png')}
          style={[theme.backgroundImage]}>
          <View style={theme.appBox}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={theme.profilePicBox}>
                <Image
                  source={require('../Assets/Images/profilePic.jpg')}
                  style={theme.profilePic}
                />
              </View>
              <Animated.View
                style={{
                  opacity: smIconOpacity,
                }}>
                <Image
                  source={require('../Assets/Images/appLogo.png')}
                  style={[
                    theme.appLogo,
                    {width: 34, height: 34, resizeMode: 'contain'},
                  ]}
                />
              </Animated.View>
              <View style={theme.piggyBankBox}>
                <Image
                  source={require('../Assets/Images/piggyBank.png')}
                  style={theme.profilePic}
                />
              </View>
            </View>
          </View>
          <ScrollView
            style={[theme.appBox, {position: 'relative'}]}
            contentContainerStyle={{
              justifyContent: 'center',
            }}>
            <View
              style={[
                theme.listColumn,
                theme.alignCenter,
                {marginVertical: 52},
              ]}>
              <Animated.View
                style={{
                  opacity: bgIconOpacity,
                  transform: [{translateY: iconTranslateY}, {scale: iconScale}],
                }}>
                <Image
                  source={require('../Assets/Images/appLogo.png')}
                  style={theme.appLogo}
                />
              </Animated.View>

              <View
                style={[theme.listColumn, theme.alignCenter, {marginTop: 21}]}>
                <View style={[theme.listColumn, theme.alignCenter]}>
                  <Text style={theme.homeHeadText}>Welcome back!</Text>
                  <Text style={theme.homeSubHeadText}>
                    You saved <Text style={theme.homeRsText}>₹102.34</Text> more
                    since you last checked in!
                  </Text>
                </View>
                <View
                  style={[
                    theme.listRow,
                    {alignItems: 'center', marginBottom: 10},
                  ]}>
                  <Image
                    source={require('../Assets/Images/bulbIcon.png')}
                    style={[theme.bulbIcon, {marginRight: 5}]}
                  />
                  <Text style={theme.bulbText}>Did you know?</Text>
                </View>
                <View>
                  <Text style={theme.homeLastText}>
                    Money is recycled when worn out.
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={{
            top: top,
            bottom: bottom,
          }}
          animatedValue={this._draggedValue}
          snappingPoints={[top]}
          height={height}
          backdropOpacity={0}
          friction={0.5}
          showBackdrop={false}>
          <View style={styles.panel}>
            <ScrollView>
              <BaseComponent />
            </ScrollView>
          </View>
        </SlidingUpPanel>

        <View
          style={{
            position: 'absolute',
            bottom: 40,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('ChooseGoalScreen');
            }}
            activeOpacity={0.9}
            style={{
              width: '70%',
            }}>
            <LinearGradient
              start={{x: 0.0, y: 0.0}}
              end={{x: 1, y: 0}}
              locations={[0, 0.6]}
              colors={['#ff7547', '#ff9d4d']}
              style={[styles.customBtnContainer]}>
              <Text style={styles.buttonActiveText}>Add New Rule</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
  panel: {
    flex: 1,
    backgroundColor: '#032347',
    padding: 20,
    paddingTop: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
