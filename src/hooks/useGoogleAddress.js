import {useState, useEffect} from 'react';
import axios from 'axios';

const useGoogleAddress = (gMapsApiKey, address, city, state, country) => {
    const [map, setMap] = useState({lat: 0, lng: 0});

    const api = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}${city}${state}${country}&key=${gMapsApiKey}`;

    useEffect(() => {
        const getData = async () =>{
            const response =  await axios(api);
            console.log("response", response);
            setMap(response.data.results[0].geometry.location);
        };

        getData();


    }, []);


    return map;
};

export default useGoogleAddress;