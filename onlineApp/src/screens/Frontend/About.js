import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.flexContainer}>
       <Image
      style={styles.image}
      source={{ uri: 'https://www.reactnative.express/static/logo.png' }}
    />
      <Text style={styles.heading}>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  flexContainer: {
    backgroundColor: 'red',
    flex: 1,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',


  },
  image:{
        width: 80,
        height: 100,
  }
})