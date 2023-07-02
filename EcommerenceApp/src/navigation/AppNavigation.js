import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Frontend/Home';
import Products from '../screens/Frontend/Products';


const Stack = createNativeStackNavigator()
export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Products' component={Products}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}