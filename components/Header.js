import React, {Component} from 'react';
import { View, Text, StyleSheet, Animated, Image, Easing, TouchableOpacity } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Hr from 'react-native-hr';
import Expo from 'expo';
import DeviceInfo from 'react-native-device-info';

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

    const isSE = (DeviceInfo.getModel() == 'iPhone SE') ? true : false;
    const isX = (DeviceInfo.getModel() == 'iPhone X') ? true : false;

    const btnStyle = (this.props.type == 'back') ? styles.backButton : styles.endButton;

    return (
      <View style={styles.container}>
        <View>
          <View style={btnStyle}>
            {this.props.children}
          </View>
          {
            (this.props.type == 'end') ? 
            <View style={styles.containerEndButton}><Text style={styles.capitolText}>UTAH CAPITOL</Text>
              <Hr lineStyle={{ backgroundColor: "white", top:-17, marginLeft: 75, marginRight: 75}}/>
              <Text style={styles.scavengerText}>SCAVENGER HUNT</Text>
            </View>
            :
            <View style={styles.containerBackButton}><Text style={styles.capitolText}>UTAH CAPITOL</Text>
              <Hr lineStyle={{ backgroundColor: "white", top:-17, marginLeft: 75, marginRight: 75}}/>
              <Text style={styles.scavengerText}>SCAVENGER HUNT</Text>
            </View>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002a5c',
    height: 80,
    width: width(100)
  },
  containerBackButton:{
    justifyContent: 'center',
    alignItems: 'center',
    width: width(100),
    height: 10
  },
  containerEndButton:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width(100),
    height: 10,
    top: -10
  },
  capitolText: {
    fontFamily: 'playfair',
    color: 'white',
    fontSize:20,
    top:-19
  },
  scavengerText: {
    fontFamily: 'avenir',
    color: 'white',
    fontSize:22,
    top:-12
  },
  backButton: {
    marginTop: height(5),
    paddingLeft: 15
  },
  endButton: {
    marginTop: height(5),
    paddingLeft: width(85),
  }

});

export default Header;