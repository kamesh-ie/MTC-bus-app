import React, { useContext, useRef, useState } from 'react'
import { Animated, Button, Dimensions, ImageBackground, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {auth} from '../context/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ContextProvider } from '../context/ContextProvider'

const LoginSignup = () => {
    const {setIssignedIn} = useContext(ContextProvider);

    const slideAnim = useRef(new Animated.Value(width)).current
    const [toggle, setToggle] = useState(false)
    const [l_username, set_L_Username] = useState('');
    const [s_username, set_S_Username] = useState('');
    const [l_password, set_L_Password] = useState('')
    const [s_password, set_S_Password] = useState('')
    const [s_email, set_S_Email] = useState('')



    const registerUser = () => {
        createUserWithEmailAndPassword(auth,s_email,s_password).then(user => {
            updateProfile(user.user.uid,{
                displayName:s_username
            })
        })
    }


    const loginuser = () => {
        console.log('error')
        signInWithEmailAndPassword(auth,l_username,l_password).then(() => {setIssignedIn(true)})
    }



    const SlideOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        if (!toggle) {
            Animated.timing(slideAnim, {
                toValue: 10,
                duration: 500,
                useNativeDriver: false,
            }).start();
        }
        else {
            Animated.timing(slideAnim, {
                toValue: width,
                duration: 500,
                useNativeDriver: false,
            }).start();
        }
        setToggle(!toggle)
    }
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20}}>
                Login
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={toggle ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={SlideOut}
                    value={toggle}
                />
                signin
            </Text>
            <View style={styles.form} >
                <Animated.View style={[
                    styles.login,
                    { width: slideAnim, zIndex: 1 },
                ]} >
                    <ImageBackground blurRadius={10} style={{width:width}} resizeMode="cover" source={{ uri: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }}>
                        <View style={styles.ls_form}>
                            <TextInput style={styles.ls_text} onChangeText={e => set_L_Username(e)} defaultValue={l_username} placeholder='Email' />
                            <TextInput style={styles.ls_text} defaultValue={l_password} onChangeText={e => set_L_Password(e)} secureTextEntry={true} placeholder='Password' />
                            <TouchableOpacity style={styles.ls_submit} onPress={() => loginuser()}>
                                <Text style={{ color: 'white', fontSize: 20 }}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style={styles.bar} />
                </Animated.View>
                <ImageBackground blurRadius={10} resizeMode='cover' source={{ uri: 'https://images.unsplash.com/photo-1647900771397-ff11e75ddeb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' }}>
                    <View style={[styles.ls_form]}>
                        <TextInput style={styles.ls_text} onChangeText={e => set_S_Username(e)} defaultValue={s_username} placeholder='Username' />
                        <TextInput style={styles.ls_text} onChangeText={e => set_S_Email(e)} defaultValue={s_email} placeholder='Email' />
                        <TextInput style={styles.ls_text} defaultValue={s_password} onChangeText={e => set_S_Password(e)} secureTextEntry={true} placeholder='Password' />
                        <TouchableOpacity style={styles.ls_submit} onPress={() => registerUser()}>
                            <Text style={{ color: 'white', fontSize: 20 }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>


            </View>
        </View>
    )
}

const {height,width} = Dimensions.get('window')
console.log(height,width)
const styles = StyleSheet.create({
    container: {
        paddingTop:height/15,
        display: 'flex',
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bdc1bf',
    },

    form: {
        overflow: 'hidden',
        position: 'relative',
        borderColor: 'black',
        borderRadius: 8,
        borderWidth: 1,
        width: width,
        height: height,
    },

    login: {
        position: 'absolute',
        height: height,
        overflow: 'hidden',
    },

    bar: {
        position: 'absolute',
        height:height,
        width: width/60,
        backgroundColor: 'black',
        right: 0,
    },
    ls_form: {
        width:width,
        paddingHorizontal: 20,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ls_text: {
        color: 'white',
        borderEndColor: 'black',
        fontSize: 25,
        borderBottomWidth: 1,
        width: width/2,
        marginBottom: 25,
        borderBottomEndRadius: 8,
        paddingHorizontal: 10,
        // elevation:10,
        backgroundColor: 'transparent',
    },
    ls_submit: {
        width: width/2,
        alignItems: 'center',
        backgroundColor: 'black',
        paddingVertical: 5,
        borderRadius: 8,

    }


})

export default LoginSignup;
