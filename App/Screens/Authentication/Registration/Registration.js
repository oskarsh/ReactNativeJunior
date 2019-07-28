import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from "../../../Components/Button/Button"

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Register',
  };

  render() {
    return (
      <View>
        <Text> Registration </Text>
        <Button
          onPress={() => this.props.navigation.navigate("IntroStack")}
          title="Register"
          accessibilityLabel="This Button will Log you for the App"
        />
      </View>
    );
  }
}

export default Registration;
