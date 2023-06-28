import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.heading} onPress={()=>{navigation.navigate('Home')}}>Contact</Text>
      <Text style={styles.heading} onPress={()=>{navigation.goBack()}}>back</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  flexContainer: {
    backgroundColor: 'green',
    flex: 1,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',


  }
})