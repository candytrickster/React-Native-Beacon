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
      numFound: 0,
      isolator: {
        name: 'Isolator',
        found: "false"
      },
      bell: {
        name: 'Liberty Bell',
        found: "false",
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
// name:"",
// found:"false",
// address: "",
// image: ""

  _renderAll = () => {
    return (
      <Image source={require('../assets/images/bg.png')} style={styles.container}>
        <ScrollView>
          <TouchableOpacity onPress={this._flip.bind(this,'isolator','this is the isolator clue','this is the isolator hint')}>
            <Beacon name={this.state.isolator.name} found={this.state.isolator.found} address='0C:F3:EE:0D:A4:4C' image='isolator'/>
            <Text>{this.state.isolator.found}</Text>
            <Text>{this.state.clue}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._flip.bind(this,'bell','this is the bell clue','this is the bell hint')}>
            <Beacon name={this.state.bell.name} found={this.state.bell.found} address='0C:F3:EE:0D:A4:4C' image='bell'/>
          </TouchableOpacity>
          <Beacon name='qwaerstyuikjhgfdsaqwet5y6ujk'/>
        </ScrollView>
      </Image>
    );
  }
 
  _renderIndividual = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#1565C0', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={{backgroundColor: 'black', padding: 20}} onPress={this._flip.bind(this, '','','')}>
          <Text style={{fontSize: 32, color: 'white'}}>Flip to Front! {this.state.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
 
  _flip = (item, clue, hint) => {
    this.setState({
      isFlipped: !this.state.isFlipped,
      clue:clue
    });

    switch(item) {
      case 'isolator':
        this.setState(
          (prevState) => ({
            isolator: Object.assign({}, prevState.isolator, {
              found: 'true'
            }),
            numFound: this.state.numFound+1
          })
        );
        break;
      case 'bell':
        this.setState(
          (prevState) => ({
            bell: Object.assign({}, prevState.bell, {
              found: 'true'
            }),
            numFound: this.state.numFound+1
          })
        );
        break;
    }
  }

  _found = (item) => {
    switch(item) {
      case 'isolator':
        this.setState(
          (prevState) => ({
            isolator: Object.assign({}, prevState.isolator, {
              found: 'true'
            }),
            numFound: this.state.numFound+1
          })
        );
        break;
      case 'bell':
        this.setState(
          (prevState) => ({
            bell: Object.assign({}, prevState.bell, {
              found: 'true'
            }),
            numFound: this.state.numFound+1
          })
        );
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