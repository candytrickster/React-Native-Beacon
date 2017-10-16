import React from 'react';
import { AppRegistry, Text, View, Button, Easing, TouchableOpacity } from 'react-native';
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
                front={this._renderFront()}
                back={this._renderBack()}
                isFlipped={this.state.isFlipped}
                onFlipped={(val) => {console.log('Flipped: ' + val);}}
                flipAxis="y"
                flipEasing={Easing.out(Easing.ease)}
                flipDuration={500}
                perspective={1000}/>
    );
  }

  _renderFront = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#81D4FA', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={{backgroundColor: 'black', padding: 20}} onPress={this._flip}>
          <Text style={{fontSize: 32, color: 'white'}}>Flip to Back!</Text>
        </TouchableOpacity>
      </View>
    );
  }
 
  _renderBack = () => {
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

export default ChatScreen;