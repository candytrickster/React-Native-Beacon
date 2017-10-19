import React, {Component} from 'react';
import { View, Text, StyleSheet, Animated, Image, Easing } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

import Expo from 'expo';

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

class Beacon extends Component{
  
  constructor(props) {
    super(props);

    this.state = {
    	name:"",
    	found:"",
    	address: "",
    	image: "",
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
    	address: this.props.address
    });
  }

  render() {

  	var imageIndex;
  	switch(this.props.name){
    	case 'Isolator':
    		(this.props.found == 'true') ? (imageIndex = 0) : (imageIndex = 1);
    		break;
    	case 'Liberty Bell':
    		(this.props.found == 'true') ? (imageIndex = 2) : (imageIndex = 3);
    		break;
    	case 'Olene Walker':
    		(this.props.found == 'true') ? (imageIndex = 4) : (imageIndex = 5);
    		break;
    	case 'Senate chamber':
    		(this.props.found == 'true') ? (imageIndex = 8) : (imageIndex = 9);
    		break;
    	case 'Supreme court':
    		(this.props.found == 'true') ? (imageIndex = 6) : (imageIndex = 7);
    		break;
    }

    return (
    	<View style={styles.viewContainer}>
    		<Text style={styles.title}>{(this.props.found == 'true') ? this.props.name : '???'}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: 130,
    height: 150,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  beaconItem: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'avenir',
    color: '#fff',
    fontSize: 28,
    textAlign: 'center'
  }

});

export default Beacon;