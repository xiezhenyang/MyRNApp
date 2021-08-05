import * as React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from './main'

const Stack = createNativeStackNavigator();

export default function Navigaion() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main}/>
    </Stack.Navigator>
  )
}