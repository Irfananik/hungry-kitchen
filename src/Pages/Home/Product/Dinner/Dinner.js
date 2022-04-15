import React, { useEffect, useState } from 'react';
import SingleDinner from './SingleDinner';

const Dinner = () => {
    const [dinners, setDinners] = useState([])

    useEffect(() => {
        fetch('dinner.json')
            .then(response => response.json())
            .then(data => setDinners(data))
    }, [])
    return (
        <div className="container mt-5">
            <h3 style={{ color: '#E5B429' }}>Our Available dinner Menus: <span style={{ color: '#FCF4E0' }}>{dinners.length}</span></h3>
            <div className="container row">
                {
                    dinners.map(dinner => <SingleDinner key={dinner.id} dinner={dinner}/>)
                }
            </div>
        </div>
    );
};

export default Dinner;