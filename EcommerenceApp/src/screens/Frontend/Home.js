import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function Home() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.heading}>Ecommerence Home Page</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:'lightyellow'
  },
  heading:{
    color:"green",
    fontSize: 30,
    fontWeight:'bold'

  }
})
