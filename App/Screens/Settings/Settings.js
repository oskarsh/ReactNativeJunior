import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { ThemeContext } from '../../Theme/themes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from "../../Components/ThemedComponents/ThemedButton";
import Text from "../../Components/ThemedComponents/ThemedText";


class Settings extends Component {

  static navigationOptions = ({ screenProps }) => {
    let theme = screenProps.theme
    return {
      title: 'Settings',
      headerTintColor: theme.foreground,
      headerStyle: { backgroundColor: theme.background },
    };
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  ListItem = (item, route) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.push()}
        style={{ height: 50, margin: 5, justifyContent: "center", paddingLeft: 5 }}
      >
        <Text>{item}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flex: 1,}}>
        {this.ListItem("General", "General")}
        {this.ListItem("About", "About")}
        {this.ListItem("Help", "Help")}
        {this.ListItem("Privacy Policy", "PrivacyPolicy")}
        <View style={{flex: 1, justifyContent: "flex-end", marginBottom: 15}}>
          <Button
            onPress={() => this.props.navigation.navigate("Auth")}
            title="Logout"
            style={{ margin: 5, alignSelf: 'flex-end', }}
            accessibilityLabel="This Button will Log you for the App"
          />
        </View>

      </View>
    );
  }
}

Settings.contextType = ThemeContext;
export default Settings;
