import React, { Component } from 'react';
import ThemedHeader from "../../Components/ThemedComponents/ThemedHeader"
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
        <ThemedHeader> About </ThemedHeader>
      </ThemedView>
    );
  }
}

export default About;
