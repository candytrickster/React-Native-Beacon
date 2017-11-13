import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Image, Easing} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

class Grass extends Component{
  
  constructor(props) {
    super(props);

    this.yPosition = new Animated.Value(height(100)+(height(100)/3));
    this.state = {
      
    };
  }

  componentDidMount() {
    this.animateTo(this.props.delay, this.props.value);
  }

  animateTo = (delay, value) => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.spring(this.yPosition, {
        toValue: value,
        tension: 10,
        friction: 15
      }),
    ]).start();
  }

  render() {
    const capitolStyles = {
      height: (height(100)/3),
      width: width(65),
      top: this.yPosition
    };

    return (
        <View>
          <Animated.Image
            style={capitolStyles}
              source={require('../assets/images/index/capitol.png')}
          />
        </View>
    );
  }
}

export default Grass; 