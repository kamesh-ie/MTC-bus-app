import React, { useContext } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Main_Page_context } from '../context/ContextProvider'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons/faBus'
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons/faMapLocationDot'
import { faTicket } from '@fortawesome/free-solid-svg-icons/faTicket'


const Info_page = ({ navigation }) => {
    const { page_data } = useContext(Main_Page_context);




    return (
        <>
            <View>
                <Text> {page_data.depart} -> {page_data.destination}  </Text>
                <View style={styles.bus_items}>
                    <Text style={{ width: '100%' }}>
                        <View><Text style={[styles.textstyle]}><FontAwesomeIcon icon={faBus} />78D</Text></View>
                        <View><Text style={[styles.textstyle]}><FontAwesomeIcon icon={faClock} />5mins</Text></View>
                        <View><Text style={[styles.textstyle]}>AVL30</Text></View>
                        <View><Text style={[styles.textstyle]}><TouchableOpacity onPress={() => navigation.navigate('maps')} style={styles.map_button}><FontAwesomeIcon size={30} icon={faMapLocationDot} /></TouchableOpacity></Text></View>
                        <View><Text style={[styles.textstyle]}><TouchableOpacity style={styles}><FontAwesomeIcon size={30} icon={faTicket} /></TouchableOpacity></Text></View>
                    </Text>
                </View>
                <View style={styles.bus_items}>
                    <Text style={{ width: '100%' }}>
                        <View><Text style={[styles.textstyle]}><FontAwesomeIcon icon={faBus} />78D</Text></View>
                        <View><Text style={[styles.textstyle]}><FontAwesomeIcon icon={faClock} />5mins</Text></View>
                        <View><Text style={[styles.textstyle]}>AVL30</Text></View>
                        <View><Text style={[styles.textstyle]}><TouchableOpacity style={styles.map_button}><FontAwesomeIcon size={30} icon={faMapLocationDot} /></TouchableOpacity></Text></View>
                        <View><Text style={[styles.textstyle]}><TouchableOpacity  style={styles}><FontAwesomeIcon size={30} icon={faTicket} /></TouchableOpacity></Text></View>
                    </Text>
                </View>
                <View style={styles.bus_items}>
                    <Text style={{ width: '100%' }}>
                        <View><Text style={[styles.textstyle]}><FontAwesomeIcon icon={faBus} />78D</Text></View>
                        <View><Text style={[styles.textstyle]}><FontAwesomeIcon icon={faClock} />5mins</Text></View>
                        <View><Text style={[styles.textstyle]}>AVL30</Text></View>
                        <View><Text style={[styles.textstyle]}><TouchableOpacity style={styles.map_button}><FontAwesomeIcon size={30} icon={faMapLocationDot} /></TouchableOpacity></Text></View>
                        <View><Text style={[styles.textstyle]}><TouchableOpacity  style={styles}><FontAwesomeIcon size={30} icon={faTicket} /></TouchableOpacity></Text></View>
                    </Text>
                </View>
                <Button title='back' onPress={() => navigation.goBack()} />
            </View>

        </>
    )
}


const styles = StyleSheet.create({
    bus_items: {
        paddingHorizontal: 30,
        width: '100%',
        height: 80,
        elevation: 20,
        shadowColor: 'grey',
        backgroundColor: '#f9f9f9',
        marginBottom: 50,
        paddingVertical: 18,
    },
    textstyle: {
        fontSize: 20,
        marginRight: 50,
    },
    map_button: {
        backgroundColor: '#d0f8f4',
        borderColor: 'black',
        borderWidth: 1,
        width: 50,
        height: 40,
        paddingLeft: 10,
        paddingTop: 5,
    }
})
export default Info_page