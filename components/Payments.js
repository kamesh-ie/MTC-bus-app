import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Payments = ({navigation}) => {
    const [confirm, setConfirm] = useState('confirm')
    const [deprature,setDeprature] = useState('')
    const [destination,setDestination] = useState('')
    
    return (
        <>
            <View style = {styles.container}>
                <Text style={{fontSize:25,marginBottom:5}}>Amount: ₹50</Text>
                <TextInput style={styles.input} placeholder={"Account number"} onChangeText={e => setDeprature(e)} ></TextInput>
                <TextInput style={styles.input} placeholder={"IFSC code"} onChangeText={e => setDestination(e)} ></TextInput>
                <TouchableOpacity style={{backgroundColor:'#2196f3',padding:10,borderRadius:5}} onPress={() => navigation.navigate("Pay_success")} >
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

export default Payments