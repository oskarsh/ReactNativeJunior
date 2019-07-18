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


const App = () => {
  return (
      <SafeAreaView>
         <AppContainer/>
      </SafeAreaView>
  );
};
export default App;
