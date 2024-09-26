import React from 'react';
import {createRoot} from 'react-dom/client';

const App = () => {
    return (
    <>
        <h1>Map Integration</h1>
    </>
    )
}

const root = document.getElementById('root')
createRoot(root).render(<App />)