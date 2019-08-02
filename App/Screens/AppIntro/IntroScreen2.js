import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Button from "../../Components/Button/Button"
import { ThemeContext } from '../../Theme/themes';

class IntroScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    theme = this.context.theme;
    return (
      <View style={{flex: 1, backgroundColor: theme.background}}>
       <View style={[theme.imgContainer, {flexGrow: 1,}]}>
            <Image
            style={theme.img}
            source={require('../../Assets/abstract-delivery.png')}
            />
        </View>
        <Text style={[theme.header, {flexGrow: 10,}]}>
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

IntroScreen2.contextType = ThemeContext;
export default IntroScreen2;
