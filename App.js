import React from 'react';
import { AppRegistry, Text, View, Image, StyleSheet, Animated } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import Hr from 'react-native-hr';
import { width, height, totalSize } from 'react-native-dimension';
//screens
import GridScreen from './screens/GridScreen';
import EndScreen from './screens/EndScreen';
//components
import Grass from './components/Grass';
import Capitol from './components/Capitol';
import FadeIn from './components/FadeIn';

import Expo from 'expo';
import DeviceInfo from 'react-native-device-info';

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
    console.log("This is the device : " + DeviceInfo.getModel());
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {

    const isSE = (DeviceInfo.getModel() == 'iPhone SE') ? true : false;
    const isX = (DeviceInfo.getModel() == 'iPhone X') ? true : false;

    if(this.state.isReady) {
      const { navigate } = this.props.navigation;

      return (
        <Image source={require('./assets/images/index/bg.png')} style={styles.container}>
          <View style={{justifyContent: 'center', alignItems: 'center', position: 'absolute'}}>
            <FadeIn delay={2300} duration={1500} style={{justifyContent: 'center', alignItems: 'center', zIndex: 9999}}>
              { isSE ? <Text style={styles.seCapitolText}>UTAH CAPITOL</Text> : <Text style={styles.capitolText}>UTAH CAPITOL</Text> }
              
              <Hr lineStyle={{ backgroundColor: "white", height: 2, top:height(5) }}/>
              <Text style={styles.scavengerText}>SCAVENGER HUNT</Text>
              <Button
                raised
                iconRight={{name: 'play-arrow', size: 32, color:'#000'}}
                buttonStyle={styles.playButton}
                textStyle={styles.buttonText}
                fontSize={32}
                title={`PLAY`}
                onPress={() => navigate('Grid')}
              />
            </FadeIn>
            <Grass value={height(100)-(width(72)*1.55)} delay={0}/>
            <Capitol value={height(0)-((height(100)/3)+height(2.5))} delay={1000}/>

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
    backgroundColor: '#ffdf00',
    borderRadius: 20,
    width:width(68),
    top: height(65)
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'titlewave',
    color:"#000"
  },
  capitolText: {
    fontFamily: 'playfair',
    color: 'white',
    fontSize:36,
    top: height(4)
  },
  scavengerText: {
    fontFamily: 'avenir',
    color: 'white',
    fontSize:38,
    top: height(7)
  },
  //iphone se styling
  seCapitolText: {
    fontFamily: 'playfair',
    color: 'orange',
    fontSize:36,
    top: height(4)
  },
  seScavengerText: {
    fontFamily: 'avenir',
    color: 'white',
    fontSize:38,
    top: height(7)
  }

});


export default SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Grid: { screen: GridScreen },
  End: { screen: EndScreen }
},{ 
  headerMode: 'none' 
});

