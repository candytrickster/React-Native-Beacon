import React, {Component} from 'react';
import { View, Text, StyleSheet, Animated, Image, Easing } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Hr from 'react-native-hr';
import Expo from 'expo';

class Header extends Component{
  
  constructor(props) {
    super(props);

    this.state = {
    	isReady: false
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

  componentDidMount() {
    this.setState({
    	
    });
  }

  render() {

    return (
    	<View style={styles.container}>
    		<Text style={styles.capitolText}>UTAH CAPITOL</Text>
        <Hr lineStyle={{ backgroundColor: "white", top:7}}/>
        <Text style={styles.scavengerText}>SCAVENGER HUNT</Text>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002a5c',
    height: 80
  },
  capitolText: {
    fontFamily: 'playfair',
    color: 'white',
    fontSize:20,
    top:5
  },
  scavengerText: {
    fontFamily: 'avenir',
    color: 'white',
    fontSize:22,
    top:12
  }

});

export default Header;