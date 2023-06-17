import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.heading}>Contact</Text>
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