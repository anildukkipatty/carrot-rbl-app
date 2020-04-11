import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import theme from '../../Assets/Styles/Stylesheet';

const Header = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={theme.profilePicBox}>
        <Image
          source={require('../../Assets/Images/profilePic.jpg')}
          style={theme.profilePic}
        />
      </View>
      <View style={theme.piggyBankBox}>
        <Image
          source={require('../../Assets/Images/piggyBank.png')}
          style={theme.profilePic}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
