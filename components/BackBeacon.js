import React, {Component} from 'react';
import { View, Text, StyleSheet, Animated, Image, Easing } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

import Expo from 'expo';
import DeviceInfo from 'react-native-device-info';

const images = [
  require('../assets/images/grid-items/isolator.png'),
  require('../assets/images/grid-items/isolator-shadow.png'),
  require('../assets/images/grid-items/bell.png'),
  require('../assets/images/grid-items/bell-shadow.png'),
  require('../assets/images/grid-items/lady-governor.png'),
  require('../assets/images/grid-items/lady-governor-shadow.png'),
  require('../assets/images/grid-items/scales.png'),
  require('../assets/images/grid-items/scales-shadow.png'),
  require('../assets/images/grid-items/seal.png'),
  require('../assets/images/grid-items/seal-shadow.png'),
];

class BackBeacon extends Component{
  
  constructor(props) {
    super(props);

    this.state = {
      name:"",
      found:"",
      address: "",
      image: "",
      clue: '',
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
      name: this.props.name,
      found: this.props.found,
      address: this.props.address,
      clue: this.props.clue
    });
  }

  componentWillReceiveProps() {
    this.setState({
      name: this.props.name,
      found: this.props.found,
      address: this.props.address,
      clue: this.props.clue
    });
  }

  render() {

    const isSE = (DeviceInfo.getModel() == 'iPhone SE') ? true : false;
    const isX = (DeviceInfo.getModel() == 'iPhone X') ? true : false;

    var imageIndex;
    switch(this.props.name){
      case 'Isolator':
        (this.props.found) ? (imageIndex = 0) : (imageIndex = 1);
        break;
      case 'Liberty Bell':
        (this.props.found) ? (imageIndex = 2) : (imageIndex = 3);
        break;
      case 'Olene Walker':
        (this.props.found) ? (imageIndex = 4) : (imageIndex = 5);
        break;
      case 'Senate Chamber':
        (this.props.found) ? (imageIndex = 8) : (imageIndex = 9);
        break;
      case 'Supreme Court':
        (this.props.found) ? (imageIndex = 6) : (imageIndex = 7);
        break;
    }

    return (
      <View style={styles.viewContainer}>
        {
          isSE ? 
            <Text style={styles.seTitle}>{(this.props.found) ? 'YOU FOUND IT!' : this.props.clue}</Text>
            :
            (
              isX ? 
                <Text style={styles.xTitle}>{(this.props.found) ? 'YOU FOUND IT!' : this.props.clue}</Text> 
                : 
                <Text style={styles.title}>{(this.props.found) ? 'YOU FOUND IT!' : this.props.clue}</Text>
            )
        }
        <Image source={require('../assets/images/grid-items/gridItemBg.png')} style={styles.container}>
          <Image source={images[imageIndex]} style={styles.beaconItem}>
            
          </Image>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: width(75),
    height: height(50),
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  beaconItem: {
    width: width(60),
    height: width(45),
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'avenir',
    color: '#fff',
    fontSize: 40,
    textAlign: 'center'
  },
  //for iphone SE
  seTitle: {
    fontFamily: 'avenir',
    color: '#fff',
    fontSize: 30,
    textAlign: 'center'
  },
  //for iphone X
  xTitle: {
    fontFamily: 'avenir',
    color: '#fff',
    fontSize: 30,
    textAlign: 'center'
  }

});

export default BackBeacon;