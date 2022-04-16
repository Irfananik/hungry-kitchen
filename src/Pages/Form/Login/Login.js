import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocilaLogin from '../../SocialLogin/SocilaLogin';

const Login = () => {
    const navigate = useNavigate()

    const navigateToSignUp = () => {
        navigate('/signup')
    }
    return (
        <div className="container mt-5">
            <h4 style={{ color: '#FCF4E0' }} className="text-center">Login with your email</h4>
            <Form className="container w-50 mt-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-flex aling-items-center justify-content-center">
                    <Button style={{ backgroundColor: '#E5B429' }} variant="primary" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
            <p className="mt-3 text-center" style={{color: '#E5B429'}}>Are you new here? <span className="text-primary" style={{ cursor: 'pointer', color:'#FCF4E0' }} onClick={navigateToSignUp}>SignUp</span> </p>
            <p className="mt-2 text-center" style={{color: '#E5B429'}}>Forget your password? <span className="text-primary" style={{ cursor: 'pointer', color:'#FCF4E0' }}>Reset Password</span> </p>
            <SocilaLogin/>
        </div>
    );
};

export default Login;