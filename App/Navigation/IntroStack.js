import { createSwitchNavigator } from "react-navigation"

import IntroScreen1 from "../Screens/AppIntro/IntroScreen1"
import IntroScreen2 from "../Screens/AppIntro/IntroScreen2"
import IntroScreen3 from "../Screens/AppIntro/IntroScreen3"

export default createSwitchNavigator(
  {
    IntroScreen1: IntroScreen1,
    IntroScreen2: IntroScreen2,
    IntroScreen3: IntroScreen3,
  },
  { initialRouteName: "IntroScreen1" },
);