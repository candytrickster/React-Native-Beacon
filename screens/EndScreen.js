import React from 'react';
import { AppRegistry, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { width, height, totalSize } from 'react-native-dimension';
import Hr from 'react-native-hr';
import { Button } from 'react-native-elements';

import FadeIn from '../components/FadeIn';
import Capitol from '../components/Capitol';

import {
  shareOnFacebook,
  shareOnTwitter,
} from 'react-native-social-share';

class EndScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      numFound: 0,
      max: 0
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      titlewave: require("../assets/fonts/Title-Wave-Regular.ttf"),
      playfair: require("../assets/fonts/Playfair.ttf"),
      avenir: require("../assets/fonts/Avenir.otf")
    });

    this.setState({ isReady: true });
  }

  static navigationOptions = {
    title: 'End yo!',
  }

  share = () => {
    console.log('pressed fb button');
  }

  
  // do we want to do a msg depending on how many found? ex. all 10 = 'congrats!', 5 = 'better luck next time', etc...
  render() {
    return (
      <View>
        <FadeIn delay={500} duration={1500} style={{justifyContent: 'center', alignItems: 'center', zIndex: 9999}}>
          <Text style={styles.title}>CONGRATS!</Text>
          <Text style={styles.foundText}>You found {this.props.numFound} out of {this.props.max}</Text>
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} style={styles.beaconContainer}>
            <Image source={require('../assets/images/white-capitol.png')} style={styles.beaconItem}/>
          </Image>
        </FadeIn>
      </View>
    );
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
  title: {
    fontFamily: 'playfair',
    color: 'white',
    fontSize:48,
    top: height(2)
  },
  foundText: {
    fontFamily: 'avenir',
    color: 'white',
    fontSize:32,
    top: height(4)
  },
  beaconContainer: {
    flex: 1,
    top: height(6),
    width: width(75),
    height: height(50),
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  beaconItem: {
    width: width(52),
    height: width(48),
    top: -23
  },
  fbIconContainer: {
    top: height(14),
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-end',
    top: height(15)
  },
  fbIcon: {
    width: 40,
    height: 40
  },
  shareText: {
    fontFamily: 'avenir',
    color: 'white',
    fontSize:32,
    paddingTop: 5
  }

});

export default EndScreen;