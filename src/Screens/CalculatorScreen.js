import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import theme from '../Assets/Styles/Stylesheet';
import { ProzaLibreFontFamily, Inter } from '../Assets/Contants/Fonts';
import { colors } from '../Assets/Contants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-community/picker';
import SwipeButton from 'rn-swipe-button';
import arrowRight from '../Assets/Images/arrowXs.png';

export default class CalculatorScreen extends Component {
  constructor(props) {
    super(props);
    this.a = React.createRef();
    this.state = {
      modalVisible: false,
      rupeeSymbol: '₹',
      calculatorName: '',
      editable: true,
      calculatedValue: 0,
      selectedValue: '12:00am',
      noOfDays: 0,
      amount: 0,
      activeState: {
        days30: false,
        days45: false,
        days90: false,
        days182: false,
      },
      amountActiveState: {
        amount50: false,
        amount100: false,
        amount200: false,
        amount300: false,
      },
    };
  }
  render() {
    return (
      <View>
        <ScrollView>

          <View
            style={{
              backgroundColor: '#032347',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              height: 225
            }}>
            <View style={theme.appBox}>
              <View
                style={{
                  marginBottom: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    position: 'relative',
                    width: '80%',
                  }}>
                  <TextInput
                    placeholder='Enter Rule Name'
                    placeholderTextColor="#ccc"
                    value={this.state.calculatorName}
                    clearTextOnFocus={true}
                    onChangeText={text => {
                      console.log(text);
                      this.setState({ calculatorName: text });
                    }}
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#416082',
                      color: colors.whiteColor,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ editable: false, calculatorName: '' });
                    }}
                    activeOpacity={0.9}
                    style={{
                      position: 'absolute',
                      right: 10,
                      top: 15,
                    }}>
                    <Text style={styles.buttonActiveText}>(Edit)</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ editable: false });
                  }}
                  activeOpacity={0.9}
                  style={{
                    borderRadius: 32,
                    height: 32,
                    width: 32,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 15,
                  }}>
                  <Image
                    source={require('../Assets/Images/closeIcon.png')}
                    style={{
                      width: 32,
                      height: 32,
                      resizeMode: 'contain'
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={[theme.listRow, { alignItems: 'center' }]}>
                <Image
                  source={require('../Assets/Images/smallCalculatorIcon.png')}
                  style={{
                    width: 26,
                    height: 26,
                    marginRight: 5,
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.whiteColor,
                    fontFamily: Inter.regular,
                  }}>
                  Auto-stash regularly to meet a desired goal.
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: ProzaLibreFontFamily.regular,
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.8)',
                    marginTop: 20,
                    marginBottom: 15
                  }}>
                  Set Saving Frequency
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: colors.whiteColor,
                  borderRadius: 8,
                  padding: 20,
                }}>
                <View style={{ marginRight: 20 }}>
                  <View style={{ marginBottom: 5 }}>
                    <Text
                      style={{
                        color: '#000000',
                        fontFamily: Inter.regular,
                        fontSize: 10,
                      }}>
                      How Often
                    </Text>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../Assets/Images/calender.png')}
                        style={{
                          width: 15,
                          height: 15,
                          marginRight: 10,
                        }}
                      />
                      <Text
                        style={{
                          color: '#000000',
                          fontFamily: Inter.bold,
                          fontSize: 12,
                          borderBottomWidth: 2,
                          borderBottomColor: '#ff7c48',
                        }}>
                        Daily
                      </Text>
                      <Text
                        style={{
                          color: 'rgba(0,0,0,0.6)',
                          fontFamily: Inter.medium,
                          fontSize: 12,
                          marginHorizontal: 10,
                        }}>
                        Weekly
                      </Text>
                      <Text
                        style={{
                          color: 'rgba(0,0,0,0.6)',
                          fontFamily: Inter.medium,
                          fontSize: 12,
                        }}>
                        Monthly
                      </Text>
                    </View>
                  </View>
                </View>
                {/* TIME */}
                <View>
                  <View style={{ marginBottom: 5 }}>
                    <Text
                      style={{
                        color: '#000000',
                        fontFamily: Inter.regular,
                        fontSize: 10,
                      }}>
                      At
                    </Text>
                  </View>
                  <View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../Assets/Images/clock.png')}
                        style={{
                          width: 15,
                          height: 15,
                        }}
                      />
                      <Picker
                        mode={'dialog'}
                        selectedValue={this.state.selectedValue}
                        style={{ height: 25, width: 135, marginLeft: -15, transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({ selectedValue: itemValue })
                        }>
                        <Picker.Item key={'0'} label="12:00pm" value="12:00pm" />
                        <Picker.Item key={'1'} label="1:00pm" value="1:00pm" />
                        <Picker.Item key={'2'} label="2:00pm" value="2:00pm" />
                        <Picker.Item key={'3'} label="3:00pm" value="3:00pm" />
                        <Picker.Item key={'4'} label="4:00pm" value="4:00pm" />
                        <Picker.Item key={'5'} label="5:00pm" value="5:00pm" />
                        <Picker.Item key={'6'} label="6:00pm" value="6:00pm" />
                        <Picker.Item key={'7'} label="7:00pm" value="7:00pm" />
                        <Picker.Item key={'8'} label="8:00pm" value="8:00pm" />
                        <Picker.Item key={'9'} label="9:00pm" value="9:00pm" />
                        <Picker.Item key={'10'} label="10:00pm" value="10:00pm" />
                        <Picker.Item key={'11'} label="11:00pm" value="11:00pm" />
                        <Picker.Item key={'12'} label="12:00am" value="12:00am" />
                      </Picker>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: 40,
              backgroundColor: '#f1f5f9',
            }}>
            <View style={theme.appBox}>
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: ProzaLibreFontFamily.regular,
                      color: 'rgba(0,0,0,0.8)',
                      marginBottom: 25,
                    }}>
                    Set Rules
                  </Text>
                </View>
                <View
                  style={{
                    padding: 17,
                    backgroundColor: colors.whiteColor,
                    borderRadius: 8,
                    marginBottom: 10,
                    position: 'relative',
                  }}>
                  <View
                    style={{
                      position: 'absolute',
                      top: -8,
                      right: -8,
                    }}>
                    <Image
                      source={require('../Assets/Images/inactiveLock.png')}
                      style={{
                        width: 26,
                        height: 26,
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 10,
                    }}>
                    <Image
                      source={require('../Assets/Images/loadingIcon.png')}
                      style={{
                        width: 16,
                        height: 20,
                        marginRight: 10,
                      }}
                    />
                    <Text
                      style={{
                        color: '#000000',
                        fontFamily: ProzaLibreFontFamily.regular,
                        fontSize: 12,
                      }}>
                      How long do you want to save for?
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}>
                    <TouchableOpacity onPress={() => {
                      this.setState({
                        noOfDays: 30,
                        activeState: {
                          days30: true
                        }
                      })
                      let value = 30 * this.state.amount
                      this.setState({
                        calculatedValue: value,
                      })
                    }} activeOpacity={0.9}>
                      <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 0.6]}
                        colors={this.state.activeState.days30 ? ['#ff7547', '#ff9d4d'] : ['#ffffff', '#ffffff']}
                        style={[this.state.activeState.days30 ? styles.customBtnContainer : styles.customBtnContainer, styles.btnBorder]}>
                        <Text style={this.state.activeState.days30 ? styles.buttonActiveText : styles.buttonText}>30d</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                      this.setState({
                        noOfDays: 45,
                        activeState: {
                          days45: true
                        }
                      })
                      let value = 45 * this.state.amount
                      this.setState({
                        calculatedValue: value,
                      })
                    }} activeOpacity={0.9}>
                      <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 0.6]}
                        colors={this.state.activeState.days45 ? ['#ff7547', '#ff9d4d'] : ['#ffffff', '#ffffff']}
                        style={[this.state.activeState.days45 ? styles.customBtnContainer : styles.customBtnContainer, styles.btnBorder]}>
                        <Text style={this.state.activeState.days45 ? styles.buttonActiveText : styles.buttonText}>45d</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                      this.setState({
                        noOfDays: 90,
                        activeState: {
                          days90: true
                        }
                      })
                      let value = 90 * this.state.amount
                      this.setState({
                        calculatedValue: value,
                      })
                    }} activeOpacity={0.9}>
                      <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 0.6]}
                        colors={this.state.activeState.days90 ? ['#ff7547', '#ff9d4d'] : ['#ffffff', '#ffffff']}
                        style={[this.state.activeState.days90 ? styles.customBtnContainer : styles.customBtnContainer, styles.btnBorder]}>
                        <Text style={this.state.activeState.days90 ? styles.buttonActiveText : styles.buttonText}>90d</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          noOfDays: 182,
                          activeState: {
                            days182: true
                          }
                        })
                        let value = 182 * this.state.amount
                        this.setState({
                          calculatedValue: value,
                        })
                      }} activeOpacity={0.9}>
                      <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 0.6]}
                        colors={this.state.activeState.days182 ? ['#ff7547', '#ff9d4d'] : ['#ffffff', '#ffffff']}
                        style={[this.state.activeState.days182 ? styles.customBtnContainer : styles.customBtnContainer, styles.btnBorder]}>
                        <Text style={this.state.activeState.days182 ? styles.buttonActiveText : styles.buttonText}>6m</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} activeOpacity={0.9}>
                      <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 0.6]}
                        colors={['#ffffff', '#ffffff']}
                        style={[styles.customBtnContainer, styles.btnBorder]}>
                        <Text style={styles.buttonText}>Other</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* 2nd Box */}
                <View
                  style={{
                    padding: 17,
                    backgroundColor: colors.whiteColor,
                    borderRadius: 8,
                    marginBottom: 10,
                    position: 'relative',
                    marginTop: 20,
                  }}>
                  <View
                    style={{
                      position: 'absolute',
                      top: -8,
                      right: -8,
                    }}>
                    <Image
                      source={require('../Assets/Images/inactiveLock.png')}
                      style={{
                        width: 26,
                        height: 26,
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 10,
                    }}>
                    <Image
                      source={require('../Assets/Images/moneyBag.png')}
                      style={{
                        width: 18,
                        height: 22,
                        resizeMode: 'contain',
                        marginRight: 10,
                      }}
                    />
                    <Text
                      style={{
                        color: '#000000',
                        fontFamily: ProzaLibreFontFamily.regular,
                        fontSize: 12,
                      }}>
                      How much do you want to save?
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          amount: 50,
                          amountActiveState: {
                            amount50: true
                          }
                        })
                        let value = 50 * this.state.noOfDays
                        this.setState({
                          calculatedValue: value,
                        })
                      }}
                      activeOpacity={0.9}>
                      <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 0.6]}
                        colors={this.state.amountActiveState.amount50 ? ['#ff7547', '#ff9d4d'] : ['#ffffff', '#ffffff']}
                        style={[this.state.amountActiveState.amount50 ? styles.customBtnContainer : styles.customBtnContainer, styles.btnBorder]}>
                        <Text style={this.state.amountActiveState.amount50 ? styles.buttonActiveText : styles.buttonText}>₹50</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          amount: 100,
                          amountActiveState: {
                            amount100: true
                          }
                        })
                        let value = 100 * this.state.noOfDays
                        this.setState({
                          calculatedValue: value,
                        })
                      }}
                      activeOpacity={0.9}>
                      <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 0.6]}
                        colors={this.state.amountActiveState.amount100 ? ['#ff7547', '#ff9d4d'] : ['#ffffff', '#ffffff']}
                        style={[this.state.amountActiveState.amount100 ? styles.customBtnContainer : styles.customBtnContainer, styles.btnBorder]}>
                        <Text style={this.state.amountActiveState.amount100 ? styles.buttonActiveText : styles.buttonText}>₹100</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          amount: 200,
                          amountActiveState: {
                            amount200: true
                          }
                        })
                        let value = 200 * this.state.noOfDays
                        this.setState({
                          calculatedValue: value,
                        })
                      }}
                      activeOpacity={0.9}>
                      <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 0.6]}
                        colors={this.state.amountActiveState.amount200 ? ['#ff7547', '#ff9d4d'] : ['#ffffff', '#ffffff']}
                        style={[this.state.amountActiveState.amount200 ? styles.customBtnContainer : styles.customBtnContainer, styles.btnBorder]}>
                        <Text style={this.state.amountActiveState.amount200 ? styles.buttonActiveText : styles.buttonText}>₹200</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          amount: 300,
                          amountActiveState: {
                            amount300: true
                          }
                        })
                        let value = 300 * this.state.noOfDays
                        this.setState({
                          calculatedValue: value,
                        })
                      }}
                      activeOpacity={0.9}>
                      <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 0.6]}
                        colors={this.state.amountActiveState.amount300 ? ['#ff7547', '#ff9d4d'] : ['#ffffff', '#ffffff']}
                        style={[this.state.amountActiveState.amount300 ? styles.customBtnContainer : styles.customBtnContainer, styles.btnBorder]}>
                        <Text style={this.state.amountActiveState.amount300 ? styles.buttonActiveText : styles.buttonText}>₹300</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {

                      }}
                      activeOpacity={0.9}>
                      <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 0.6]}
                        colors={['#ffffff', '#ffffff']}
                        style={[styles.customBtnContainer, styles.btnBorder]}>
                        <Text style={styles.buttonText}>Other</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* 3rd Box */}
                <View
                  style={{
                    padding: 17,
                    backgroundColor: colors.whiteColor,
                    borderRadius: 8,
                    marginBottom: 10,
                    position: 'relative',
                    marginTop: 20,
                    borderWidth: 1,
                    borderColor: '#ff7d48'
                  }}>
                  <View
                    style={{
                      position: 'absolute',
                      top: -8,
                      right: -8,
                    }}>
                    <Image
                      source={require('../Assets/Images/activeLock.png')}
                      style={{
                        width: 26,
                        height: 26,
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 10,
                    }}>
                    <Image
                      source={require('../Assets/Images/planeIcon.png')}
                      style={{
                        width: 16,
                        height: 20,
                        resizeMode: 'contain',
                        marginRight: 10,
                      }}
                    />
                    <Text
                      style={{
                        color: '#000000',
                        fontFamily: ProzaLibreFontFamily.regular,
                        fontSize: 12,
                      }}>
                      Your expected total save
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{
                      width: '40%',
                    }}>
                      <TextInput
                        editable={false}
                        value={JSON.stringify(this.state.calculatedValue)}
                        style={{
                          borderWidth: 1,
                          borderColor: '#e5e5e7',
                          fontSize: 16,
                          borderRadius: 5,
                          color: '#ff7d48',
                          fontFamily: Inter.bold,
                          paddingHorizontal: 10,
                          paddingVertical: 6,
                          paddingLeft: 22,
                          position: 'relative'
                        }} />
                      <Text style={{
                        color: '#000000',
                        fontFamily: Inter.bold,
                        position: 'absolute',
                        left: 10,
                        top: 10
                      }}>{this.state.rupeeSymbol}</Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: 'rgba(119,182,134,0.2)',
                        borderRadius: 10,
                        padding: 13,
                        paddingLeft: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '55%',
                        position: 'relative',
                      }}>
                      <View style={{
                        width: 20,
                        height: 20,
                        backgroundColor: '#77b686',
                        borderRadius: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        left: -5
                      }}>
                        <Image
                          source={require('../Assets/Images/graphIcon.png')}
                          style={{
                            width: 10,
                            height: 6,
                            resizeMode: 'contain',
                          }}
                        />
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontFamily: Inter.bold,
                          color: '#77b686',
                        }}>
                        6.12% expected returns
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Final Button */}

                <View
                  style={{
                    marginTop: 20,
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <SwipeButton
                    title="Slide to Activate"
                    titleColor="#fff"
                    titleFontSize={12}
                    titleStyles={{
                      fontFamily: Inter.bold,
                    }}
                    containerStyles={{
                      padding: 5,
                      width: 260,
                    }}
                    swipeSuccessThreshold={85}
                    thumbIconImageSource={arrowRight}
                    thumbIconBackgroundColor='#fff'
                    thumbIconBorderColor='#fff'
                    railBackgroundColor="#ff7547"
                    railFillBackgroundColor="#ff7547"
                    railBorderColor="#ff7547"
                    railFillBorderColor="#ff7547"
                    onSwipeStart={() => console.log('Swipe started!')}
                    onSwipeFail={() => console.log('Incomplete swipe!')}
                    onSwipeSuccess={() => {
                      console.log('Submitted successfully!')
                      this.props.navigation.navigate('SaveCompleteScreen');
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  customBtnContainer: {
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderWidth: 1,
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
  RNPickerSelectWrapper: {
    marginTop: 0,
    width: 120,
  },
  RNPickerSelect: {
    color: '#000',
    backgroundColor: '#FFF',
    height: 25,
    lineHeight: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 8,
    fontSize: 12,
  },
  RNPickerDownArrow: {
    width: 12,
    height: 9,
  },
});
