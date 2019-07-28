import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default Button = (props) => {
  return (
    <TouchableOpacity {...props} style={{}}> 
    <Text> {props.title} </Text>
    </TouchableOpacity>
  )
}


