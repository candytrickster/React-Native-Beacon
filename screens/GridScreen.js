import React from 'react';
import { Text, View, Button, Easing, TouchableOpacity, Animated, Image, StyleSheet, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { MenuContext } from 'react-native-popup-menu';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import FlipView from 'react-native-flip-view'; 

import StatusBar from '../components/StatusBar';

class GridScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      isFlipped: false,
      names: [
         {'name': 'Ben', 'id': 1},
         {'name': 'Susan', 'id': 2},
         {'name': 'Robert', 'id': 3},
         {'name': 'Mary', 'id': 4},
         {'name': 'Daniel', 'id': 5},
         {'name': 'Laura', 'id': 6},
         {'name': 'John', 'id': 7},
         {'name': 'Debra', 'id': 8},
         {'name': 'Aron', 'id': 9},
         {'name': 'Ann', 'id': 10},
         {'name': 'Steve', 'id': 11},
         {'name': 'Olivia', 'id': 12}
      ]
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
          <ScrollView >
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Image source={require('../assets/images/grid-items/gridItemBg.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
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

export default GridScreen;