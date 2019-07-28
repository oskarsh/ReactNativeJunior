import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Dashboard extends Component {

  // Hiding the Header for this Screen
  static navigationOptions = {
         header: null
    }
    

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Dashboard </Text>
      </View>
    );
  }
}

export default Dashboard;
