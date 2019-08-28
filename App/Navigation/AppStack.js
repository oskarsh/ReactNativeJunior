import {createStackNavigator} from "react-navigation"
import MainBottomNavigation from "./BottomBar";
import SettingsStack from "../Screens/Settings/Settings";

export default createStackNavigator(
  {
    App: {
      screen: MainBottomNavigation,
      navigationOptions: {
        header: null,
      },
    },
    Settings: SettingsStack
  },
  {
    initialRouteName: "App",
    headerMode: 'screen'
  },
);