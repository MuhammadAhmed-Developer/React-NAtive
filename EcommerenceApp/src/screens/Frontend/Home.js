import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { TextInput,Button } from 'react-native-paper';


const initialState = {
  title:"",
  description:"",
  sortOrder:"123"
}

export default function Home() {

  const [state, setState]  = useState(initialState)

  const handleChange = (name, value) => {
    setState(s=>({...s,[name]: value}))
  }

  const addProduct = () =>{

    let {title, description, sortOrder} = state
    console.log(sortOrder)
    title=title.trim()
    description=description.trim()

    let formData = {title, description,sortOrder}

    formData.id= Math.random().toString(36).slice(2)
    formData.dateCreated = 'firebase.firestore.Fieldvalue.serverTimeStamp()'
    formData.SortOrder = Number(sortOrder)
    formData.status = 'active'
    formData.createdBy = {
      email: 'user.email',
      uid:'user.uid'
    }
    createDocunment(formData)
  }
  
  const createDocunment=(formData)=>{
    console.log(formData)
  
}


  return (
    <SafeAreaView style={Styles.container}>

      <View style={Styles.formcontainer}>
        <TextInput
          mode="outlined"
          label="Title "
          placeholder="Type something"
          name='title'
          onChangeText={value=>{handleChange("title",value)}}
          />
          
       </View>

      <View style={Styles.formcontainer}>
      <TextInput
          mode="outlined"
          label="Description"
          placeholder="Type something" 
          name='description'
          onChangeText={value=>{handleChange("description",value)}}
          />
       </View>

      <View style={Styles.formcontainer}>
      <TextInput
          mode="outlined"
          label="Sort Order"
          placeholder="Type something" 
          name="sortOrder"
          onChangeText={value=>{handleChange("sortOrder",value)}}
          keyboardType="number-pad"
          />
       </View>
       <View>
       <Button icon="plus" mode="contained" onPress={addProduct}>Add</Button>
       </View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems:"center",
    backgroundColor: 'lightyellow',
    paddingHorizontal: 15

  },
  formcontainer:{
    marginBottom: 10
  }

})
