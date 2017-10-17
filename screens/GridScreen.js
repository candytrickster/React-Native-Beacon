import React from 'react';
import { Text, View, Button, Easing, TouchableOpacity, Animated, Image, StyleSheet, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { MenuContext } from 'react-native-popup-menu';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import FlipView from 'react-native-flip-view';

// import beaconList from '../assets/data/beacons.js';

import StatusBar from '../components/StatusBar';
import Beacon from '../components/Beacon';

class GridScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isolator: {
        name: 'Isolator',
        clue: "",
        hint: "",
        found: "false",
        address: "",
      },
      bell: {
        name: 'Liberty Bell',
        clue: "",
        hint: "",
        found: "false",
        address: "",
      }
    };
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
        <ScrollView>
          <TouchableOpacity onPress={this._flip.bind(this,'isolator')}>
            <Beacon name={this.state.isolator.name}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._flip.bind(this,this.state.bell)}>
            <Beacon name={this.state.bell.name}/>
          </TouchableOpacity>
          <Beacon name='qwaerstyuikjhgfdsaqwet5y6ujk'/>
        </ScrollView>
      </Image>
    );
  }
 
  _renderIndividual = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#1565C0', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={{backgroundColor: 'black', padding: 20}} onPress={this._flip.bind(this, this.state.name)}>
          <Text style={{fontSize: 32, color: 'white'}}>Flip to Front! {this.state.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
 
  _flip = (item) => {
    this.setState({
      isFlipped: !this.state.isFlipped,
    });

    switch(item) {
      case 'isolator':
        this.setState({isolator:{name:'hey'}});
        break;
    }
  }

  _found = (item) => {
    switch(item) {
      case 'isolator':
        this.setState({isolator:{found:true}});
        break;
    }
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

export default GridScreen;