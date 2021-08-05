import * as React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './login'

const Stack = createNativeStackNavigator();

export default function Navigaion() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}