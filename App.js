import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { Button, Dimensions, Image, Linking, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import About from './components/About';
import LoginSignup from './components/LoginSignup';

import { db, auth } from './context/Firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ContextProvider } from './context/ContextProvider';
import {enableLatestRenderer} from 'react-native-maps';




export default function App() {
  enableLatestRenderer();

  const Stack = createNativeStackNavigator();
  const [isSignedIn, setIssignedIn] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setIssignedIn(true);
      }
      else{
        setIssignedIn(false)
      }
    })
  }, [])

  const {height,width} = Dimensions.get('window')









  return (
    <>
      {/* <ContextProvider.Provider value={{db,auth,setIssignedIn}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='login_signup'>
            {!isSignedIn ? <Stack.Screen name='login_signup' component={LoginSignup} /> :
            <>
            <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
            <Stack.Screen name='About' component={About} />
            </>}
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider.Provider> */}
      <ContextProvider.Provider value={{ db, auth, setIssignedIn, height, width }}>
        <NavigationContainer>
        {!isSignedIn ? <LoginSignup /> : <Home />}
      </NavigationContainer>
    </ContextProvider.Provider> 

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue',

  },
});
