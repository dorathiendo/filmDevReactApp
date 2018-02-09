import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainStyles from '../styles/MainStyles';

export default class BackgroundImage extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../images/hasselblad_portra400_9jpg_26256569568_o.jpg')}
        style={MainStyles.backgroundImage}>
        {this.props.children}
      </ImageBackground>
    );
  }
}
