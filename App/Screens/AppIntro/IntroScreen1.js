import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class IntroScreen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> IntroScreen1 </Text>
        <Button
          onPress={() => this.props.navigation.navigate("IntroScreen2")}
          title="Next"
          color="#841584"
          accessibilityLabel="This Button will Navigate you to the second intro screen"
        />
      </View>
    );
  }
}

export default IntroScreen1;
