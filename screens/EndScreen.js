import React from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import StatusBar from '../components/StatusBar';



class EndScreen extends React.Component {
  static navigationOptions = {
    title: 'End yo!',
  };
  render() {
    return (
      <View>
        <StatusBar/>
        <Text>It's over now</Text>
      </View>
    );
  }
}

export default EndScreen;