import React from 'react';
import { Text } from 'react-native';
import { ThemeContext } from "../../Theme/themes"

class ThemedText extends React.Component {
  render() {
    theme = this.context.theme;
    return <Text style={[{...this.props.style},{fontSize: 18, color: theme.textColor, fontFamily: "Lato-Regular"}]}>
      {this.props.children}
    </Text>;
  }
}

ThemedText.contextType = ThemeContext;
export default ThemedText;