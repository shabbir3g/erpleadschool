import React, { useState } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {

    const navigate = useNavigate();

    const { user, createUserEmailPassword, setError, error, isLoading } = useAuth();

    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');


    const changeUserEmail = e => {
        setEmail(e.target.value);
    }
    const changeUserPassWord = e => {
        setPassWord(e.target.value);
    }

    const handleRegistrationUser = e => {

        e.preventDefault();
        if (passWord.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        else {
            createUserEmailPassword(email, passWord);
            setError("");

            navigate?.push("/");
        }



    }



    return (
        <div>
            <div className='text-center mt-5'>
                <Link to="/"><img style={{ width: "100px" }} src="/logo.png" alt="" /></Link>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <div style={{ width: "30%" }} className='border border-secondary py-4 px-5 bg-secondary bg-opacity-10'>
                    {!isLoading && <div>
                        <h5 className='text-center'>Create a new Account</h5>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email ID / Phone Number</Form.Label>
                            <Form.Control onBlur={changeUserEmail} className='border border-secondary' type="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={changeUserPassWord} className='border border-secondary' type="password" />
                        </Form.Group>
                        <Form.Group className='text-center'>
                            <button onClick={handleRegistrationUser} className='btn btn-outline-secondary' >
                                Registration
                            </button>
                        </Form.Group>
                    </div>}




                    {isLoading && <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}
                    {user?.email && <div className="mt-4 alert alert-success" role="alert">
                        Congrats! Created account Successfully
                    </div>}

                    {error && <div className="alert alert-danger" role="alert">
                        {error}
                    </div>}


                </div>
            </div>
        </div>
    );
};

export default Register;