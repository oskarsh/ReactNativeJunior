import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import {ThemeContext, themes} from '../../Theme/themes';
import Button from "../../Components/ThemedComponents/ThemedButton"
import ThemedView from "../../Components/ThemedComponents/ThemedView"
import ThemedText from "../../Components/ThemedComponents/ThemedText"
import ThemedHeader from "../../Components/ThemedComponents/ThemedHeader"

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
    theme = this.context.theme;
    return (
      <ThemedView style={{flex: 1}}>
      <SafeAreaView >
        <ThemedHeader> Dashboard</ThemedHeader>
        <View style={[theme.imgContainer, {height: "100%", justifyContent: 'center'}]}>
            <Image
            style={[theme.img, {width: "50%"}]}
            source={require('../../Assets/flame-searching.png')}
            resizeMode="contain"
            />
        </View>
      </SafeAreaView>
      </ThemedView>
    );
  }
}

Dashboard.contextType = ThemeContext;
export default Dashboard;