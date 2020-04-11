import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen';
import BaseComponent from './Base/BaseComponent';
import CalculatorScreen from '../Screens/CalculatorScreen';
import TestComponent from './TestComponent';
import ChooseGoalScreen from '../Screens/ChooseGoalScreen';
import SaveCompleteScreen from '../Screens/SaveCompleteScreen';

const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    TestComponent: {
      screen: TestComponent,
      navigationOptions: {
        headerShown: false,
      },
    },
    CalculatorScreen: {
      screen: CalculatorScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    ChooseGoalScreen: {
      screen: ChooseGoalScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SaveCompleteScreen: {
      screen: SaveCompleteScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'HomeScreen',
  },
);

export default createAppContainer(AppNavigator);
