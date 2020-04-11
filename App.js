/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  ImageBackground
} from 'react-native';

import HomeScreen from './src/Screens/HomeScreen';
import theme from './src/Assets/Styles/Stylesheet'
import Header from './src/Components/Header/Header';
import MainNavigator from './src/Components/MainNavigator';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <MainNavigator />
    </>
  );
};


export default App;
