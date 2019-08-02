import React from 'react';
import { Text } from 'react-native';
import { ThemeContext } from "../../Theme/themes"
import ThemedText from "./ThemedText"

class ThemedHeader extends React.Component {
  render() {
    theme = this.context.theme;
    return <Text style={[{...this.props.style}, {color: theme.textColor}, theme.header]}>
      {this.props.children}
    </Text>;
  }
}

ThemedHeader.contextType = ThemeContext;
export default ThemedHeader;