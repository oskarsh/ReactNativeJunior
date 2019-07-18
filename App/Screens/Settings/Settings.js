import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Settings </Text>
        <Button
          onPress={() => this.props.navigation.navigate("General")}
          title="General"
          color="#841584"
          accessibilityLabel="This Button will Log you for the App"
        />
        <Button
          onPress={() => this.props.navigation.navigate("About")}
          title="About"
          color="#841584"
          accessibilityLabel="This Button will Log you for the App"
        />
        <Button
          onPress={() => this.props.navigation.navigate("Help")}
          title="Help"
          color="#841584"
          accessibilityLabel="This Button will Log you for the App"
        />
        <Button
          onPress={() => this.props.navigation.navigate("PrivacyPolicy")}
          title="Privacy Policy"
          color="#841584"
          accessibilityLabel="This Button will Log you for the App"
        />
        <Button
          onPress={() => this.props.navigation.navigate("Auth")}
          title="Logout"
          color="#841584"
          accessibilityLabel="This Button will Log you for the App"
        />
      </View>
    );
  }
}

export default Settings;
