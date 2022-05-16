import React from 'react';
import { Button } from 'react-bootstrap';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
// import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    
    let errorMessage;
    if (error ) {
        errorMessage = <p className='text-danger'>Error: {error?.message} </p>
    }
    // if (loading || loading1) {
    //     return <Loading></Loading>
    // }
    if (user ) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary 1px w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary 1px w-50'></div>

            </div>
            <div>
                {errorMessage}
                <Button
                    onClick={() => signInWithGoogle()}
                    className='d-block mx-auto my-2 w-50' variant="info" size="lg">
                    {/* <i className="fab fa-google"></i> */}
                    <span className='px-2'>Google Sign In</span>
                </Button>
                
            </div>
        </div>
    );
};

export default SocialLogin;