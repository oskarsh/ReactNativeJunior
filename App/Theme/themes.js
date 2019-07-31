import React from "react";

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    btBackground: "green",
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    btBackground: "blue",
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);