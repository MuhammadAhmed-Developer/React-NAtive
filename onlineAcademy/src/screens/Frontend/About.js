import React from 'react'
import { View, Text, StyleSheet ,Button} from 'react-native'

export default function About({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.head} >About</Text>
      <Button title='Go Back' color={'blue'} onPress={()=>{navigation.goBack()}}/>

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
