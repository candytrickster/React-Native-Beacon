import React from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';



class EndScreen extends React.Component {
  static navigationOptions = {
    title: 'End yo!',
  };
  render() {
    return (
      <View>
        <Text>It's over now</Text>
      </View>
    );
  }
}

export default EndScreen;