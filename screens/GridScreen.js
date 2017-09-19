import React from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';



class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy. or not.',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Chat with Lucy. or not i guess.</Text>
        <Button
          onPress={() => navigate('SingleItem')}
          title="Single Item"
        />
      </View>
    );
  }
}

export default ChatScreen;