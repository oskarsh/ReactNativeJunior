import React, { Component } from 'react';
import { View } from 'react-native';
import ThemedText from "../../Components/ThemedComponents/ThemedText"
import ThemedView from "../../Components/ThemedComponents/ThemedView"
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
      <ThemedView style={{flex: 1}}>

        <ThemedText> PrivacyPolicy </ThemedText>
      </ThemedView>
    );
  }
}

export default PrivacyPolicy;
