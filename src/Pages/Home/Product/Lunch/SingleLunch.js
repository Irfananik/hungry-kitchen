import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleLunch = ({lunch}) => {
    const { name, img, price, discription } = lunch
    return (
        <div className="container col-sm-12 col-md-6 col-lg-4 mt-5">
            <Card style={{ width: '18rem', backgroundColor: '#473535', padding: '16px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={{ color: '#E5B429' }}>Name: {name}</Card.Title>
                    <Card.Text>
                        <span style={{ color: '#FCF4E0' }}>{discription}</span>
                        <h6 style={{ color: '#E5B429' }}>Price: ${price}</h6>
                    </Card.Text>
                    <Button style={{ backgroundColor: '#E5B429' }} variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleLunch;