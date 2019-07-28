import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from "../../../Components/Button/Button"


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate("App")}
          title="Sign In"
          accessibilityLabel="This Button will Log you for the App"
        />
      </View>
    );
  }
}

export default Login;
