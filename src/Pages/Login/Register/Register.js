import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
// import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [agree, setAgree] = useState(false);
  

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }
    

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName:name });
          console.log('Updated profile');
          navigate('/home');
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const password = event.target.password.value;

    }
    
    return (
        <div className='container w-50 mx-auto '>
            <h2 className='text-primary text-center'> Register Page</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef}
                        type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='terms' onClick={() => setAgree(!agree)} className={`ps-2 ${agree ? 'text-info' : 'text-danger'}`}
                        label="Accept Terms & Condition about Dental Health"  />
                </Form.Group>

                <Button
                    
                    className='d-block mx-auto my-2 w-50' variant="info" disabled={!agree} type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account? <Link to={'/login'} className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please LogIn</Link></p>
            
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;