import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Button from "../../Components/Button/Button"
import { ThemeContext } from '../../Theme/themes';

class IntroScreen3 extends Component {
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
            source={require('../../Assets/abstract-success.png')}
            />
        </View>
        <Text style={[theme.header, {flexGrow: 10,}]}>
        Wake up with determination. Go to bed with satisfaction.
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate("App")}
          title="Explore the App"
          accessibilityLabel="This Button will Navigate you to the second intro screen"
        />
      </View>
    );
  }
}

IntroScreen3.contextType = ThemeContext;
export default IntroScreen3;

