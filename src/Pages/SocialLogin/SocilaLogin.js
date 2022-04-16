import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocilaLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)


    if (user) {
        navigate('/')
    }

    return (
        <div className="container">
            <div className="py-2">
                <button onClick={() => signInWithGoogle()} type="button" className="btn btn-light  my-3 d-block mx-auto">
                    Login with google
                    <img style={{ width: '30px' }} className="img-fluid mx-4 rounded-circle" src={'https://i.ibb.co/G2ZqW1L/google-Icon.jpg'} alt="" />
                </button>
                <button type="button" className="btn btn-primary  my-3 d-block mx-auto">
                    Login with facebook
                    <img style={{ width: '30px' }} className="img-fluid mx-4 bg-light rounded-circle bg-primary" src={'https://i.ibb.co/wdV0Wwf/facebook-Icon.png'} alt="" />
                </button>
                <button type="button" className="btn btn-dark  my-3 d-block mx-auto">
                    Login with github
                    <img style={{ width: '30px' }} className="img-fluid mx-4 bg-light rounded-circle" src={'https://i.ibb.co/HzSK5cd/git-Hub-Icon.png'} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocilaLogin;