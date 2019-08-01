import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Help extends Component {

  static navigationOptions = ({ screenProps }) => {
    let theme = screenProps.theme
    return {
      title: 'Help',
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
        <Text> Help </Text>
      </View>
    );
  }
}

export default Help;
