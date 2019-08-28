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

import AppStack from "./Navigation/AppStack";
import AuthLoading from "./Screens/Authentication/AuthLoading";
import SplashScreen from "./Screens/Splash/SplashScreen";
import ProfileStack from "./Navigation/ProfileStack";
import AuthStack from "./Navigation/AuthStack";
import AppIntro from "./Screens/AppIntro/AppIntro";


export default createAppContainer(
  createSwitchNavigator(
    {
      IntroStack: AppIntro,
      App: AppStack,
      AuthLoading: AuthLoading,
      Auth: AuthStack,
      Splash: SplashScreen,
      Profile: ProfileStack,
    },
    {
      //TESTING ONLY INITAL ROUTE SHOULD BE AUTHLOADING
      initialRouteName: "App",
    },
  ),
);

