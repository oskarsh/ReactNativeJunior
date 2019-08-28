import {createStackNavigator} from "react-navigation"
import MainBottomNavigation from "./BottomBar";
import Settings from "../Screens/Settings/Settings";
import General from "../Screens/Settings/General";
import About from "../Screens/Settings/About";
import PrivacyPolicy from "../Screens/Settings/PrivacyPolicy";
import Help from "../Screens/Settings/Help";
export default createStackNavigator(
  {
    App: {
      screen: MainBottomNavigation,
      navigationOptions: {
        header: null,
      },
    },
    Settings: Settings,
    General: General,
    About: About,
    PrivacyPolicy: PrivacyPolicy,
    Help: Help,

  },
  {
    initialRouteName: "App",
    headerMode: 'screen'
  },
);