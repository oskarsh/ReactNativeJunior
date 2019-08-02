import React from 'react';
import { Text } from 'react-native';
import { ThemeContext } from "../../Theme/themes"

class ThemedText extends React.Component {
  render() {
    theme = this.context.theme;
    return <Text style={[{...this.props.style}, {color: theme.textColor}]}>
      {this.props.children}
    </Text>;
  }
}

ThemedText.contextType = ThemeContext;
export default ThemedText;