import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
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

export default Profile;
