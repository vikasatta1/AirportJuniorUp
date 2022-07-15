import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage";
import Navigation from "./components/Navigation";



function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/favorites'} element={<FavoritePage/>}/>
            </Routes>
        </>
    );
}

export default App;
