import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Button from "../../Components/Button/Button"
import { ThemeContext } from '../../Theme/themes';

class IntroScreen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    theme = this.context.theme;
    return (
      <View style={{flex: 1}}>
       <View style={[theme.imgContainer, {flexGrow: 1,}]}>
            <Image
            style={theme.img}
            source={require('../../Assets/abstract1.png')}
            />
        </View>
        <Text style={[theme.header, {flexGrow: 10,}]}>
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

IntroScreen1.contextType = ThemeContext;
export default IntroScreen1;
