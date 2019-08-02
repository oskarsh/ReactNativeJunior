import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from "../../Components/Button/Button"
import { ThemeContext } from '../../Theme/themes';

class Auth extends React.Component {

  // Hiding the Header for this Screen
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    theme = this.context.theme;
    return (
      <View style={{ flex: 1, justifyContent: "space-around", backgroundColor: theme.background }}>
        <Text style={theme.header}>Abstraction</Text>
        <View style={theme.imgContainer}>
          <Image
            style={theme.img}
            source={require('../../Assets/abstract1.png')}
          />
        </View>
        <View>

          <Button
            onPress={() => this.props.navigation.navigate("Login")}
            title={"Login"}
          />
          <Button
            onPress={() => this.props.navigation.navigate("Registration")}
            title={"Register"}
          />
        </View>
      </View>
    );
  }
}

Auth.contextType = ThemeContext;
export default Auth;
