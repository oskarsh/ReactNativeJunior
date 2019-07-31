import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemeContext } from "../../Theme/themes"

class Button extends React.Component {
  render() {
    let theme = this.context;

    return (
      <TouchableOpacity {...this.props} style={{backgroundColor: theme.background}}> 
        <Text style={{}}> {this.props.title} </Text>
      </TouchableOpacity>
    )
  }

}

Button.contextType = ThemeContext;

export default Button;