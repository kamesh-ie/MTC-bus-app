import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import ContextProvider, { Main_Page_context } from '../context/ContextProvider'

const About = ({navigation}) => {

  return (
    <View>
        <Text> About  </Text>
        <Button title='back' onPress={() => {
          navigation.goBack()
        }} />
    </View>
  )
}

export default About