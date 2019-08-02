import React, { Component } from 'react';
import ThemedText from "../../Components/ThemedComponents/ThemedText"
import ThemedView from "../../Components/ThemedComponents/ThemedView"

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
      <ThemedView style={{flex: 1}}>
        <ThemedText> About </ThemedText>
      </ThemedView>
    );
  }
}

export default About;
