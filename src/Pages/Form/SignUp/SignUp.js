import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocilaLogin from '../../SocialLogin/SocilaLogin';

const SignUp = () => {
    const navigate = useNavigate()

    const navigateToLoging = () => {
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        createUserWithEmailAndPassword(email, password)
    }

    if(user){
        navigate('/')
    }

    return (
        <div className="container mt-5">
            <h4 style={{ color: '#FCF4E0' }} className="text-center">SignUp Here</h4>
            <Form onSubmit={handleSignUp} className="container w-50 mt-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <input type="checkbox" name="terms" id="terms" />
                <level htmlFlor='terms'> Accept our terms and conditions </level> <br /> <br />
                <div className="d-flex aling-items-center justify-content-center">
                    <Button style={{ backgroundColor: '#E5B429' }} variant="primary" type="submit">
                        SignUp
                    </Button>
                </div>
            </Form>
            <p className="mt-3 text-center" style={{ color: '#E5B429' }}>Allready you have account? <span className="text-primary" style={{ cursor: 'pointer', color: '#FCF4E0' }} onClick={navigateToLoging}>Login</span> </p>
            <SocilaLogin />
        </div>
    );
};

export default SignUp;