import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocilaLogin from '../../SocialLogin/SocilaLogin';
import auth from '../../../firebase.init';


const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const navigate = useNavigate()

    const navigateToSignUp = () => {
        navigate('/signup')
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
        console.log(email, password)
    }

    if(user){
        navigate('/')
    }

    return (
        <div className="container mt-5">
            <h4 style={{ color: '#FCF4E0' }} className="text-center">Login with your email</h4>
            <Form onSubmit={handleSubmit} className="container w-50 mt-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-flex aling-items-center justify-content-center">
                    <Button style={{ backgroundColor: '#E5B429' }} variant="primary" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
            <p className="mt-3 text-center" style={{ color: '#E5B429' }}>Are you new here? <span className="text-primary" style={{ cursor: 'pointer', color: '#FCF4E0' }} onClick={navigateToSignUp}>SignUp</span> </p>
            <p className="mt-2 text-center" style={{ color: '#E5B429' }}>Forget your password? <span className="text-primary" style={{ cursor: 'pointer', color: '#FCF4E0' }}>Reset Password</span> </p>
            <SocilaLogin />
        </div>
    );
};

export default Login;