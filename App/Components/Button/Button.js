import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemeContext } from "../../Theme/themes"

class Button extends React.Component {
  render() {
    let theme = this.context;

    return (
      <TouchableOpacity {...this.props} style={[theme.button, theme.buttonColor]}> 
        <Text style={[theme.title ,theme.b90]}> {this.props.title} </Text>
      </TouchableOpacity>
    )
  }
}

Button.contextType = ThemeContext;

export default Button;