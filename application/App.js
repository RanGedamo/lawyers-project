<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 217666ab (server)
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
=======
<<<<<<< HEAD
=======
>>>>>>> 06b8cbbe (app)
=======
>>>>>>> 217666ab (server)
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
<<<<<<< HEAD
<<<<<<< HEAD
=======
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
>>>>>>> f9a7299b (src)

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
<<<<<<< HEAD
=======
=======
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
>>>>>>> f9a7299b (src)

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
<<<<<<< HEAD
>>>>>>> 06b8cbbe (app)
=======

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
>>>>>>> 217666ab (server)
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 06b8cbbe (app)
=======
}
export default App
>>>>>>> f9a7299b (src)
=======
>>>>>>> 06b8cbbe (app)
=======
}
export default App
>>>>>>> f9a7299b (src)
=======
>>>>>>> 06b8cbbe (app)
>>>>>>> 217666ab (server)
