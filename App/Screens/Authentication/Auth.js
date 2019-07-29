import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Button from "../../Components/Button/Button"
import { styles as themes } from "react-native-theme";

class Auth extends Component {

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
    return (
      <View style={{flex: 1, justifyContent: "space-around"}}>
        <Text style={themes.header}>Abstraction</Text>
        <View style={themes.imgContainer}>
            <Image
            style={themes.img}
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

export default Auth;
