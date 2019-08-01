import React, { Component } from 'react';
import { View, Text } from 'react-native';

class About extends Component {

  static navigationOptions = ({ screenProps }) => {
    let theme = screenProps.theme
    return {
      title: 'About',
      headerTintColor: theme.foreground,
      headerStyle: { backgroundColor: theme.background},
    };
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> About </Text>
      </View>
    );
  }
}

export default About;
