import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, {  useState } from 'react'
import { Main_Page_context } from '../context/ContextProvider';
import About from './About';
import Info_page from './Info_page';
import Maps from './Maps';
import Search_places from './Search_places';

const Main_Page = () => {

  const [page_data,setPage_data] = useState({
    depart:null,
    destination:null,
  }) 

  const modify_page_data = (data) => {
    setPage_data(previousData => ({...previousData,...data}))
  }
    const Stack = createNativeStackNavigator();
  return (
    <>
      <Main_Page_context.Provider value={{page_data,setPage_data,modify_page_data}}>
        <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName='Search_places'>
            <Stack.Screen  name='Search_places' component={Search_places} />
            <Stack.Screen name='Info_page' component={Info_page} />
            <Stack.Screen name='maps' component={Maps} />
        </Stack.Navigator>
      </Main_Page_context.Provider>
    </>
  )
}

export default Main_Page