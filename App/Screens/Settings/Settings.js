import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { ThemeContext } from '../../Theme/themes';

class Settings extends Component {

  static navigationOptions = ({ screenProps }) => {
    let theme = screenProps.theme
    return {
      title: 'Settings',
      headerTintColor: theme.foreground,
      headerStyle: { backgroundColor: theme.background},
    };
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: theme.background}}>
       <View style={[theme.imgContainer, {flexGrow: 1,}]}>
            <Image
            style={theme.img}
            source={require('../../Assets/abstract-success.png')}
            />
        </View>
        <Button
          onPress={() => this.props.navigation.push("General")}
          title="General"
         style={{margin: 5}}

          accessibilityLabel="This Button will Log you for the App"
        />
        <Button
          onPress={() => this.props.navigation.navigate("About")}
          title="About"
          style={{margin: 5}}

          accessibilityLabel="This Button will Log you for the App"
        />
        <Button
          onPress={() => this.props.navigation.navigate("Help")}
          title="Help"
          style={{margin: 5}}

          accessibilityLabel="This Button will Log you for the App"
        />
        <Button
          onPress={() => this.props.navigation.navigate("PrivacyPolicy")}
          title="Privacy Policy"
          style={{margin: 5}}
          accessibilityLabel="This Button will Log you for the App"
        />
        <Button
          onPress={() => this.props.navigation.navigate("Auth")}
          title="Logout"
          style={{margin: 5}}
          accessibilityLabel="This Button will Log you for the App"
        />
      </View>
    );
  }
}

Settings.contextType = ThemeContext;
export default Settings;
