//the screen using this will create this component by reading in the json and setting state values bases on that json.
//this way we can change the state without needing to overwrite the json file.

import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Image, Easing} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

class FadeIn extends Component{
  
  constructor(props) {
    super(props);

    this.state = {
    	name:"",
    	clue:"",
    	hint:"",
    	found:"false",
    };
  }

  componentDidMount() {
    
  }

  render() {

    return (
        <View>

        </View>

    );
  }
}

export default FadeIn;