import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Text } from 'react-native-elements';

class UserDetail extends Component {
  render() {
    const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <List>
          <ListItem
            title="1"
          />
          <ListItem
            title="2"
          />
          <ListItem
            title="3"
          />
        </List>
        <List>
          <ListItem
            title="444444"
          />
        </List>

        
      </ScrollView>
    );
  }
}

export default UserDetail;