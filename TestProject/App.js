import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import StepScreen from './components/StepScreen';
import DoneScreen from './components/DoneScreen';

export default StackNavigator({
  Home: { screen: HomeScreen },
  Step: { screen: StepScreen },
  Done: { screen: DoneScreen }
});
