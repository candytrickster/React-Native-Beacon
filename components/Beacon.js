//the screen using this will create this component by reading in the json and setting state values bases on that json.
//this way we can change the state without needing to overwrite the json file.

import React, {Component} from 'react';
import { View, Text, StyleSheet, Animated, Image, Easing } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

class Beacon extends Component{
  
  constructor(props) {
    super(props);

    this.state = {
    	name:"",
    	clue:"",
    	hint:"",
    	found:"false",
    	address: ""
    };
  }

  componentDidMount() {
    this.setState({
    	name: this.props.name,
    	clue: this.props.clue,
    	hint: this.props.hint,
    	address: this.props.address
    });
  }

  render() {

    return (
    	<View>
  			<Image source={require('../assets/images/grid-items/gridItemBg.png')} style={styles.container}>
  				<Text >Hello {this.props.name}</Text>
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
  }

});

export default Beacon;