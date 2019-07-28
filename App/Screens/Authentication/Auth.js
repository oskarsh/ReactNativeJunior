import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Button from "../../Components/Button/Button"
import theme, { styles } from 'react-native-theme';
import {light, dark } from "../../Theme/dark"
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
      <View style={{flex: 1}}>
        <Text style={themes.header}>Authentication</Text>
        <View style={{flex: 1, alignItems: 'center', margin:10 }}>
          <Image
          style={{width: 200, height: 200}}
          source={require('../../Assets/newspaper.svg')}
          />
        </View>
        <Button
          onPress={() => this.props.navigation.navigate("Login")}
          title={"Login"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("Registration")}
          title={"Register"}
        />
      </View>
    );
  }
}

export default Auth;
