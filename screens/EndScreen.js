import React from 'react';
import { AppRegistry, Text, View, Image, Button, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { width, height, totalSize } from 'react-native-dimension';
import Hr from 'react-native-hr';

import FadeIn from '../components/FadeIn';
import Capitol from '../components/Capitol';


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
  };
  
  // do we want to do a msg depending on how many found? ex. all 10 = 'congrats!', 5 = 'better luck next time', etc...
  render() {
    return (
      <View>
        <FadeIn delay={500} duration={1500} style={{justifyContent: 'center', alignItems: 'center', zIndex: 9999}}>
              <Text>CONGRATS!</Text>
              <Text>You found {this.props.numFound} out of {this.props.max}</Text>
              <Capitol value={height(0)+260} delay={500}/>
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
  playButton: {
    backgroundColor: '#ffdf00',
    borderRadius: 20,
    width:270,
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
  }

});

export default EndScreen;