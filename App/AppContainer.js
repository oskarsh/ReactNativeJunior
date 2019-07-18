/**
 * This renders the Navigation for the whole App
 * You would visit this file if you would like to add a new screen
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> AppContainer </Text>
      </View>
    );
  }
}

export default AppContainer;
