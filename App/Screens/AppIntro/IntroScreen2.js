import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class IntroScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> IntroScreen2 </Text>
        <Button
          onPress={() => this.props.navigation.navigate("IntroScreen3")}
          title="Next"
          color="#841584"
          accessibilityLabel="This Button will Navigate you to intro screen 3"
        />
      </View>
    );
  }
}

export default IntroScreen2;
