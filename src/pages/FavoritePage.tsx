import React from 'react';
import './../index.css'
import {useAppSelector} from "../hooks/redux";

const FavoritePage = () => {
    const {favourites} = useAppSelector(state => state.github)
    if (favourites.length === 0) return <p className={'text-center'}> No items...</p>
    return (
        <div className={'flex justify-center pt-10 mx-auto h-screen w-screen'}>
            <ul className={'list-none text-center'}>
                {favourites.map(f => (
                    <li key={f}>
                        <a href={f} target={'_blank'}>{f}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoritePage;