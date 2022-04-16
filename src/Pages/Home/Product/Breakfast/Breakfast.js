import React, { useEffect, useState } from 'react';
import SingleBreakfast from './SingleBreakfast';

const Breakfast = () => {
    const [breakfasts, setBreakfasts] = useState([])

    useEffect(() => {
        fetch('breakfast.json')
            .then(response => response.json())
            .then(data => setBreakfasts(data))
    }, [])
    return (
        <div className="container mt-5">
            <h3 className="text-center" style={{ color: '#E5B429' }}>Our Available Breakfast Menus: <span style={{ color: '#FCF4E0' }}>{breakfasts.length}</span></h3>
            <div className="container row">
                {
                    breakfasts.map(breakfast => <SingleBreakfast key={breakfast.id} breakfast={breakfast} />)
                }
            </div>
        </div>
    );
};

export default Breakfast;