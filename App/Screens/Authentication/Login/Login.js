import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Login </Text>
        <Button
          onPress={() => this.props.navigation.navigate("App")}
          title="Sign In"
          color="#841584"
          accessibilityLabel="This Button will Log you for the App"
        />
      </View>
    );
  }
}

export default Login;
