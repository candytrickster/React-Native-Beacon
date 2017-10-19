//the screen using this will create this component by reading in the json and setting state values bases on that json.
//this way we can change the state without needing to overwrite the json file.

import React, {Component} from 'react';
import { View, Text, StyleSheet, Animated, Image, Easing } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

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
    	image: ""
    };
  }

  componentDidMount() {
    this.setState({
    	name: this.props.name,
    	found: this.props.found,
    	address: this.props.address
    });
    switch(this.props.name){
    	case 'Isolator':
    		(this.props.found == 'true') ? (this.setState({image:0})) : (this.setState({image:1}));
    		break;
    	case 'Liberty Bell':
    		(this.props.found == 'true') ? (this.setState({image:2})) : (this.setState({image:3}));
    		break;
    }
  }

  componentWillReceiveProps() {
  	this.setState({
    	found: this.props.found
    });
    if(this.props.found == 'true'){
    	this.setState({image:this.state.image-1});
    }
  }

  render() {

    return (
    	<View>
  			<Image source={require('../assets/images/grid-items/gridItemBg.png')} style={styles.container}>
  				<Image source={images[this.state.image]} style={styles.beaconItem}>
  					<Text>Hello {(this.state.found == 'true') ? this.state.name : '???'}</Text>
  				</Image>
  			</Image>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
    height: 250,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  beaconItem: {
    width: 100,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default Beacon;