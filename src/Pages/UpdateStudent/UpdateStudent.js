import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import SideNavigation from '../Shared/SideNavigation/SideNavigation';

const UpdateStudent = () => {
    const [success, setSuccess] = useState(false);
    const { id } = useParams();
    const [student, setStudent] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/students/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setStudent(data))
    }, []);

    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedStudent = { ...student }
        updatedStudent.fullname = updatedName;
        console.log(updatedStudent);
        setStudent(updatedStudent);
    }

    const handleAgeChange = e => {
        const updatedAge = e.target.value;
        const updatedStudent = { ...student }
        updatedStudent.dataOfBirth = updatedAge;
        console.log(updatedStudent);
        setStudent(updatedStudent);
    }
    const handleSchoolChange = e => {
        const updatedSchool = e.target.value;
        const updatedStudent = { ...student }
        updatedStudent.school = updatedSchool;
        console.log(updatedStudent);
        setStudent(updatedStudent);
    }
    const handleClassChange = e => {
        const updatedClass = e.target.value;
        const updatedStudent = { ...student }
        updatedStudent.class = updatedClass;
        console.log(updatedStudent);
        setStudent(updatedStudent);
    }
    const handleDivisionChange = e => {
        const updatedDivision = e.target.value;
        const updatedStudent = { ...student }
        updatedStudent.division = updatedDivision;
        console.log(updatedStudent);
        setStudent(updatedStudent);
    }
    const handleStatusChange = e => {
        const updatedStatus = e.target.value;
        const updatedStudent = { ...student }
        updatedStudent.status = updatedStatus;
        console.log(updatedStudent);
        setStudent(updatedStudent);
    }


    const handleUpdateStudent = e => {
        const url = `http://localhost:5000/students/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully');
                    setStudent({});
                }
            })


        e.preventDefault();

    };
    return (
        <div>
            <Navigation></Navigation>
            <div className="container-fluid">
                <div className="row">
                    <SideNavigation></SideNavigation>
                    <div className="col-md-10">
                        <div className="row animated fadeInRight">
                            <div className="col-sm-5">
                                <h2>Update Student Information</h2>
                                <Form onSubmit={handleUpdateStudent}>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="4">
                                            Full Name
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control onChange={handleNameChange} type="text" value={student.fullname} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="4">
                                            Date Of Birth
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control onChange={handleAgeChange} type="date" value={student.dataOfBirth} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="4">
                                            School
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Select onChange={handleSchoolChange} value={student.school} aria-label="Default select example">
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
                                            <Form.Select onChange={handleClassChange} value={student.class} aria-label="Default select example">
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
                                            <Form.Select onChange={handleDivisionChange} value={student.division} aria-label="Default select example">
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
                                            <input onChange={handleStatusChange} checked={student.status === "Active" ? "checked" : ""} className="form-check-input" type="radio" id="active" name="status" value="Active" />
                                            <label style={{ cursor: 'pointer' }} className="ps-2 form-check-label" htmlFor="active">
                                                Active
                                            </label>

                                            <input onChange={handleStatusChange} checked={student.status === "Inctive" ? "checked" : ""} className="ms-4 form-check-input" type="radio" id="inactive" name="status" value="Inctive" />
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

                                    {success && <div className="alert alert-success" role="alert">
                                        Updated Student Successfully!
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

export default UpdateStudent;