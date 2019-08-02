import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeContext } from '../../Theme/themes';
import ThemedView from "../../Components/ThemedComponents/ThemedView"
import ThemedButton from "../../Components/ThemedComponents/ThemedButton"
import ThemedText from "../../Components/ThemedComponents/ThemedText"


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
      <ThemedView style={{ flex: 1 }}>
        <SafeAreaView >
          <ThemedText> Profile </ThemedText>
          <ThemedButton
          title="Settings"
          onPress={() => this.props.navigation.navigate("Settings")}
          ></ThemedButton>
        </SafeAreaView>
      </ThemedView>
    );
  }
}

Profile.contextType = ThemeContext;
export default Profile;
