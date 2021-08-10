import * as React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from './main'
import MyInput from './myinput'

const Stack = createNativeStackNavigator();

export default function Navigaion() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main}/>
      <Stack.Screen name="MyInput" component={MyInput}/>
    </Stack.Navigator>
  )
}