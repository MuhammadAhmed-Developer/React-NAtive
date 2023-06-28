import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.flexContainer}>
      <View style={[styles.box, styles.flexCenter]}>
        <Text>Home</Text>
      </View>
      <Text style={styles.heading}>Home</Text>
      <View><Button title='Go To About' onPress={()=>{navigation.navigate('About')}}/></View>
    </View>
  )
}

const styles = StyleSheet.create({

  flexContainer: {
    backgroundColor: 'blue',
    flex: 1,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
 },
 box:{
   width: 200,
   height: 200,
   backgroundColor: 'green',
   borderRadius: 100,
   borderColor:'red',
   borderWidth : 2
 },
 flexCenter:{
   justifyContent:'center',
   alignItems: 'center',
 }
})