import React, { Component } from 'react';
import { View } from 'react-native';
import ThemedView from "../../Components/ThemedComponents/ThemedView"
import ThemedText from "../../Components/ThemedComponents/ThemedText"
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
      <ThemedView style={{flex: 1}}>
        <ThemedText> Help </ThemedText>
      </ThemedView>
    );
  }
}

export default Help;
