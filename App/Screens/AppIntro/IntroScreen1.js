import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles as themes } from "react-native-theme";
import Button from "../../Components/Button/Button"

class IntroScreen1 extends Component {
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
            source={require('../../Assets/abstract1.png')}
            />
        </View>
        <Text style={[themes.header, {flexGrow: 10,}]}>
          Your limitation—it’s only your imagination.
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate("IntroScreen2")}
          title="Next"
          accessibilityLabel="This Button will Navigate you to the second intro screen"
        />
      </View>
    );
  }
}

export default IntroScreen1;
