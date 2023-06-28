import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Contact({navigation}) {
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.h1}>Contact page</Text>
      <Button title='Go Back' color={'green'} onPress={()=>{navigation.goBack()}}/>
      {/* <br/> */}
      <Button title='Go To Home' color={'green'} onPress={()=>{navigation.navigate('Home')}}/>
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
        fontWeight:'bold',
        marginBottom: 40
        
      
    
    }
})