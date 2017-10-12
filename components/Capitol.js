import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Image, Easing} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

class Grass extends Component{
  
  constructor(props) {
    super(props);

    this.yPosition = new Animated.Value(height(100)+250);
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
    const barStyles = {
      height: 200,
      width: 225,
      top: this.yPosition
    };

    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Animated.Image
            style={barStyles}
              source={require('../assets/images/index/capitol.png')}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  

})

export default Grass; 