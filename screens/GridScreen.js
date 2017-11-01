import React from 'react';
import { Text, View, Button, Easing, TouchableOpacity, Animated, Image, StyleSheet, ScrollView } from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';
import { MenuContext } from 'react-native-popup-menu';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import FlipView from 'react-native-flip-view';
import Expo from 'expo';

// import beaconList from '../assets/data/beacons.js';

import StatusBar from '../components/StatusBar';
import Beacon from '../components/Beacon';
import Header from '../components/Header';
import BackBeacon from '../components/BackBeacon';
import Hint from '../components/Hint';

const maxItems = 10;

class GridScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numFound: 0,
      currentItem: {
        name: 'currentItem',
        found: false,
        clue: 'clue',
        hint: 'hint',
        address: 'address'
      },
      isolator: {
        name: 'Isolator',
        found: false
      },
      bell: {
        name: 'Liberty Bell',
        found: false,
      },
      walker: {
        name: 'Olene Walker',
        found: false
      },
      senate: {
        name: 'Senate Chamber',
        found: false
      },
      supremeCourt: {
        name: 'Supreme Court',
        found: false
      }
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      titlewave: require("../assets/fonts/Title-Wave-Regular.ttf"),
      playfair: require("../assets/fonts/Playfair.ttf"),
      avenir: require("../assets/fonts/Avenir.otf")
    });

    this.setState({ isReady: true });
  }

  componentDidMount() {
    // this.interval = setInterval(() => {
    //     this._found('isolator');
    // },5000);
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
        <Header/>
        <ScrollView>
          <Text style={styles.title}>Found {this.state.numFound} of {maxItems}</Text>
          {(this.state.numFound >= maxItems) ? (
            <Text>Yay you found all the items!</Text>
          ): (
            <Grid>
              <Col style={{ width: 170, justifyContent: 'center', alignItems: 'center' }}>
                <Row>
                  {(this.state.isolator.found) ? (
                    <Beacon name={this.state.isolator.name} found={this.state.isolator.found} image='isolator'/>
                  ) : (
                    <TouchableOpacity onPress={this._flip.bind(this,'isolator','this is the isolator clue','this is the isolator hint')}>
                      <Beacon name={this.state.isolator.name} found={this.state.isolator.found} image='isolator'/>
                    </TouchableOpacity>
                  )}
                </Row>
                <Row>
                  {(this.state.bell.found) ? (
                    <Beacon name={this.state.bell.name} found={this.state.bell.found} image='bell'/>
                  ) : (
                    <TouchableOpacity onPress={this._flip.bind(this,'bell','this is the bell clue','this is the bell hint')}>
                      <Beacon name={this.state.bell.name} found={this.state.bell.found} image='bell'/>
                    </TouchableOpacity>
                  )}
                </Row>
              </Col>
              <Col style={{ width: 170, justifyContent: 'center', alignItems: 'center' }}>
                <Row>
                  {(this.state.walker.found) ? (
                    <Beacon name={this.state.walker.name} found={this.state.walker.found} image='walker'/>
                  ) : (
                    <TouchableOpacity onPress={this._flip.bind(this,'walker','this is the walker clue','this is the walker hint')}>
                      <Beacon name={this.state.walker.name} found={this.state.walker.found} image='walker'/>
                    </TouchableOpacity>
                  )}
                </Row>
                <Row>
                  {(this.state.supremeCourt.found) ? (
                    <Beacon name={this.state.supremeCourt.name} found={this.state.supremeCourt.found} image='supremeCourt'/>
                  ) : (
                    <TouchableOpacity onPress={this._flip.bind(this,'supremeCourt','this is the supremeCourt clue','this is the supremeCourt hint')}>
                      <Beacon name={this.state.supremeCourt.name} found={this.state.supremeCourt.found} image='supremeCourt'/>
                    </TouchableOpacity>
                  )}
                </Row>
              </Col>
            </Grid>
          )}

        </ScrollView>
      </Image>
    );
  }
 
  _renderIndividual = () => {
    return (
      <Image source={require('../assets/images/bg.png')} style={styles.container}>
        <Header>
          <TouchableOpacity onPress={this._flip.bind(this, '','','')}>
            <Text style={{fontSize: 12, color: 'white'}}>BACK</Text>
          </TouchableOpacity>
        </Header>
        <ScrollView>
          <BackBeacon 
            name={this.state.currentItem.name} 
            found={this.state.currentItem.found} 
            image={this.state.currentItem.name} 
            clue={this.state.currentItem.clue}
            address={this.state.currentItem.address}
          />
          <Hint/>
        </ScrollView>
      </Image>
    );
  }
 
  _flip = (item, clue, hint) => {
    this.setState({
      isFlipped: !this.state.isFlipped
    });
    // await this.setState(
    //       (prevState) => ({
    //         isolator: Object.assign({}, prevState.isolator, {
    //           found: true
    //         })
    //       })
    //     );

    switch(item) {
      case 'isolator':
        this.setState(
          (prevState) => ({
            currentItem: Object.assign({}, prevState.currentItem, {
              found: this.state.isolator.found,
              name: this.state.isolator.name,
              clue: clue,
              hint: hint,
              address: '0C:F3:EE:0D:A4:4C'
            })
          })
        );
        break;
      case 'bell':
        this.setState(
          (prevState) => ({
            currentItem: Object.assign({}, prevState.currentItem, {
              found: this.state.bell.found,
              name: this.state.bell.name,
              clue: clue,
              hint: hint,
              address: '0C:F3:EE:0D:A4:4C'
            })
          })
        );
        console.log('gonna call it from bell');
        break;
      case 'walker':
        this.setState(
          (prevState) => ({
            currentItem: Object.assign({}, prevState.currentItem, {
              found: this.state.walker.found,
              name: this.state.walker.name,
              clue: clue,
              hint: hint,
              address: '0C:F3:EE:0D:A4:4C'
            })
          })
        );
        break;
      case 'senate':
        this.setState(
          (prevState) => ({
            currentItem: Object.assign({}, prevState.currentItem, {
              found: this.state.senate.found,
              name: this.state.senate.name,
              clue: clue,
              hint: hint,
              address: '0C:F3:EE:0D:A4:4C'
            })
          })
        );
        break;
      case 'supremeCourt':
        this.setState(
          (prevState) => ({
            currentItem: Object.assign({}, prevState.currentItem, {
              found: this.state.supremeCourt.found,
              name: this.state.supremeCourt.name,
              clue: clue,
              hint: hint,
              address: '0C:F3:EE:0D:A4:4C'
            })
          })
        );
        break;
    }
  }

  async _found (item) {

    this.setState({
      numFound: this.state.numFound+1
    });

    switch(item) {
      case 'isolator':
        await this.setState(
          (prevState) => ({
            isolator: Object.assign({}, prevState.isolator, {
              found: true
            })
          })
        );
        this.setState(
          (prevState) => ({
            currentItem: Object.assign({}, prevState.currentItem, {
              name: this.state.isolator.name,
              found: this.state.isolator.found
            })
          })
        );
        console.log('made it here');
        break;
      case 'bell':
        await this.setState(
          (prevState) => ({
            bell: Object.assign({}, prevState.bell, {
              found: true
            })
          })
        );
        this.setState(
          (prevState) => ({
            currentItem: Object.assign({}, prevState.currentItem, {
              name: this.state.bell.name,
              found: this.state.bell.found
            })
          })
        );
        break;
      case 'walker':
        await this.setState(
          (prevState) => ({
            walker: Object.assign({}, prevState.walker, {
              found: true
            })
          })
        );
        this.setState(
          (prevState) => ({
            currentItem: Object.assign({}, prevState.currentItem, {
              name: this.state.walker.name,
              found: this.state.walker.found
            })
          })
        );
        break;
      case 'supremeCourt':
        await this.setState(
          (prevState) => ({
            supremeCourt: Object.assign({}, prevState.supremeCourt, {
              found: true
            })
          })
        );
        this.setState(
          (prevState) => ({
            currentItem: Object.assign({}, prevState.currentItem, {
              name: this.state.supremeCourt.name,
              found: this.state.supremeCourt.found
            })
          })
        );
        break;
    }
  }



}

const styles = StyleSheet.create({
  title:{
    fontFamily: 'avenir',
    fontSize: 45,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 50
  },
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default GridScreen;