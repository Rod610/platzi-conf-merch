import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const Map = ({data}) => {

    const mapStyles = {
        height: "50vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: data.lat, lng: data.lng
      }

    return (
        <LoadScript googleMapsApiKey='AIzaSyB9kCrPEs72NLhD9K06rc9GQvQQ_sJDdf0'>
            <GoogleMap 
            mapContainerStyle={mapStyles}
            zoom={15}
            center={defaultCenter}
            >
            <MarkerF position={defaultCenter}/>
            <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;