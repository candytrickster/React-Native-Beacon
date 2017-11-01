import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Image, Easing, AppRegistry, TouchableHighlight} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';


class Hint extends Component{
  
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <View style={styles.container}>
        <Text>HINT</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Hint;