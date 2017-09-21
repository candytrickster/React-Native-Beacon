import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import Hr from 'react-native-hr';
import GridScreen from './screens/GridScreen';
import SingleItemScreen from './screens/SingleItemScreen';
import EndScreen from './screens/EndScreen';
import StatusBar from './components/StatusBar';
import Expo from 'expo';


class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      titlewave: require("./assets/fonts/Title-Wave-Regular.ttf")
    });

    this.setState({ isReady: true });
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    if(this.state.isReady) {
      const { navigate } = this.props.navigation;
      return (
        <View>
          <StatusBar/>
          <Text>UTAH CAPITOL</Text>
          <Hr lineStyle={{ height: 2 }} />
          <Text>SCAVENGER HUNT</Text>
          <Button
            raised
            iconRight={{name: 'play-arrow', size: 32}}
            buttonStyle={{backgroundColor: 'red', borderRadius: 20}}
            textStyle={{textAlign: 'center',fontFamily: 'titlewave'}}
            fontSize={24}
            title={`Play`}
            onPress={() => navigate('Grid')}
          />
        </View>
      );
    } else {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
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

