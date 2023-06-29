import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Frontend/Home';
import About from '../screens/Frontend/About';
import Contact from '../screens/Frontend/Contact';
import Login from '../screens/Auth/Login'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function AppNavigation() {
    const Stack = createNativeStackNavigator()
    const Tab = createBottomTabNavigator()

    const LogoImage = () => {
        return <Image style={{ width: 30, height: 10 }} source={require('../../accests/images/image.jpg')} />
    }
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ headerTitleAlign: "", headerShown: true }}
            >
                <Tab.Screen name='Home' component={Home} options={{ tabBarIcon: ({ color, size }) => <FontAwesome5 name='home' color={color} size={size} />, tabBarBadge: 0, }} />

                <Tab.Screen name='About' component={About}
                    options={{ headerTitle: () => <LogoImage />, headerRight: () => <Button title='Logo' />,tabBarIcon:({size, color})=><FontAwesome5 name="user" size={size} color={color}/> }}

                />
                <Tab.Screen name='Contact' component={Contact}  options={{ tabBarIcon: ({ color, size }) => <FontAwesome5 name='comment' color={color} size={size} />}} />

                <Tab.Screen name='Login' component={Login}  options={{ tabBarIcon: ({ color, size }) => <FontAwesome5 name='users' color={color} size={size} />}} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}