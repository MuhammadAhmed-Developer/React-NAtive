import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text} >Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor: 'green',
        padding: 10,
    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 30
    }
})