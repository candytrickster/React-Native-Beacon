import React from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';



class SingleItemScreen extends React.Component {
  static navigationOptions = {
    title: 'Third!',
  };
  render() {
    return (
      <View>
        <Text>3rd!</Text>
      </View>
    );
  }
}

export default SingleItemScreen;