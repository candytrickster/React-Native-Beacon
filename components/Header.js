import React, {Component} from 'react';
import { View, Text, StyleSheet, Animated, Image, Easing } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Hr from 'react-native-hr';
import Expo from 'expo';

class Header extends Component{
  
  constructor(props) {
    super(props);

    this.state = {
    	isReady: false
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
    this.setState({
    	
    });
  }

  render() {

    return (
    	<View style={styles.container}>
        {this.props.children ? 
          <View>
            <View style={styles.backButton}>
              {this.props.children}
            </View>
            <View style={styles.containerWithButtons}><Text style={styles.capitolTextWithButtons}>UTAH CAPITOL</Text>
              <Hr lineStyle={{ backgroundColor: "white", top:-17, marginLeft: 75, marginRight: 75}}/>
              <Text style={styles.scavengerTextWithButtons}>SCAVENGER HUNT</Text>
            </View>
          </View> 
        :
          <View style={styles.container}><Text style={styles.capitolText}>UTAH CAPITOL</Text>
            <Hr lineStyle={{ backgroundColor: "white", top:7, marginLeft: 75, marginRight: 75}}/>
            <Text style={styles.scavengerText}>SCAVENGER HUNT</Text>
          </View>
        }
    		
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002a5c',
    height: 80,
    width: width(100)
  },
  containerWithButtons:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002a5c',
    width: width(100),
    height: 10
  },
  capitolText: {
    fontFamily: 'playfair',
    color: 'white',
    fontSize:20,
    top:5
  },
  capitolTextWithButtons: {
    fontFamily: 'playfair',
    color: 'white',
    fontSize:20,
    top:-19
  },
  scavengerText: {
    fontFamily: 'avenir',
    color: 'white',
    fontSize:22,
    top:12
  },
  scavengerTextWithButtons: {
    fontFamily: 'avenir',
    color: 'white',
    fontSize:22,
    top:-12
  },
  backButton: {
    marginTop: height(5),
    paddingLeft: 15
  }

});

export default Header;