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
    };
  }


  render() {
    theme = this.context.theme;
    return (
      <View style={{flex: 1, backgroundColor: theme.background}}>
        <Text> Dashboard </Text>
          <Button
            title="change Theme"
            onPress={this.toggleTheme}
          /> 
        <Button
            title="another"
          /> 
      </View>
    );
  }
}

Dashboard.contextType = ThemeContext;
export default Dashboard;
