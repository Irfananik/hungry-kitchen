import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container d-flex aling-items-center justify-content-center">
            <Nav className="mt-5" defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link style={{color:'#E5B429', fontSize:'18px'}} as={Link} to= '/breakfast'>Breakfast</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link style={{color:'#E5B429', fontSize:'18px'}} as={Link} to= '/lunch'>Lunch</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link style={{color:'#E5B429', fontSize:'18px'}} as={Link} to= '/dinner'>Dinner</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Home;