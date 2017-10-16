import React from 'react';
import { AppRegistry, Text, View, Button, Easing, TouchableOpacity, Animated, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { MenuContext } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import FlipView from 'react-native-flip-view';

import StatusBar from '../components/StatusBar';

class ChatScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
  }

  static navigationOptions = {
    title: 'grid screen.',
    header:{ visible:false }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <FlipView style={{flex: 1}}
                front={this._renderAll()}
                back={this._renderIndividual()}
                isFlipped={this.state.isFlipped}
                onFlipped={(val) => {console.log('Flipped: ' + val);}}
                flipAxis="y"
                flipEasing={Easing.out(Easing.ease)}
                flipDuration={500}
                perspective={1000}/>
    );
  }

  _renderAll = () => {
    return (
      <Image source={require('../assets/images/bg.png')} style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{backgroundColor: 'black', padding: 20}} onPress={this._flip}>
            <Text style={{fontSize: 32, color: 'white'}}>Flip to Back!</Text>
          </TouchableOpacity>
        </View>
      </Image>
    );
  }
 
  _renderIndividual = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#1565C0', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={{backgroundColor: 'black', padding: 20}} onPress={this._flip}>
          <Text style={{fontSize: 32, color: 'white'}}>Flip to Front!</Text>
        </TouchableOpacity>
      </View>
    );
  }
 
  _flip = () => {
    this.setState({isFlipped: !this.state.isFlipped});
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default ChatScreen;