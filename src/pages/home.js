import React from 'react'
import {
  Image,
  StyleSheet,
} from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreens from './homepage'
import MyScreens from './my'

const Tab = createBottomTabNavigator();

export default function Home() {
  let props = {
    initialRouteName: "HomeTab",
  }

  let screenOptions = ({ route, navigation }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      // let iconName;
  
      // if (route.name === 'HomeTab') {
      //   iconName = focused
      //     ? 'ios-information-circle'
      //     : 'ios-information-circle-outline';
      // } else if (route.name === 'MyTab') {
      //   iconName = focused ? 'ios-list' : 'ios-list-outline';
      // }
     
      return <Image source={require('../images/tab_icons/ic_more_normal.png')} style={styles.tabIcon}/>
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  })

  return (
    <Tab.Navigator {...props} screenOptions={screenOptions}>
      <Tab.Screen name="HomeTab" component={HomeScreens} options={{ headerShown: false, tabBarBadge: 3, tabBarLabel: "Home" }} />
      <Tab.Screen name="MyTab" component={MyScreens} options={{ headerShown: false, tabBarLabel: "Setting" }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 40,
    height: 40,
  }
});
