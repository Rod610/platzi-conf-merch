import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (gMapsApiKey, buyer) => {
    const [map, setMap] = useState({ lat: 0, lng: 0 });

const api = `https://maps.googleapis.com/maps/api/geocode/json?address=${buyer.address}${buyer.city}${buyer.state}${buyer.country}&key=${gMapsApiKey}`;

useEffect(() => {
    const getData = async () => {
        const response = await axios(api);
        setMap(response.data.results[0].geometry.location);
    };

    getData();


}, []);


return map;
};

export default useGoogleAddress;