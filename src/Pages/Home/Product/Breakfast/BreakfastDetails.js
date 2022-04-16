import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BreakfastDetails = () => {
    const { breakfastId } = useParams()

    const [breakfast, setBreakfasts] = useState([])

    useEffect(() => {
        const singleBreakfastdetails = `${breakfastId}`
        fetch(singleBreakfastdetails)
        .then(response => response.json())
        .then(data => setBreakfasts(data))
    }, [breakfastId])

    return (
        <div className="mt-3 text-center">
            <h2 style={{ color: '#E5B429' }}>Food Details With Id Number: {breakfastId}</h2>
            {breakfast.name}
        </div>
    );
};

export default BreakfastDetails;