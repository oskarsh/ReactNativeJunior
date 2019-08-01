import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import { light, dark } from "../../Theme/theme";
// import theme, { styles as themes } from "react-native-theme";
import { ThemeContext } from '../../Theme/themes';
import Button from "../../Components/Button/Button"

class General extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switchOn: false,
    };
  }

  onPress = () => {

  }

  render() {
    return (
      <View style={{ flex: 1, }}>
        <View style={{ flex: 1, flexDirection: "row", height: 50 }}>
          <View style={{ flex: 1, flexGrow: 2, alignItems: 'center', padding: 5 }}>
            <Text>Toggle Theme</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', padding: 5 }}>
            <ThemeContext.Consumer>
              {({ theme, toggleTheme }) => (
                <Button
                  title="toggle theme"
                  onPress={toggleTheme}
                />
              )}
            </ThemeContext.Consumer>
          </View>
        </View>
      </View>
    );
  }
}

export default General;
