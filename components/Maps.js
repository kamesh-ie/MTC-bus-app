import React, { useState } from 'react'
import { Text } from 'react-native'
import MapView from 'react-native-maps';

const Maps = () => {

    const [showMap,setShowMap] = useState(false)
    return (
        <>
            <Text>Maps</Text>
            {showMap &&
            <MapView
            style={{height:1000,width:1000,flex:1}}
            onLayout={() => setShowMap(true)}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />}
        </>
    )
}

export default Maps