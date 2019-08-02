import React from 'react';
import { Text, View } from 'react-native';
import { ThemeContext } from "../../Theme/themes"

class ThemedView extends React.Component {
  render() {
    theme = this.context.theme;
    return <View style={[{...this.props.style}, {backgroundColor: theme.background}]}>
      {this.props.children}
    </View>;
  }
}

ThemedView.contextType = ThemeContext;
export default ThemedView;