import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Dashboard from "../Screens/Dashboard/Dashboard"
import Profile from "../Screens/Profile/Profile"
import { ThemeContext } from "../Theme/themes";

class MainBottomNavigation extends Component {

  // Hiding the Header for this Screen
  static navigationOptions = {
      header: null
 }

  constructor(props) {
    super(props);
  }

  createBar = (xnav, theme) => {
    const AppNavigator = createMaterialBottomTabNavigator(
      {
        Dashboard: {
          screen: () => <Dashboard navigation={xnav} />,
        },
        Profile: { screen: () => <Profile navigation={xnav} /> },
      },
      {
        // barStyle: styles.barStyle,
        initialRouteName: "Dashboard",
        defaultNavigationOptions: ({ navigation }) => ({
          header: null,
          barStyle: theme.barStyle,
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === "Dashboard") {
              iconName = "ios-calendar";
            } else if (routeName === "Profile") {
              iconName = "ios-contact";
            }
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return (
              <Ionicons
                name={iconName}
                size={horizontal ? 20 : 25}
                color={tintColor}
              />
            );
          },
        }),
      },
      {
        headerMode: "none",
        navigationOptions: {
          headerVisible: false,
        },
      },
    );
    return createAppContainer(AppNavigator);
  };

  render() {
    const { navigation } = this.props;
    const theme = this.context.theme;
    const NavBar = this.createBar(navigation, theme);
    return <NavBar />;
  }
}
MainBottomNavigation.contextType = ThemeContext;
export default MainBottomNavigation;
