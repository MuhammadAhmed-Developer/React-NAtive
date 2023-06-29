import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View, Text, StyleSheet, Image, Button ,} from 'react-native'

export default function Home({navigation}) {
    return (
        <View style={styles.flexContainer} >
            <Text style={styles.h1}>Home page</Text>
            <Image
                style={styles.image}
                source={{ uri: 'https://www.reactnative.express/static/logo.png' }}
            />
            <Button title='Go tO About' color={'red'} style={styles.button}   onPress={()=>{navigation.navigate('About')}}/>
            <FontAwesome5 name='home' color='green' size={50}/>
        </View>

    )
}

const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'purple',
        flex: 1

    },
    h1: {
        fontSize: 50,
        fontWeight: 'bold'


    },
    image: {
        width: 200,
        height: 200,
        margin: 30
    },
   
})