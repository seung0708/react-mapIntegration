import React, {useState, useEffect} from 'react';
import './styles.css'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import {createRoot} from 'react-dom/client';
const apiKey = process.env.MAP_API_KEY;

const App = () => {
    useEffect(() => {
        console.log(apiKey)
        mapboxgl.accessToken = apiKey
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [-118.243683,34.0549],
            zoom: 10
        })
    
    },[])

    return (
    <>
        <div id='map'></div>
    </>
    )
}

const root = document.getElementById('root')
createRoot(root).render(<App />)