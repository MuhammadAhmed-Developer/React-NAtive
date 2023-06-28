import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text,Image,Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Frontend/Home';
import About from '../screens/Frontend/About';
import Contact from '../screens/Frontend/Contact';
import Footer from '../screens/components/Footer';

export default function AppNavigator() {

    const LogoHeader = () =>{
        return <Image style={{width: 50, height:50}} source={require("../acessts/Images/logo.jpg")}/>
    }
    const Stack = createNativeStackNavigator() 

  return (
    <>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitleAlign:'center', headerShown: false}}>
            <Stack.Screen name='Home' component={Home} options={{headerTitle: ()=><LogoHeader/>, headerTitleAlign:'center'}}/>
            <Stack.Screen name='About' component={About} options={{headerRight: ()=><Button title='info' onPress={()=>{alert('info')}} />}}/>
            <Stack.Screen name='Contact' component={Contact}/>
        </Stack.Navigator>
        <Footer/>
    </NavigationContainer>
    </>
  )
}