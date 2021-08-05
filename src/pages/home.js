import React from 'react'
import {

} from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreens from './homepage'
import MyScreens from './my'

const Tab = createBottomTabNavigator();

export default function Home() {
  let props = {
    initialRouteName: "HomeTab",
  }

  return (
    <Tab.Navigator {...props}>
      <Tab.Screen name="HomeTab" component={HomeScreens}/>
      <Tab.Screen name="MyTab" component={MyScreens}/>
    </Tab.Navigator>
  )
}
