import React from 'react';
import { Text, View, Button, Easing, TouchableOpacity, Animated, Image, StyleSheet, ScrollView, DeviceEventEmitter } from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';
import { MenuContext } from 'react-native-popup-menu';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import FlipView from 'react-native-flip-view';
import Expo from 'expo';
import { width, height, totalSize } from 'react-native-dimension';
import Beacons from 'react-native-beacons-manager';

// import beaconList from '../assets/data/beacons.js';

import EndScreen from '../screens/EndScreen.js';

import StatusBar from '../components/StatusBar';
import Beacon from '../components/Beacon';
import Header from '../components/Header';
import BackBeacon from '../components/BackBeacon';
import Hint from '../components/Hint';
import FunFact from '../components/FunFact';
import FadeIn from '../components/FadeIn';


const maxItems = 10;

class GridScreen extends React.Component {

  constructor(props) {
    super(props);

    this.handler = this._flip.bind(this,'','','');

    this.state = {
      beaconNotFound: true,
      numFound: 0,
      finished: false,
      currentItem: {
        name: 'currentItem',
        found: false,
        clue: 'clue',
        hint: 'hint',
        address: 'address',
        uuid: 'uuid'
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
    console.log("ummmm what???");
    Beacons.requestWhenInUseAuthorization();
    console.log("HEYY YOOOOOOOOOOO");
    // this.interval = setInterval(() => {
    //     this._found('isolator');
    // },1000);
  }

  componentWillUnMount() {
   //  Beacons
   // .stopRangingBeaconsInRegion(region)
   // .then(() => console.log('Beacons ranging stopped succesfully'))
   // .catch(error => console.log(`Beacons ranging not stopped, error: ${error}`));
   // // remove auth state event we registered at componentDidMount:
   // this.authStateDidRangeEvent.remove();
   // // remove ranging event we registered at componentDidMount:
   // this.beaconsDidRangeEvent.remove();
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

    const { navigate } = this.props.navigation;

    return (
      <Image source={require('../assets/images/bg.png')} style={styles.container}>
        <Header type='end'>
          <TouchableOpacity onPress={this._finishGame}>
              <Text style={{fontSize: 14, color: 'white', textAlign: 'center'}}>{!this.state.finished ? 'End Game' : 'Game Over'}</Text>
          </TouchableOpacity>
        </Header>
        <ScrollView>
          {(this.state.finished) ? (
            <EndScreen numFound={this.state.numFound} max={maxItems}/>
          ): (
            <View>
              <FadeIn delay={500} duration={1800} style={{justifyContent: 'center', alignItems: 'center', zIndex: 9999}}>
                <Text style={styles.title}>Found {this.state.numFound} of {maxItems}</Text>
                <Grid>
                  <Col style={{ width: width(50), justifyContent: 'center', alignItems: 'center' }}>
                    <Row>
                      {(this.state.isolator.found) ? (
                        <Beacon name={this.state.isolator.name} found={this.state.isolator.found} image='isolator'/>
                      ) : (
                        <TouchableOpacity onPress={this._flip.bind(this,'isolator','this is the isolator clue. Also a bit long','this is the isolator hint. Im just making this really really long to see what this will look like. oh long hint, how many pepople will read you? Not many. You are purely for looks..')}>
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
                  <Col style={{ width: width(50), justifyContent: 'center', alignItems: 'center' }}>
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
              </FadeIn>
            </View>
          )}

        </ScrollView>
      </Image>
    );
  }
 
  _renderIndividual = () => {
    return (
      <Image source={require('../assets/images/bg.png')} style={styles.container}>
        <Header type='back'>
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
        </ScrollView>
        
        {this.state.currentItem.found ? 
          <FunFact
            item={this.state.currentItem.name}
            value={height(50)}
            delay={1000}
            action= {this.handler}
          /> :
          <Hint hint={this.state.currentItem.hint}/>
        }
      </Image>
    );
  }
 
  async _flip (item, clue, hint) {

    await this.setState({
      isFlipped: !this.state.isFlipped
    });

    switch(item) {
      case 'isolator':
        await this.setState(
          (prevState) => ({
            currentItem: Object.assign({}, prevState.currentItem, {
              found: this.state.isolator.found,
              name: this.state.isolator.name,
              clue: clue,
              hint: hint,
              address: '0C:F3:EE:0D:A4:4C',
              uuid: '2f234454-cf6d-4a0f-adf2-f4911ba9ffa6'
            })
          })
        );
        break;
      case 'bell':
        await this.setState(
          (prevState) => ({
            currentItem: Object.assign({}, prevState.currentItem, {
              found: this.state.bell.found,
              name: this.state.bell.name,
              clue: clue,
              hint: hint,
              address: '0C:F3:EE:0D:A4:4C',
              uuid: '2f234454-cf6d-4a0f-adf2-f4911ba9ffa6'
            })
          })
        );
        break;
      case 'walker':
        await this.setState(
          (prevState) => ({
            currentItem: Object.assign({}, prevState.currentItem, {
              found: this.state.walker.found,
              name: this.state.walker.name,
              clue: clue,
              hint: hint,
              address: '0C:F3:EE:0D:A4:4C',
              uuid: '2f234454-cf6d-4a0f-adf2-f4911ba9ffa6'
            })
          })
        );
        break;
      case 'senate':
        await this.setState(
          (prevState) => ({
            currentItem: Object.assign({}, prevState.currentItem, {
              found: this.state.senate.found,
              name: this.state.senate.name,
              clue: clue,
              hint: hint,
              address: '0C:F3:EE:0D:A4:4C',
              uuid: '2f234454-cf6d-4a0f-adf2-f4911ba9ffa6'
            })
          })
        );
        break;
      case 'supremeCourt':
        await this.setState(
          (prevState) => ({
            currentItem: Object.assign({}, prevState.currentItem, {
              found: this.state.supremeCourt.found,
              name: this.state.supremeCourt.name,
              clue: clue,
              hint: hint,
              address: '0C:F3:EE:0D:A4:4C',
              uuid: 'new uuid'
            })
          })
        );
        break;
    }
    if(this.state.isFlipped) {
      this._lookForBeacon(this.state.currentItem.uuid);
    }
  }

  async _found (item) {

    this.setState({
      numFound: this.state.numFound+1
    });

    if(this.state.numFound >= maxItems){
      this.setState({
        finished: true
      });
    }

    switch(item) {
      case 'Isolator':
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
        break;
      case 'Liberty Bell':
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
      case 'Olene Walker':
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
      case 'Supreme Court':
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

  _finishGame = () => {
    this.setState({
      finished: true
    });
  }

  _lookForBeacon = (uuid) => {
    console.log("Hello "+this.state.currentItem.name+" : "+uuid);
    // this._found(this.state.currentItem.name);
    // OR
    // this.interval = setInterval(() => {
    //     this._found(this.state.currentItem.name);
    // },1000);


    const region = {
      identifier: 'sdot',
      uuid: uuid
    };
 
    Beacons
    .startRangingBeaconsInRegion(region) // or like  < v1.0.7: .startRangingBeaconsInRegion(identifier, uuid)
    .then(() => console.log('Beacons ranging started succesfully'))
    .catch(error => console.log(`Beacons ranging not started, error: ${error}`));

    this.beaconsDidRangeEvent = Beacons.BeaconsEventEmitter.addListener(
     'beaconsDidRange',
     (data) => {
       console.log('beaconsDidRange data: ', data);
        // if(data.proximity == 'near'){ 
        //   this._found(this.state.currentItem.name);
        // }
        if(this.state.beaconNotFound){
          this.setState({
            beaconNotFound: false
          });
          this._found(this.state.currentItem.name);
        }
     }
   );


     
    Beacons.startUpdatingLocation();

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