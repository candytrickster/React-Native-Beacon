import React from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { MenuContext } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

class ChatScreen extends React.Component {

  static navigationOptions = {
    title: 'Chat with Lucy. or not.',
    header:{ visible:false }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <MenuContext style={{flexDirection: 'column', paddingTop: 50, width: 300}}>
          <Menu>
            <MenuTrigger text='End Game'/>
            <MenuOptions>
              <MenuOption onSelect={() => alert(`Not called`)} disabled={true}>
                <Text style={{color: '#f00'}}>Are you sure you want to end the game?</Text>
              </MenuOption>
              <MenuOption onSelect={() => navigate('End')} text='Yes' />
              <MenuOption text='No'/>
            </MenuOptions>
          </Menu>
        </MenuContext>
        <Text>Chat with Lucy. or not i guess.</Text>
        
      </View>
    );
  }
}

export default ChatScreen;