import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PrivacyPolicy extends Component {

  static navigationOptions = ({ screenProps }) => {
    let theme = screenProps.theme
    return {
      title: 'Privay Policy',
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
        <Text> PrivacyPolicy </Text>
      </View>
    );
  }
}

export default PrivacyPolicy;
