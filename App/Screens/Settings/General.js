import React, { Component } from 'react';
import { View } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import { ThemeContext } from '../../Theme/themes';
import ThemedButton from "../../Components/ThemedComponents/ThemedButton"
import ThemedView from "../../Components/ThemedComponents/ThemedView"
import ThemedText from "../../Components/ThemedComponents/ThemedText"


class General extends Component {

  static navigationOptions = ({ screenProps }) => {
    let theme = screenProps.theme
    return {
      title: 'General',
      headerTintColor: theme.foreground,
      headerStyle: { backgroundColor: theme.background},
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      switchOn: false,
    };
  }

  onPress = () => {
  }

  render() {
    theme = this.context.theme;
    return (
      <ThemedView style={{ flex: 1}}>
        <View style={{ flex: 1, flexDirection: "row", height: 50 }}>
          <View style={{ flex: 1, flexGrow: 2, alignItems: 'center', padding: 5 }}>
            <ThemedText>Toggle Theme</ThemedText>
          </View>
          <View style={{ flex: 1, alignItems: 'center', padding: 5 }}>
            <ThemeContext.Consumer>
              {({ theme, toggleTheme }) => (
                <ThemedButton
                  title="toggle theme"
                  onPress={toggleTheme}
                />
              )}
            </ThemeContext.Consumer>
          </View>
        </View>
      </ThemedView>
    );
  }
}

General.contextType = ThemeContext;
export default General;
