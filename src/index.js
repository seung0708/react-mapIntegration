import React, {useState, useEffect} from 'react';
import './styles.css'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import {createRoot} from 'react-dom/client';
const apiKey = process.env.MAP_API_KEY;

const App = () => {
    const [map, setMap] = useState(null)
    const [marker, setMarker] = useState();
    const [coordinates, setCoordinates] = useState({
        lng: -118.243683,
        lat: 34.0549
    })
    useEffect(() => {
        mapboxgl.accessToken = apiKey
        
        const newMap = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [coordinates.lng, coordinates.lat],
            zoom: 10
        })

        setMap(newMap)

       // Add marker at the initial position
       const mapMarker = new mapboxgl.Marker()
       .setLngLat([coordinates.lng, coordinates.lat])
       .addTo(map);

        // Store marker in state
        setMarker(mapMarker);
        
        return () => map.remove();
    
    },[])

    const handleChange = (e) => {
        const {name, value} = e.target; 
        const parsedValue = parseFloat(value);
        setCoordinates(prevState => ({
            ...prevState,
            [name]: isNaN(parsedValue) ? prevState[name] : parsedValue
        }));

        if(marker && !isNaN(parsedValue)) { 
            marker.setLngLat([coordinates.lng, coordinates.lat])
        }
    }

    return (
    <>
        <div>
            <label>Longitude: </label>
            <input type='number' name='lng' value={coordinates.lng} onChange={handleChange} />
            <label>Latitude: </label>
            <input type='number' name='lat' value={coordinates.lat} onChange={handleChange} />
        </div>
        <div id='map' style={{ width: '100%', height: '500px' }}></div>
    </>
    )
}

const root = document.getElementById('root')
createRoot(root).render(<App />)