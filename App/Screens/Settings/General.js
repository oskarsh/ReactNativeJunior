import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import { light, dark } from "../../Theme/theme";
import theme, { styles as themes } from "react-native-theme";
class General extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switchOn: false,
    }; }
    
  onPress = () => {
    this.setState({ switchOn: !this.state.switchOn });
    theme.add(dark);
    theme.active("dark")
    console.log(contextType);
    console.log("hello")
    this.forceUpdate();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: themes.b100.color }}>
        <View style={{ flex: 1, flexDirection: "row", height: 50 }}>
          <View style={{ flex: 1, flexGrow: 2, alignItems: 'center', padding: 5 }}>
            <Text>Toggle Theme</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', padding: 5 }}>
            <SwitchToggle
              switchOn={this.state.switchOn}
              onPress={this.onPress}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default General;
