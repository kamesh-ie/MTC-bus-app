import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search_places from './Search_places';
import { signOut } from 'firebase/auth';
import Main_Page from './Main_Page';
import { ContextProvider } from '../context/ContextProvider';


const Home = ({ navigation }) => {
  const { auth,setIssignedIn } = useContext(ContextProvider)
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  const Signout = () => {
    signOut(auth).then(() => setConfirm('Search_places'))
    setIssignedIn(false)
    
  }

  return (
    <>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Main_Page">
        <Drawer.Screen name="Main_Page" component={Main_Page} />
        <Drawer.Screen name="signout" component={Signout} />
      </Drawer.Navigator>
    </>

  )
}

export default Home