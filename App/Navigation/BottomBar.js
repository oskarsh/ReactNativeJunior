import React, { Component } from "react";
import { createAppContainer, createStackNavigator, createBottomTabNavigator, BottomTabBar } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";


import { ThemeContext } from "../Theme/themes";

import DashboardStack from "../Navigation/DashboardStack"
import ProfileStack from "../Navigation/ProfileStack"

// class MainBottomNavigation extends Component {

//   // Hiding the Header for this Screen
//  static navigationOptions = {
//    header: "none"
//  }

//   createBar = (xnav, theme) => {
//     const AppNavigator = createMaterialBottomTabNavigator(
//       {
//         Dashboard: DashboardStack, 
//         Profile: ProfileStack,
//       },
//       {
//         // barStyle: styles.barStyle,
//         initialRouteName: "Dashboard",
//         defaultNavigationOptions: ({ navigation }) => ({
//           header: null,
//           barStyle: theme.barStyle,
//           tabBarIcon: ({ focused, horizontal, tintColor }) => {
//             const { routeName } = navigation.state;
//             let iconName;
//             if (routeName === "Dashboard") {
//               iconName = "ios-calendar";
//             } else if (routeName === "Profile") {
//               iconName = "ios-contact";
//             }
//             // You can return any component that you like here! We usually use an
//             // icon component from react-native-vector-icons
//             return (
//               <Ionicons
//                 name={iconName}
//                 size={horizontal ? 20 : 25}
//                 color={tintColor}
//               />
//             );
//           },
//         }),
//       },
//       {
//         headerMode: "none",
//         navigationOptions: {
//           headerVisible: false,
//         },
//       },
//     );
//     return AppNavigator;
//   };

//   render() {
//     const { navigation } = this.props;
//     const theme = this.context.theme;
//     const NavBar = this.createBar(navigation, theme);
//   return <NavBar screenProps={{theme: theme}}/>;
//   }
// }
// MainBottomNavigation.contextType = ThemeContext;
// export default MainBottomNavigation;

 
class TabBarComponent extends React.Component {

  static navigationOptions = ({ screenProps }) => {
    let currentTheme = screenProps;
    console.log(currentTheme)
  };

  render() {
    theme = this.context.theme;
    console.log(theme)
    return (
          <BottomTabBar
            {...this.props}
            activeTintColor="black"
            inactiveTintColor="white"
            style={{
              backgroundColor: theme.foreground,
            }}
          />
    );
  }
}

TabBarComponent.contextType = ThemeContext

export default createBottomTabNavigator(
  {
    Dashboard: DashboardStack,
    Profile: ProfileStack
  },
  {
    tabBarComponent: props =>
      <TabBarComponent
        {...props}
      />,
  },
);