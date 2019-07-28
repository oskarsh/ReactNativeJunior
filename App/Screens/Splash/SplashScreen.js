import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // loading app content
    this.props.navigation.navigate("App")
  }

  render() {
    return (
      <View>
        <Text> SplashScreen </Text>
      </View>
    );
  }
}

export default SplashScreen;
