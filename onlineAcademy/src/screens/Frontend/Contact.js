import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.head} >Contact</Text>
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

    }
})
