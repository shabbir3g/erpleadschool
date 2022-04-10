import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import SideNavigation from '../Shared/SideNavigation/SideNavigation';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddStudent = () => {
    const [success, setSuccess] = useState(false);

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/students', data)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true);
                    reset();
                }
            });
        console.log(data);
    }

    console.log(watch("example"));

    return (
        <div>
            <Navigation></Navigation>
            <div className="container-fluid">
                <div className="row">
                    <SideNavigation></SideNavigation>
                    <div className="col-md-10">
                        <div className="row animated fadeInRight">
                            <div className="col-sm-5">
                                <h2>Add Student</h2>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="4">
                                            Full Name
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text"  {...register("fullname")} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="4">
                                            Date Of Birth
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="date" {...register("dataOfBirth")} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="4">
                                            School
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Select {...register("school")} aria-label="Default select example">
                                                <option>Select</option>
                                                <option value="Pabna University of science and Technology">Pabna University of science and Technology</option>
                                                <option value="University of south Asia">University of south Asia</option>
                                                <option value="Dahaka University">Dahaka University</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="4">
                                            Class
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Select {...register("class")} aria-label="Default select example">
                                                <option>Select</option>
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                                <option value="04">04</option>
                                                <option value="05">05</option>
                                                <option value="06">06</option>
                                                <option value="07">07</option>
                                                <option value="08">08</option>
                                                <option value="09">09</option>
                                                <option value="10">10</option>

                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="4">
                                            Division
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Select {...register("division")} aria-label="Default select example">
                                                <option>Select</option>
                                                <option value="A+">A+</option>
                                                <option value="A">A</option>
                                                <option value="A-">A-</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="F">F</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="4">
                                            Status
                                        </Form.Label>
                                        <Col sm="8">
                                            <input className="form-check-input" type="radio" {...register("status")} id="active" value="Active" />
                                            <label style={{ cursor: 'pointer' }} className="ps-2 form-check-label" htmlFor="active">
                                                Active
                                            </label>

                                            <input className="ms-4 form-check-input" type="radio" {...register("status")} id="inactive" value="Inctive" />
                                            <label style={{ cursor: 'pointer' }} className="ps-2 form-check-label" htmlFor="inactive">
                                                Inctive
                                            </label>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="4">
                                        </Form.Label>
                                        <Col sm="8">
                                            <input className='btn btn-primary d-block' type="submit" value="submit" />
                                        </Col>
                                    </Form.Group>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    {success && <div className="alert alert-success" role="alert">
                                        Added Student Successfully!
                                    </div>}
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default AddStudent;