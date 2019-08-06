import React from "react";
import _ from "lodash";
import t from "tcomb-form-native"

const defaults = {

  primary: "#ff3a00",
  success: "#2aebbf",
  info: "#00ecff",
  warning: "#ffee59",
  lPrimary: "#dfedff",
  lSuccess: "#d2f4ed",
  lInfo: "#d6f4f7",
  lCustom: "#fbe6ff",
  lWarning: "#f8f5d5",
  purple: "#918dfd",
  darkPurple: "#191847",

  button: {
    borderRadius: 10,
    width: "80%",
    height: 50,
    justifyContent: 'center',
    alignSelf: "center",
    margin: 10,
  },
  buttonTitle: {
    fontSize: 20,
    textAlign: "center"
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    width: "90%",
    margin: 10,
  },
  img: {
    width: "80%",
    borderRadius: 10,
    height: 200,
    marginBottom: 20,
    padding:10,
  },
  // Adds shadow to the image, sinde Image itself cannot display shadow but a view can
  imgContainer: {
    alignItems: 'center', margin: 10, shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    justifyContent: 'center',
    paddingBottom: 75,
  },
}

export const themes = {
  // ------- IMPLEMENT YOUR DARK THEME HERE ---------
  light: {
    foreground: 'black',
    background: '#fffdff',
    tabBarActiveTintColor: "#373737",
    tabBarInactiveTintColor: "#c0c9d6",
    tabBarBackgroundColor: "#fffdff",
    textColor: "black",
    iconColor: '#C3B7ED',
    buttonColor: { backgroundColor: defaults.primary },
    // setting the defaults
    button: defaults.button,
    header: defaults.header,
    title: defaults.buttonTitle,
    titleColor: { color: "#fffdff" },
    img: defaults.img,
    imgContainer: defaults.imgContainer,
    textNormal: {
      paddingTop: 5,
      paddingBottom: 10,
    },
  },


  // ------- IMPLEMENT YOUR DARK THEME HERE ---------
  dark: {
    foreground: 'white',
    background: '#222222',
    tabBarActiveTintColor: "#1da2ff",
    tabBarInactiveTintColor: "#57668d",
    tabBarBackgroundColor: "#161f35",
    textColor: "white",
    titleColor: { color: "white" },
    iconColor: { color: "white"},
    buttonColor: { backgroundColor: defaults.primary },
    // setting the defaults
    button: defaults.button,
    header: defaults.header,
    title: defaults.buttonTitle,
    img: defaults.img,
    imgContainer: defaults.imgContainer,
    textNormal: {
      paddingTop: 5,
      paddingBottom: 10,
    },
// barStyle: { //   backgroundColor: "#", //   width: "100%", //   alignSelf: "center", //   shadowOpacity: 0, //   alignItems: "center", //   alignSelf: "center",
       //   paddingLeft: "9%",
    //   paddingRight: "9%",
    // },
  },
};

// TCOMB THEME
let formStyle = _.cloneDeep(t.form.Form.stylesheet);
formStyle.textbox.normal.color= "#444";
formStyle.textbox.normal.height = 55; formStyle.textbox.normal.borderWidth = 0;
formStyle.textbox.error.borderWidth = 0;
formStyle.textboxView.normal.borderWidth = 0;
formStyle.textboxView.error.borderWidth = 0;
formStyle.textboxView.normal.borderRadius = 0;
formStyle.textboxView.error.borderRadius = 0;
formStyle.textboxView.normal.borderBottomWidth = 1;
formStyle.textboxView.normal.borderColor = "#BBBBBB";
formStyle.textboxView.error.borderBottomWidth = 1;
formStyle.textboxView.normal.marginBottom = 5;
formStyle.textboxView.error.marginBottom = 5;
export { formStyle } 

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});
