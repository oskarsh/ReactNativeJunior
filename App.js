/**
 *
 * @format
 * @flow
 * 
 * This Component is used to wrap your whole Application inside a Provider of any Kind
 * A Provider could be:
 * - Redux State Provider
 * - Unstated State Provider
 * - Apollo (GraphQL) Provider
 * This is the highest order component
 *
 * In this Case we are wrapping the WHOLE Application inside a SafeAreaView which is used
 * to display our apps correctly on Notch Devices ( no clipping with NOTCH)
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import AppContainer from "./App/AppContainer";
import { ThemeContext, themes } from './App/Theme/themes';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
        <ThemeContext.Provider value={this.state}>
          <AppContainer screenProps={{ theme: this.state.theme }}/>
        </ThemeContext.Provider>
    )
  }
}

export default App;
