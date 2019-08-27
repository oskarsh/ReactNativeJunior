import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from "../../Components/ThemedComponents/ThemedButton"
import { ThemeContext } from '../../Theme/themes';
import ThemedHeader from "../../Components/ThemedComponents/ThemedHeader"
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
      <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", backgroundColor: theme.background }}>
        <ThemedHeader>Abstraction</ThemedHeader>
        <View style={theme.imgContainer}>
          <Image
            style={theme.img}
            source={require('../../Assets/flame-6.png')}
          />
        </View>
        <View style={{width: "100%"}}>

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
