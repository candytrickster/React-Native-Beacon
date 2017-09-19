import React from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import GridScreen from './screens/GridScreen';
import SingleItemScreen from './screens/SingleItemScreen';
import EndScreen from './screens/EndScreen';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Grid')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

export default SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Grid: { screen: GridScreen },
  SingleItem: { screen: SingleItemScreen },
  End: { screen: EndScreen }
},{ 
  headerMode: 'none' 
});

