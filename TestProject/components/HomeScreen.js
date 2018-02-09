import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ListView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainStyles from '../styles/MainStyles';
import BackgroundImage from '../components/BackgroundImage';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: MainStyles.header,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.getMoviesFromApiAsync();
  }
  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson.title.toString())
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies)
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    let currentStepIndex = 0;
    if (this.state.isLoading) {
      return (
        <View><Text>Loading...</Text></View>
      );
    }
    return (
      <View style={ MainStyles.container }>

        <Image
          source={require('../images/Kodak_1451855_Portra_800_135_36_Professional_Color_197191.jpg')}
          style={MainStyles.photo}
        />
        <Text style={MainStyles.stepTitle}>Film Dev Timer</Text>
        <Button
          title="Start"
          onPress={() => navigate('Step', { stepIndex: currentStepIndex })} />
      </View>
    );
  }
}

// <ListView
//   dataSource={this.state.dataSource}
//   renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
// />
