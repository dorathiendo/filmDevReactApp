import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainStyles from '../styles/MainStyles';
import BackgroundImage from '../components/BackgroundImage';


export default class DoneScreen extends React.Component {
  static navigationOptions = {
    title: 'Done',
    headerStyle: MainStyles.header,
  };
  render() {
    const { navigate } = this.props.navigation;
    let currentStepIndex = 1;
    return (
      <BackgroundImage>
      <View style={ MainStyles.container }>
        <Text style={MainStyles.stepTitle}>Done</Text>
        <Button
          title='Start Over'
          onPress={() => navigate('Home')}
        />
      </View>
      </BackgroundImage>
    );
  }
}
