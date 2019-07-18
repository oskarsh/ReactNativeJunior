import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <View>
        <Text> Auth </Text>
        <Button
          onPress={() => this.props.navigation.navigate("Login")}
          title="Login"
          color="#841584"
          accessibilityLabel="This Button will bring you to the Login Screen"
        />
        <Button
          onPress={() => this.props.navigation.navigate("Registration")}
          title="Register"
          color="#841584"
          accessibilityLabel="This Button will bring you to the Registration Screen"
        />
      </View>
    );
  }
}

export default Auth;
