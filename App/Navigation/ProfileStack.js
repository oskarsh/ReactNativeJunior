import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Profile from "../Screens/Profile/Profile"
import SettingsStack from "../Screens/Settings/Settings"
import { ThemeContext } from '../Theme/themes';
import General from "../Screens/Settings/General";
import About from "../Screens/Settings/About";
import PrivacyPolicy from "../Screens/Settings/PrivacyPolicy";
import Help from "../Screens/Settings/Help";
import Settings from "../Screens/Settings/Settings";

export default createStackNavigator({
  Profile: Profile,
  Settings: SettingsStack,
  General: General,
  About: About,
  PrivacyPolicy: PrivacyPolicy,
  Help: Help,
},
{
  initialRouteName: "Profile"
})
