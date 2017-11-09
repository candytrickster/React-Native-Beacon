import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Image, Easing, AppRegistry, TouchableHighlight} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Button } from 'react-native-elements';
import PopoverTooltip from 'react-native-popover-tooltip';


class Hint extends Component{
  
  constructor(props) {
    super(props);

    this.state = {
      order: 1
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
  
  render() {
    return (
      <View style={styles.container}>
        <PopoverTooltip
          ref='tooltip2'
          buttonComponent={
            <View style={styles.hintButton}>
              <Image source={require('../assets/images/lightbulb.png')} style={styles.icon}/>
              <Text style={styles.buttonText}>HINT</Text>
            </View>
          }
          items={[
            {
              label: this.props.hint,
              onPress: () => {}
            }
          ]}
          animationType='spring' // spring-damper animation
          springConfig={{tension: 100, friction: 0}} // tension controls the potential of the spring effect,
          labelStyle={{fontFamily: 'avenir', fontSize: 21, padding:10, paddingTop: 15}}
          labelContainerStyle={{backgroundColor: '#ffdf00', alignItems: 'center'}}
          labelSeparatorColor='#ffdf00'
          />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    left: 130,
  },
  hintButton: {
    backgroundColor: '#ffdf00',
    borderRadius: 20,
    width: 80,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    backgroundColor:'transparent',
    color:"#000",
    top: -4,
    left: 10
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
    left: 12
  }
});

export default Hint;