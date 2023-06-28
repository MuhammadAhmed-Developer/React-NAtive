import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

export default function List() {


    const items = [
        { id: '0', text: 'View' },
        { id: '1', text: 'Text' },
        { id: '2', text: 'Image' },
        { id: '3', text: 'ScrollView' },
        { id: '4', text: 'ListView' },
      ]

  return (
    <View style={styles.flexContainer}>
      {/* <View style={[styles.box, styles.flexCenter]}>
        <Text>List</Text>
      </View>
      <Text style={styles.heading}>Lists</Text> */}
      <FlatList
      data={items}
      renderItem={({ item }) => <View style={styles.row}><Button  title ={item.text}  onPress={()=>{alert(item.id)}}/></View>}
      keyExtractor={(item) => item.id}
    />
    </View>
  )
}

const styles = StyleSheet.create({

  flexContainer: {
    backgroundColor: 'blue',
    flex: 1,
    color: 'black',
    // padding: 6,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  row:{
       color:'black'
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
 },                                                    
//  container: {
//     flex: 1,
//   },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})