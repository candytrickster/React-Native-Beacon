import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Image, Easing} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

class FadeIn extends Component{
  
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0)      
    };
  }

  componentDidMount() {
    this.animateTo(this.props.delay, this.props.duration);
  }

  animateTo = (delay, duration) => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: duration
      }),
    ]).start();
  }

  render() {

    let { fadeAnim } = this.state;

    return (
        <Animated.View style={{ ...this.props.style, opacity: fadeAnim }} >
          {this.props.children}
        </Animated.View>
    );
  }
}

export default FadeIn;