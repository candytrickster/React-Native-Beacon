import React from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Hr from 'react-native-hr';
import GridScreen from './screens/GridScreen';
import SingleItemScreen from './screens/SingleItemScreen';
import EndScreen from './screens/EndScreen';
import StatusBar from './components/StatusBar';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <StatusBar/>
        <Text>UTAH CAPITOL</Text>
        <Hr lineStyle={{ height: 2 }} />
        <Text>SCAVENGER HUNT</Text>
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

