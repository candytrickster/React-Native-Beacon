import React from 'react';
import { AppRegistry, Text, View, Image, StyleSheet, Animated } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import Hr from 'react-native-hr';
import { width, height, totalSize } from 'react-native-dimension';

import GridScreen from './screens/GridScreen';
import SingleItemScreen from './screens/SingleItemScreen';
import EndScreen from './screens/EndScreen';
import StatusBar from './components/StatusBar';
import Grass from './components/Grass';
import Capitol from './components/Capitol';
import Expo from 'expo';

const resizeMode = 'center';

class HomeScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      titlewave: require("./assets/fonts/Title-Wave-Regular.ttf"),
      playfair: require("./assets/fonts/Playfair.ttf"),
      avenir: require("./assets/fonts/Avenir.otf")
    });

    this.setState({ isReady: true });
  }

  componentDidMount () {
    
  }

  static navigationOptions = {
    title: 'Welcome',
  };



  render() {

    const barStyles = {
      height: 200,
      width: 225,
      top: this.yPosition
    };
    if(this.state.isReady) {
      const { navigate } = this.props.navigation;

      return (
        <Image source={require('./assets/images/index/bg.png')} style={styles.container}>
          <View>
            <Text style={styles.capitolText}>UTAH CAPITOL</Text>
            <Hr lineStyle={{ backgroundColor: "white", height: 2 }}/>
            <Text style={styles.scavengerText}>SCAVENGER HUNT</Text>
            <Button
              raised
              iconRight={{name: 'play-arrow', size: 32}}
              buttonStyle={styles.playButton}
              textStyle={styles.buttonText}
              fontSize={24}
              title={`PLAY`}
              onPress={() => navigate('Grid')}
            />
            <Grass value={height(100)-370} delay={0}/>
            <Capitol value={height(0)-180} delay={1000}/>

          </View>
        </Image>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    width:150
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'titlewave'
  },
  capitolText: {
    fontFamily: 'playfair',
    color: 'white',
    fontSize:32
  },
  scavengerText: {
    fontFamily: 'avenir',
    color: 'white',
    fontSize:32
  }

});


export default SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Grid: { screen: GridScreen },
  SingleItem: { screen: SingleItemScreen },
  End: { screen: EndScreen }
},{ 
  headerMode: 'none' 
});

