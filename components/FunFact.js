import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Image, Easing} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Button } from 'react-native-elements';

const funFacts = {
  'isolator': {
    1:'isolator - first fun fact short',
    2:'isolator - second fun fact medium. i want to show the different lengths a fun fact could be.',
    3:'isolator - third fun fact super long. This one is going to be a very super really long fun fact. its gonna show what a really long fun fact would look like. So.. yeah. this is what said super long fun fact look likes.'
  },
  'bell': {
    1:'bell - first fun fact short',
    2:'bell - second fun fact medium. i want to show the different lengths a fun fact could be.',
    3:'bell - third fun fact super long. This one is going to be a very super really long fun fact. its gonna show what a really long fun face would look like. So.. yeah. this is what said super long fun fact look likes.'
  },
  'walker': {
    1:'walker - first fun fact short',
    2:'walker - second fun fact medium. i want to show the different lengths a fun fact could be.',
    3:'walker - third fun fact super long. This one is going to be a very super really long fun fact. its gonna show what a really long fun face would look like. So.. yeah. this is what said super long fun fact look likes.'
  },
  'supremeCourt': {
    1:'supremeCourt - first fun fact short',
    2:'supremeCourt - second fun fact medium. i want to show the different lengths a fun fact could be.',
    3:'supremeCourt - third fun fact super long. This one is going to be a very super really long fun fact. its gonna show what a really long fun face would look like. So.. yeah. this is what said super long fun fact look likes.'
  },
}

class FunFact extends Component{

  constructor(props) {
    super(props);

    this.yPosition = new Animated.Value(height(100)+250);
    this.state = {
      funFact: '',
      topAnim: new Animated.Value(height(100)+250)
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      titlewave: require("../assets/fonts/Title-Wave-Regular.ttf"),
      playfair: require("../assets/fonts/Playfair.ttf"),
      avenir: require("../assets/fonts/Avenir.otf")
    });
  }

  componentDidMount() {
    this.getRandomFact(this.props.item);
    Animated.spring(this.state.topAnim, {
        toValue: -190,
        tension: 20,
        friction: 5
      }).start();
  }

  getRandomFact = (item) => {
    switch(item) {
      case 'Isolator':
        this.setState(
          (prevState) => ({
            funFact: funFacts.isolator[this.getRandomNum()]
            // funFact: funFacts.isolator[3]
          })
        );
        break;
      case 'Liberty Bell':
        this.setState(
          (prevState) => ({
            funFact: funFacts.bell[this.getRandomNum()]
          })
        );
        break;
      case 'Olene Walker':
        this.setState(
          (prevState) => ({
            funFact: funFacts.walker[this.getRandomNum()]
          })
        );
        break;
      case 'Supreme Court':
        this.setState(
          (prevState) => ({
            funFact: funFacts.supremeCourt[this.getRandomNum()]
          })
        );
        break;
    }
  }

  getRandomNum = () => {
    var min = 1;
    var max = 3;
    var rand =  Math.round(min + (Math.random() * (max-min)));
    return rand;
  }


  render() {

    const animContainer = {
      flex: 1,
      width: width(100),
      top: this.state.topAnim
    };

    return (
      <Animated.View style={animContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>It was the {this.props.item}!</Text>
          <Text style={styles.didYouKnow}>Did you know?</Text>
          <Text style={styles.funFact}>{this.state.funFact}</Text>
          <Button
            raised
            icon={{name: 'close', size: 16, color:'#fff'}}
            buttonStyle={styles.playButton}
            textStyle={styles.buttonText}
            fontSize={15}
            title={`Neat!`}
            onPress={this.props.action}
          />
        </View>
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#ffdf00',
    borderRadius: 20,
    // width: width(100),
    height: 400,
    borderWidth: 4,
    borderColor: '#ffc700'
  },
  title: {
    fontFamily: 'avenir',
    fontSize: 30,
    paddingTop: 15,
    textDecorationLine: 'underline'
  },
  didYouKnow: {
    fontFamily: 'avenir',
    fontSize: 22,
    paddingTop: 15,
  },
  funFact: {
    fontFamily: 'avenir',
    fontSize: 16,
    padding: 15,
    paddingTop: 8,
    textAlign: 'center'
  },
  playButton: {
    backgroundColor: '#000',
    borderRadius: 20,
    width:100,
    top: -10,
    left: width(34)
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'avenir',
    color:"#fff"
  },
});

export default FunFact;