/**
 * This renders the Navigation for the whole App
 * You would visit this file if you would like to add a new screen
 * 
 */
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from "react-navigation";

import MainBottomNavigation from "./Navigation/BottomBar"
import AppStack from "./Navigation/AppStack";
import AuthLoading from "./Screens/Authentication/AuthLoading";
import Auth from "./Screens/Authentication/Auth";
import SplashScreen from "./Screens/Splash/SplashScreen";
import Login from "./Screens/Authentication/Login/Login"
import Registration from "./Screens/Authentication/Registration/Registration"
import IntroStack from "./Navigation/IntroStack"
import ProfileStack from "./Navigation/ProfileStack";
import AuthStack from "./Navigation/AuthStack";



export default createAppContainer(
  createSwitchNavigator(
    {
      IntroStack: IntroStack,
      App: AppStack,
      AuthLoading: AuthLoading,
      Auth: AuthStack,
      Splash: SplashScreen,
      Profile: ProfileStack,
    },
    {
      //TESTING ONLY INITAL ROUTE SHOULD BE AUTHLOADING
      initialRouteName: "AuthLoading",
    },
  ),
);

