import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Frontend/Home';
import About from '../screens/Frontend/About';
import Contact from '../screens/Frontend/Contact';



export default function AppNavigation() {
    const Stack = createNativeStackNavigator()

    const LogoImage = () => {
        return <Image style={{ width: 30, height: 10 }} source={require('../../accests/images/image.jpg')} />
    }
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTitleAlign: "center", headerShown: false}}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='About' component={About} options={{ headerTitle: () => <LogoImage />, headerRight: () => <Button title='Logo' /> }} />
                <Stack.Screen name='Contact' component={Contact} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}