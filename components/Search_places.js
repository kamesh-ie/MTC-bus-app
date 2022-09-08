import { signOut } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import { Main_Page_context } from '../context/ContextProvider'


const Search_places = ({navigation}) => {
    const {setPage_data,modify_page_data} = useContext(Main_Page_context);
    const [confirm, setConfirm] = useState('confirm')
    const [deprature,setDeprature] = useState('')
    const [destination,setDestination] = useState('')



    

    

    return (
        <>
            <View style = {styles.container}>
                <TextInput style={styles.input} placeholder={"Departure"} onChangeText={e => setDeprature(e)} ></TextInput>
                <TextInput style={styles.input} placeholder={"Destination"} onChangeText={e => setDestination(e)} ></TextInput>
                <TouchableOpacity style={{backgroundColor:'#2196f3',padding:10,borderRadius:5}} onPress={() => {
                    modify_page_data({
                        depart:deprature,
                        destination:destination,
                    })
                    navigation.navigate('Info_page');
                    }} >
                        <Text style={{fontSize:25,color:'white'}}>Submit</Text>
                    </TouchableOpacity>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:50,
        width:'100%',
        height:'100%',
        borderColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
    },
    input:{
        borderColor:'black',
        width:'100%',
        borderBottomWidth:2,
        marginBottom:50,
        fontSize:30,
        paddingHorizontal:5,
    }
})

export default Search_places