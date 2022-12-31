import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Auth from './src/component/Route/Auth';
import StackLogin from './src/component/Route/Stack-Login.js/StackLogin';
import ValidRegister from './src/component/screens/ValidRegister';
import Screen1 from './src/component/screens/Screen1';
import { GetAsyncStorage } from './src/AsyncStorage/AsyncStorage-Get';

import { useEffect,useState } from "react"
import Router from './src/component/Route/Auth';



function App() {




  return (
    <NavigationContainer>
     {/* <Auth /> */}
      <StackLogin /> 

    </NavigationContainer>
  );
}
export default App