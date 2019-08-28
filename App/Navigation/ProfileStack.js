import { createStackNavigator } from 'react-navigation'
import Profile from "../Screens/Profile/Profile"

export default createStackNavigator({
  Profile: Profile,
},
{
  initialRouteName: "Profile"
})
