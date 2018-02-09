import React from 'react';
import { StyleSheet, Text, View, Button, Vibration, TouchableOpacity } from 'react-native';
import MainStyles from '../styles/MainStyles';
import BackgroundImage from '../components/BackgroundImage';


export default class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: '00:00',
      isTimerActive: false,
      instruct: 'Ready'
    }
  }
  static navigationOptions = {
    title: 'Step',
  };
  stepData = [
    {
      title: 'Presoak (102F)',
      duration: 60
    },
    {
      title: 'Develop (102F)',
      duration: 120
    },
    {
      title: 'Blix (95F - 105F)',
      duration: 60
    },
    {
      title: 'Wash (95F - 105F)',
      duration: 60
    },
    {
      title: 'Stab (Room Temp)',
      duration: 60
    },
    {
      title: 'Rinse & Photoflo (Room Temp)',
      duration: 60
    }
  ]
  convertTime = (seconds) =>{
    var date = new Date(null);
    date.setSeconds(seconds);
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    return ((mins < 10) ? '0' + mins : mins) + ':' + ((secs < 10) ? '0' + secs : secs);
  }
  vibrate = () => {
    Vibration.vibrate(1000);
  }
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const stepIndex = params ? params.stepIndex : null;

    const startTimer = () => {
        if(!this.state.isTimerActive){
          this.setState({ timer: this.convertTime(this.stepData[stepIndex].duration) });
          var totalTime = this.stepData[stepIndex].duration, curTime = this.stepData[stepIndex].duration;
          this.setState({ instruct: 'Agitate'});
          var counter = 0;
          var timer = setInterval(() => {
            this.setState({ isTimerActive: true });
            if(curTime >= 0){
              if(curTime == (totalTime - 15)){ //first 15 secs
                this.setState({ instruct: 'Wait'});
                this.vibrate();
              } if(curTime == 15) { //last 15 secs
                this.setState({ instruct: 'Pour Out'});
                this.vibrate();
              }
              // console.log("interval:" + counter + ',curTime:' + curTime + ',totalTime:' + totalTime);
              if((curTime <= (totalTime - 15)) && (curTime >= 15)){
                if(counter == 30){
                  counter = 0;
                  this.setState({ instruct: 'Invert 4x'});
                  this.vibrate();
                }
                counter++;
              }
              this.setState({ timer: this.convertTime(curTime) });
              curTime--;
            } else {
              this.setState({ instruct: 'Done'});
              clearInterval(timer);
              this.setState({ isTimerActive: false });
              this.vibrate();
            }
          }, 1000);
        }
      }
    ;


    return (
      <View style={MainStyles.container}>
        <Text style={MainStyles.stepTitle}>Step {stepIndex + 1}</Text>
        <Text style={MainStyles.stepSubtitle}>{this.stepData[stepIndex].title}</Text>
        <Text style={MainStyles.stepTimer}>{this.state.timer}</Text>
        <Text >{this.state.instruct}</Text>
        <View style={MainStyles.buttonWrapper}>
        <Button
          title="Start"
          onPress={() => startTimer()}
        />
        <Button
          style={MainStyles.button}
          title="Next"
          onPress={() => {
              if(stepIndex < (this.stepData.length-1)){
                navigate('Step', { stepIndex: stepIndex + 1 });
              } else {
                navigate('Done');
              }
            }
          }
        />
        </View>
      </View>
    );
  }
}
