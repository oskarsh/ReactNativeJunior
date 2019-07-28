import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles as themes } from "react-native-theme";

export default Button = (props) => {
  return (
    <TouchableOpacity {...props} style={[themes.button, themes.buttonColor]}> 
      <Text style={[themes.title, themes.textColor]}> {props.title} </Text>
    </TouchableOpacity>
  )
}


