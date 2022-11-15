import React, { useState } from 'react'
import { Text } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections, { } from 'react-native-maps-directions'

const Maps = () => {

    const [showMap, setShowMap] = useState(false)
    const GOOGLE_MAPS_APIKEY = 'AIzaSyBivBBLXvbnhSdccyAdfe6sexiirxjB1IY'
    const origin = { latitude: 37.3318456, longitude: -122.0296002 };
    const destination = { latitude: 37.771707, longitude: -122.4053769 };

    return (
        <>
            {
                <>
                    <Text>Maps</Text>
                    <MapView
                        style={{ height: 1000, width: 1000, flex: 1 }}
                        onLayout={() => setShowMap(true)}
                        initialRegion={{
                            latitude: 13.0198,
                            longitude: 80.2236,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Polyline
                            coordinates={[
                                { latitude: 13.0067, longitude: 80.2206 },
                                { latitude: 13.0198, longitude: 80.2236 },
                                { latitude: 13.0298, longitude: 80.2006 }                                
                            ]}
                            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                            strokeColors={[
                                '#7F0000',
                                '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                                '#B24112',
                                '#E5845C',
                                '#238C23',
                                '#7F0000'
                            ]}
                            strokeWidth={6}
                        />
                        <Marker coordinate={{
  latitude: 13.0298,
  longitude: 80.2006,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
} } />
                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={GOOGLE_MAPS_APIKEY}
                        />
                    </MapView>
                </>
            }
        </>
    )
}

export default Maps