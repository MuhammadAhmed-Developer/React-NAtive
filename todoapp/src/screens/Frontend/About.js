import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'

export default function About({navigation}) {
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.h1}>About page</Text>
      <Image style={styles.image} source={require('../../../accests/images/image.jpg')}/>
      <Button title='Go To Contact' color={'#aaaa'} onPress={()=>{navigation.navigate('Contact')}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    flexContainer:{
        display:'flex',
        alignItems:'center',
        backgroundColor:'purple',
        flex:1

    },
    h1:{
        fontSize:50,
        fontWeight:'bold'
      
    
    },
    image:{
         width:200,
         height:100,
         margin:50
         
         
    }
})