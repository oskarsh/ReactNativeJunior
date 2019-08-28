import React, { Component } from "react";
import { createAppContainer, createStackNavigator, createBottomTabNavigator, BottomTabBar } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Feather from "react-native-vector-icons/Feather"
import { ThemeContext } from "../Theme/themes";
import DashboardStack from "../Navigation/DashboardStack"
import ProfileStack from "../Navigation/ProfileStack"
import Profile from "../Screens/Profile/Profile"

class TabBarComponent extends React.Component {

  render() {
    theme = this.context.theme;
    
    return (
      <BottomTabBar
        {...this.props}
        activeTintColor={theme.tabBarActiveTintColor}
        inactiveTintColor={theme.tabBarInactiveTintColor}
        style={{
          backgroundColor: theme.tabBarBackgroundColor,
        }}
      />
    );
  }
}
TabBarComponent.contextType = ThemeContext

export default createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardStack,
      navigationOptions: {
        // tabBarLabel: "Dashboard",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="home" size={30} color={tintColor} />
        ),
      }
    },
    Profile: {
      screen: Profile,
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
        // tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="user" size={30} color={tintColor} />
        )

      }
    },
  },
  {
    tabBarComponent: props =>
      <TabBarComponent
        {...props}
      />,
    tabBarOptions: {
      showLabel: false
    },

  },
);