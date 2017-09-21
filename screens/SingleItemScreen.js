import React from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import StatusBar from '../components/StatusBar';



class SingleItemScreen extends React.Component {
  static navigationOptions = {
    title: 'Third!',
  };
  render() {
    return (
      <View>
        <StatusBar/>
        <Text>3rd!</Text>
      </View>
    );
  }
}

export default SingleItemScreen;