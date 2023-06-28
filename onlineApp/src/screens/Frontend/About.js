import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';

export default function App({navigation}) {
  return (
    <ScrollView>
    <View style={styles.flexContainer}>
       <Image
      style={styles.image}
      source={{ uri: 'https://www.reactnative.express/static/logo.png' }}/>
      <Button title='Press Me' onPress={()=>{alert('working')}} color={'black'}/>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Contact')}} activeOpacity={0.7}>
         <Text>To contact</Text>
      </TouchableOpacity>
      {/* <TouchableHighlight style={styles.button} underlayColor={'#FAB'}>
        <Text>
          press Me
        </Text>
      </TouchableHighlight> */}
      <Text style={styles.heading}>About</Text>
    </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({

  flexContainer: {
    // backgroundColor: 'red',
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
  },
  button:{
    padding: 20,
    // color:'red',
    margin: 10,
    backgroundColor:'green'
  }
})