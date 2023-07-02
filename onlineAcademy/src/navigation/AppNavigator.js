import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text, Image, StyleSheet, Button, Linking } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Frontend/Home';
import About from '../screens/Frontend/About';
import Contact from '../screens/Frontend/Contact';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Login from '../screens/Auth/Login';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList, } from '@react-navigation/drawer';
import image from '../../accests/images/logo.jpg'


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Logo = () => {
  return <Image width={40} height={40} style={styles.img} source={require('../../accests/images/logo.jpg')} />
}

const CustomDrawerContent=(props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{borderBottomWidth: 1, padding: 10, backgroundColor:'red'}}><Text style={{fontSize: 30, color: 'black'}}>Abc</Text>
      <Image source={image} style={{width:100, height: 70}}/>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
}


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{drawerStyle:{backgroundColor:"pink",} ,headerTitleAlign: 'center', drawerPosition:'left' }} drawerContent={(props) => <CustomDrawerContent {...props} />} >

        <Drawer.Screen name='Login' component={Login} options={{
          eaderTitle: () => <Logo />, headerTitleAlign: 'center',headerShown:false,tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="users" color={color} size={size} />
          ), tabBarBadge: 5,
        }} />
        <Drawer.Screen name='Home' component={Home} options={{
          headerTitle: () => <Logo />, headerTitleAlign: 'center', tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ), tabBarBadge: 5,  drawerIcon:({ focused ,color , size })=><FontAwesome5 name={focused ? "home" : "user"} color={color} size={size}/>
        }} />

        <Drawer.Screen name='About' component={About}
          options={{
            headerRight: () => <Button title='Btn' />,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user" color={color} size={size} />
            )
          }} />

        <Drawer.Screen name='Contact' component={Contact} options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="comment-dots" color={color} size={size} />
          )
        }} />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 40

  }
})