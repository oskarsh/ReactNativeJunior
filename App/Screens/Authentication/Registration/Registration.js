import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Registration </Text>
        <Button
          onPress={() => this.props.navigation.navigate("IntroStack")}
          title="Register"
          color="#841584"
          accessibilityLabel="This Button will Log you for the App"
        />
      </View>
    );
  }
}

export default Registration;
