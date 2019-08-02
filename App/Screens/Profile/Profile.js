import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../../Theme/themes';
import Button from "../../Components/Button/Button"

class Profile extends Component {

  // Hiding the Header for this Screen
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    theme = this.context.theme;
    return (
      <View style={{flex: 1, backgroundColor: theme.background}}>
        <Text> Profile </Text>
        <Button
          onPress={() => this.props.navigation.navigate("Settings")}
          title="Settings"
          color="#841584"
          accessibilityLabel="This Button will Log you for the App"
        />
      </View>
    );
  }
}

Profile.contextType = ThemeContext;
export default Profile;
