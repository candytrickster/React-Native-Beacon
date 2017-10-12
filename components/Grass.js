import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Image, Easing} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

class Grass extends Component{
  
  constructor(props) {
    super(props);

    this.yPosition = new Animated.Value(height(100)+300);
    this.state = {
      
    };
  }

  componentDidMount() {
    this.animateTo(this.props.delay, this.props.value);
  }

  animateTo = (delay, value) => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(this.yPosition, {
        toValue: value,
        duration: 1500
      }),
    ]).start();
  }

  render() {
    const barStyles = {
      height: 280,
      width: 375,
      top: this.yPosition
    };

    return (
        <Animated.Image
          style={barStyles}
            source={require('../assets/images/index/grass.png')}
        />
    );
  }
}

const styles = StyleSheet.create({
  

})

export default Grass;