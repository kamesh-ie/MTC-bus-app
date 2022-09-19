import React, { useState } from 'react'
import { Text } from 'react-native'
import MapView, { Polyline } from 'react-native-maps';
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
                            latitude: 13.0067,
                            longitude: 80.2206,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Polyline
                            coordinates={[
                                { latitude: 37.8025259, longitude: -122.4351431 },
                                { latitude: 37.7896386, longitude: -122.421646 },
                                { latitude: 37.7665248, longitude: -122.4161628 },
                                { latitude: 37.7734153, longitude: -122.4577787 },
                                { latitude: 37.7948605, longitude: -122.4596065 }
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