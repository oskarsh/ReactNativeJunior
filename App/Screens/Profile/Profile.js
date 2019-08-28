import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import { ThemeContext } from '../../Theme/themes';
import ThemedView from "../../Components/ThemedComponents/ThemedView"
import ThemedButton from "../../Components/ThemedComponents/ThemedButton"
import ThemedText from "../../Components/ThemedComponents/ThemedText"
import Feather from "react-native-vector-icons/Feather"
import { TouchableOpacity } from 'react-native-gesture-handler';
import ThemedHeader from '../../Components/ThemedComponents/ThemedHeader';

class Profile extends Component {

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
      <ThemedView style={{ flex: 1 }}>
        <SafeAreaView >
          <View style={{ flexDirection: "row", backgroundColor: "#dadfe0", height: 80, justifyContent: 'center', }}>
            <View style={{ justifyContent: 'center',}}>
              <ThemedHeader style={{  }}>Your Profile</ThemedHeader>
            </View>
            <View style={{flex: 1, justifyContent: 'center',}}>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Settings")}
                style={{ justifyContent: 'center', alignItems: "flex-end", }}>
                <Feather
                  name="settings"
                  size={30}
                  color="black"
                  style={{ margin: 10, alignSelf: "flex-end" }}
                />
              </TouchableOpacity>
            </View>

          </View>
        </SafeAreaView>
      </ThemedView>
    );
  }
}

Profile.contextType = ThemeContext;
export default Profile;
