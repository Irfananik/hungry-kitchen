import React, { useEffect, useState } from 'react';
import SingleLunch from './SingleLunch';

const Lunch = () => {
    const [lunchs, setLunchs] = useState([])

    useEffect(() => {
        fetch('lunch.json')
            .then(response => response.json())
            .then(data => setLunchs(data))

    }, [])
    return (
        <div className="container mt-5">
            <h3 style={{ color: '#E5B429' }}>Our Available lunch Menus: <span style={{ color: '#FCF4E0' }}>{lunchs.length}</span></h3>
            <div className="container row">
                {
                    lunchs.map(lunch => <SingleLunch key={lunch.id} lunch={lunch} />)
                }
            </div>
        </div>
    );
};

export default Lunch;