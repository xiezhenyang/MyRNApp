'use strict'
import 'react-native-gesture-handler'
import React from 'react'
import {

} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TransitionSpecs } from '@react-navigation/stack'

import app from './App'

import Home from './pages/home'
import Auth from './pages/auth'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
      >
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}