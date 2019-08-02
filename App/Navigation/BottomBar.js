import React, { Component } from "react";
import { createAppContainer, createStackNavigator, createBottomTabNavigator, BottomTabBar } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";


import { ThemeContext } from "../Theme/themes";

import DashboardStack from "../Navigation/DashboardStack"
import ProfileStack from "../Navigation/ProfileStack"

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
        tabBarLabel: "Dashboard",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-flame" size={30} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" size={30} color={tintColor} />
        )
      }
    },
  },
  
  {
    tabBarComponent: props =>
      <TabBarComponent
        {...props}
      />,
  },
);