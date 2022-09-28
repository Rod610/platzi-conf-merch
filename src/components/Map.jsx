import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const Map = ({ data, gMapsApiKey }) => {

    const mapStyles = {
        height: "50vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: data.lat, lng: data.lng
    }

    return (
        <LoadScript googleMapsApiKey={gMapsApiKey}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}
            >
                <MarkerF position={defaultCenter} />
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;