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
import IntroScreen1 from "./Screens/AppIntro/IntroScreen1";
import IntroScreen2 from "./Screens/AppIntro/IntroScreen2";
import IntroScreen3 from "./Screens/AppIntro/IntroScreen3";
import AuthLoading from "./Screens/Authentication/AuthLoading";
import Auth from "./Screens/Authentication/Auth";
import SplashScreen from "./Screens/Splash/SplashScreen";
import Login from "./Screens/Authentication/Login/Login"
import Registration from "./Screens/Authentication/Registration/Registration"
import IntroStack from "./Navigation/IntroStack"
import ProfileStack from "./Navigation/ProfileStack";


const AuthStack = createStackNavigator(
  {
    AuthScreen: Auth,
    Login: Login,
    Registration: Registration
  },
  {
    initialRouteName: "AuthScreen",
  },
);


export default createAppContainer(
  createSwitchNavigator(
    {
      IntroStack: IntroStack,
      App: MainBottomNavigation,
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

