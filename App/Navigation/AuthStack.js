import {createStackNavigator} from "react-navigation"

import Auth from "../Screens/Authentication/Auth"
import Login from "../Screens/Authentication/Login/Login"
import Registration from "../Screens/Authentication/Registration/Registration"


export default createStackNavigator(
  {
    AuthScreen: Auth,
    Login: Login,
    Registration: Registration
  },
  {
    initialRouteName: "AuthScreen",
  },
);