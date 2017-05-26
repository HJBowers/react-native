/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import GoogleMap from 'react-native-maps-google';
var {height, width} = Dimensions.get('window');
import MapView from 'react-native-maps'

export default class mapsAPI extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GoogleMap style={styles.map}/>
        <MapView style={styles.map} />
        <Text style={styles.welcome}>
          I can't wait for these maps to work! :)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
    width: width,
    height: height*1/3,
  }
});

AppRegistry.registerComponent('mapsAPI', () => mapsAPI);
