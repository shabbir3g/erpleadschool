import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, signInUserEmailPassword, setError } = useAuth();

    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const redurectURI = location.state?.from || '/students';

    const handleWithGoogleLogin = () => {
        signInWithGoogle()
            ?.then(result => {
                navigate(redurectURI)
            });



    }

    const handleLoginEmailPassword = () => {

        signInUserEmailPassword(email, passWord)

            .then(result => {
                navigate(redurectURI)
            })
            .catch((error) => {
                setError(error.message);
            });



    }


    const changeUserEmail = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const changeUserPassWord = e => {
        setPassWord(e.target.value);
    }
    return (
        <div>
            <div className='text-center mt-5'>
                <Link to="/"><img style={{ width: "100px" }} src="/logo.png" alt="" /></Link>
            </div>
            <div className='d-flex  justify-content-center mt-3'>
                <div style={{ width: "30%" }} className='border border-secondary py-4 px-5 bg-secondary bg-opacity-10'>
                    <h5 className='text-center'>Login to your account</h5>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email ID / Phone Number</Form.Label>
                        <Form.Control onBlur={changeUserEmail} className='border border-secondary' type="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={changeUserPassWord} className='border border-secondary' type="password" />
                    </Form.Group>
                    <Form.Group className='text-center'>
                        <button onClick={handleLoginEmailPassword} className='btn btn-outline-secondary' >
                            Login
                        </button>
                        <button onClick={handleWithGoogleLogin} className="btn btn-primary d-block my-4 mx-auto">Login With Google</button>
                    </Form.Group>

                    <Link to="/register">Forgot Passwrod/Claim your Account</Link>

                </div>
            </div>
        </div>
    );
};

export default Login;