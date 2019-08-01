import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Dashboard from "../Screens/Dashboard/Dashboard"
import { ThemeContext } from '../Theme/themes';

export default createStackNavigator({
  Dashboard: Dashboard,
})
