import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.head} >Home</Text>
      <Image style={styles.img} source={{ uri: 'https://www.reactnative.express/static/logo.png' }}/>
      <Button title='Go To About' color={'blue'} onPress={()=>{navigation.navigate('About')}}/>
      <FontAwesome5 name='home'  color='green' size={70 }/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        textAlign:'center',
        padding: 10,
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
     },
     head:{
        fontSize: 70,
        fontWeight: 'bold'

    },
    img:{
        width: 70,
        height: 70
    }
})
