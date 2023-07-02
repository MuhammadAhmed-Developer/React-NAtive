import { View, Text, TextInput,StyleSheet,SafeAreaView ,Button} from 'react-native'
import React from 'react'

export default function Login({navigation}) {

    const [text, onChangeText] = React.useState('Enter Email');
  const [number, onChangeNumber] = React.useState('Enter Passward');

  return (
    <SafeAreaView style={styles.container} >
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
    />
    <TextInput
      style={styles.input}
      onChangeText={onChangeNumber}
      value={number}
      placeholder="Enter Passward"
      keyboardType="numeric"
    />
    <View style={styles.btn}>

    <Button title='Login' onPress={()=>{navigation.navigate('Home')}}/>
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 50,
      margin: 12,
      borderWidth: 1,
      borderColor:'blue',
      padding: 15,
      backgroundColor:'white',
      color:'black'
      
      
    },
    container:{
        flex: 1,
        backgroundColor:'tomato',
        justifyContent:'center'
        
    },
    btn:{
        margin:10
    }
  });
  