/**
 * 
 * This Component is used to create a Auto Login Functionality
 * It checks inside a local storage if a JWT has already been set
 * if not it will direct you to the Welcome/Login/Register Screen
 * or else to directs you to your AppStack which consists of the Dashboard/Profile 
 */

import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this._checkJWT()

    console.disableYellowBox = true;
  }

  componentDidMount() {
  }

  // Fetch the token from storage then navigate to our appropriate place
  _checkJWT = async () => {
    try {
      const userToken = await AsyncStorage.getItem('@jwt')
      if(userToken !== null) {
        // jwt previously stored
        this.props.navigation.navigate("Splash")
      } else {
        this.props.navigation.navigate("Auth")
      }
    } catch(e) {
      // error reading value
    }
  };

  render() {
    return (
      <View>
        <Text> AuthLoading </Text>
      </View>
    );
  }
}

export default AuthLoading;
