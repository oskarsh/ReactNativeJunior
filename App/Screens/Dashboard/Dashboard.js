import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import {ThemeContext, themes} from '../../Theme/themes';
import Button from "../../Components/ThemedComponents/ThemedButton"
import ThemedView from "../../Components/ThemedComponents/ThemedView"
import ThemedText from "../../Components/ThemedComponents/ThemedText"

class Dashboard extends Component {

  // Hiding the Header for this Screen
  static navigationOptions = {
         header: null
    }
    
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    theme = this.context.theme;
    return (
      <ThemedView style={{flex: 1}}>
      <SafeAreaView >
        <ThemedText> Dashboard </ThemedText>
      </SafeAreaView>
      </ThemedView>
    );
  }
}

Dashboard.contextType = ThemeContext;
export default Dashboard;