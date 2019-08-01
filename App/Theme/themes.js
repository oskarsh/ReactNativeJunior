import React from "react";
import _ from "lodash";
import t from "tcomb-form-native"


const colors = {
  primary: "#4960de",
  success: "#2aebbf",
  info: "#00ecff",
  custom: "#f8a4d8",
  warning: "#ffee59",
  lPrimary: "#dfedff",
  lSuccess: "#d2f4ed",
  lInfo: "#d6f4f7",
  lCustom: "#fbe6ff",
  lWarning: "#f8f5d5",
  white60: "#a1a1a7",
  white70: "#b9b8be",
  white80: "#d0d0d3",
  white90: "#e8e7e9",
  white100: "#fff",
  dark60: "#73727c",
  dark70: "#525255",
  dark80: "#3a3a3d",
  dark90: "#282828",
  dark100: "#151425",
  whiteBackground: "#fff",
  darkBackground: "#222",
  purple: "#918dfd",
  darkPurple: "#191847",
  gray: "#AAAAAA",
};

const defaults = {
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
    foreground: '#000000',
    background: '#C3B7ED',
    b60: { color: colors.white60 },
    b70: { color: colors.white70 },
    b80: { color: colors.white80 },
    b90: { color: colors.white90 },
    b100: { color: colors.white100 },
    textColor: { color: colors.dark100 },
    iconColor: { color: colors.dark100 },
    buttonColor: { backgroundColor: colors.primary },
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
    barStyle: {
      backgroundColor: colors.whiteBackground,
      width: "100%",
      alignSelf: "center",
      shadowOpacity: 0,
      alignItems: "center",
      alignSelf: "center",
      paddingLeft: "9%",
      paddingRight: "9%",
    },
  },


  // ------- IMPLEMENT YOUR DARK THEME HERE ---------
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    b60: { color: colors.white60 },
    b70: { color: colors.white70 },
    b80: { color: colors.white80 },
    b90: { color: colors.white90 },
    b100: { color: colors.white100 },
    textColor: { color: colors.dark100 },
    iconColor: { color: colors.dark100 },
    buttonColor: { backgroundColor: colors.primary },
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
    barStyle: {
      backgroundColor: colors.darkBackground,
      width: "100%",
      alignSelf: "center",
      shadowOpacity: 0,
      alignItems: "center",
      alignSelf: "center",
      paddingLeft: "9%",
      paddingRight: "9%",
    },
  },
};

// TCOMB THEME
let formStyle = _.cloneDeep(t.form.Form.stylesheet);
formStyle.textbox.normal.color = "#444";
formStyle.textbox.normal.height = 55;
formStyle.textbox.normal.borderWidth = 0;
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
