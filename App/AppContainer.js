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
import Dashboard from "./Screens/Dashboard/Dashboard"
import Profile from "./Screens/Profile/Profile"
import Settings from "./Screens/Settings/Settings"
import General from "./Screens/Settings/General"
import About from "./Screens/Settings/About"
import Help from "./Screens/Settings/Help"
import PrivacyPolicy from "./Screens/Settings/PrivacyPolicy"


const AppIntroStack = createSwitchNavigator(
  {
    IntroScreen1: IntroScreen1,
    IntroScreen2: IntroScreen2,
    IntroScreen3: IntroScreen3,
  },
  { initialRouteName: "IntroScreen1" },
);

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

const SettingsStack = createStackNavigator(
  {
    General: General,
    About: About,
    PrivacyPolicy: PrivacyPolicy,
    Help: Help,
  },
  {
    headerMode: "none",
  }
)

const AppStack = createStackNavigator(
  {
    Dashboard: MainBottomNavigation,
    Settings: Settings,
    _settings: SettingsStack
  },
)

export default createAppContainer(
  createSwitchNavigator(
    {
      IntroStack: AppIntroStack,
      App: AppStack,
      AuthLoading: AuthLoading,
      Auth: AuthStack,
      Splash: SplashScreen,
      _hiddenSettings: SettingsStack
    },
    {
      //TESTING ONLY INITAL ROUTE SHOULD BE AUTHLOADING
      initialRouteName: "AuthLoading",
    },
  ),
);

