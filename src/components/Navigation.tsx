import React from 'react';
import {Link} from "react-router-dom";
import '../index.css'


const Navigation = () => {

    return (
        <nav className="flex justify-between items-center  px-5 h-[50px] bg-gray-500 shadow-md text-white">
            <h3 className={'font-bold'}>Github Search</h3>
            <span>
                <Link to={'/'} className={'mr-2'}>Home</Link>
                <Link to={'/favorites'}>Favorites</Link>
            </span>

        </nav>
    );
}

export default Navigation;