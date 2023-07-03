import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Frontend/Home';
import Products from '../screens/Frontend/Products';


// const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Products' component={Products}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}