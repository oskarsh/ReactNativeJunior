import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {ThemeContext, themes} from '../../Theme/themes';
import Button from "../../Components/Button/Button"

class Dashboard extends Component {

  // Hiding the Header for this Screen
  static navigationOptions = {
         header: null
    }
    
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
  }

  toggleTheme = () => {
    console.log(themes)
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Text> Dashboard </Text>
        <ThemeContext.Provider value={this.state.theme}>
          <Button
            title="change Theme"
            onPress={this.toggleTheme}
          /> 
        </ThemeContext.Provider>
        <Button
            title="another"
          /> 
      </View>
    );
  }
}
export default Dashboard;
