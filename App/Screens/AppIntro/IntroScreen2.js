import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { styles as themes } from "react-native-theme";
import Button from "../../Components/Button/Button"

class IntroScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
       <View style={[themes.imgContainer, {flexGrow: 1,}]}>
            <Image
            style={themes.img}
            source={require('../../Assets/abstract-delivery.png')}
            />
        </View>
        <Text style={[themes.header, {flexGrow: 10,}]}>
          Don’t stop when you’re tired. Stop when you’re done.
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate("IntroScreen3")}
          title="Next"
          accessibilityLabel="This Button will Navigate you to the second intro screen"
        />
      </View>
    );
  }
}

export default IntroScreen2;
