import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Inter, ProzaLibreFontFamily } from '../../Assets/Contants/Fonts';
import { colors } from '../../Assets/Contants/Colors';

export default class BaseComponent extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#032347',
        }}>
        <View>
          <Text
            style={{
              fontSize: 12,
              fontFamily: Inter.regular,
              color: colors.whiteColor,
              marginBottom: 20,
            }}>
            4 Active Savings Goals
          </Text>
        </View>
        <View
          style={{
            padding: 17,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.whiteColor,
            borderRadius: 8,
            marginBottom: 10,
          }}>
          <View style={{ marginRight: 10 }}>
            <View
              style={{
                backgroundColor: colors.lightYellow,
                height: 54,
                width: 54,
                borderRadius: 54,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: colors.whiteColor,
                  height: 38,
                  width: 38,
                  borderRadius: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../Assets/Images/planeIcon.png')}
                  style={{ width: 21, height: 26, resizeMode: 'contain' }}
                />
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 17,
                fontFamily: ProzaLibreFontFamily.regular,
                color: '#424242',
              }}>
              ₹2,098.23
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Inter.regular,
                color: '#424242',
              }}>
              Student Loan - 32 Days Left
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 17,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.whiteColor,
            borderRadius: 8,
            marginBottom: 10,
          }}>
          <View style={{ marginRight: 10 }}>
            <View
              style={{
                backgroundColor: colors.lightYellow,
                height: 54,
                width: 54,
                borderRadius: 54,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: colors.whiteColor,
                  height: 38,
                  width: 38,
                  borderRadius: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../Assets/Images/planeIcon.png')}
                  style={{ width: 21, height: 26, resizeMode: 'contain' }}
                />
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 17,
                fontFamily: ProzaLibreFontFamily.regular,
                color: '#424242',
              }}>
              ₹2,098.23
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Inter.regular,
                color: '#424242',
              }}>
              Student Loan - 32 Days Left
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 17,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.whiteColor,
            borderRadius: 8,
            marginBottom: 10,
          }}>
          <View style={{ marginRight: 10 }}>
            <View
              style={{
                backgroundColor: colors.lightYellow,
                height: 54,
                width: 54,
                borderRadius: 54,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: colors.whiteColor,
                  height: 38,
                  width: 38,
                  borderRadius: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../Assets/Images/planeIcon.png')}
                  style={{ width: 21, height: 26, resizeMode: 'contain' }}
                />
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 17,
                fontFamily: ProzaLibreFontFamily.regular,
                color: '#424242',
              }}>
              ₹2,098.23
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Inter.regular,
                color: '#424242',
              }}>
              Student Loan - 32 Days Left
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 17,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.whiteColor,
            borderRadius: 8,
          }}>
          <View style={{ marginRight: 10 }}>
            <View
              style={{
                backgroundColor: colors.lightYellow,
                height: 54,
                width: 54,
                borderRadius: 54,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: colors.whiteColor,
                  height: 38,
                  width: 38,
                  borderRadius: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../Assets/Images/planeIcon.png')}
                  style={{ width: 21, height: 26, resizeMode: 'contain' }}
                />
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 17,
                fontFamily: ProzaLibreFontFamily.regular,
                color: '#424242',
              }}>
              ₹2,098.23
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Inter.regular,
                color: '#424242',
              }}>
              Student Loan - 32 Days Left
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
