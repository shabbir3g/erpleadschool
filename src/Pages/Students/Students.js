import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import SideNavigation from '../Shared/SideNavigation/SideNavigation';


const Students = () => {

    const [students, setStudents] = useState([]);

    const d = new Date();
    let year = d.getFullYear();

    console.log(year);

    useEffect(() => {
        fetch(`http://localhost:5000/students`)
            .then((res) => res.json())
            .then((data) => setStudents(data))

    }, []);

    const handleDeleteStudent = id => {
        const proceed = window.confirm('Are you sure, You want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/students/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted sucessfully");
                        const remainingUsers = students.filter(user => user._id !== id);
                        setStudents(remainingUsers)
                    }
                })
        }
    }


    return (
        <div>
            <Navigation></Navigation>
            <div className="container-fluid">
                <div className="row">
                    <SideNavigation></SideNavigation>
                    <div className="col-md-10">
                        <div className="row animated fadeInRight">
                            <div className="col-sm-12">
                                <h4 className="section-subtitle"><b>Searching, ordering and paging</b></h4>
                                <div className="panel">
                                    <div className="panel-content">
                                        <div className="table-responsive">
                                            <table id="basic-table" className="data-table table table-striped nowrap table-hover" cellSpacing="0" width="100%">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Age</th>
                                                        <th>School</th>
                                                        <th>Class</th>
                                                        <th>Division</th>
                                                        <th>Status</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {students?.map((student, index) =>
                                                        <tr key={student._id} >
                                                            <td>{index + 1}</td>
                                                            <td>{student.fullname}</td>
                                                            <td>{
                                                                student.dataOfBirth

                                                            }</td>
                                                            <td>{student.school}</td>
                                                            <td>{student.class}</td>
                                                            <td>{student.division}</td>
                                                            <td>{student.status}</td>
                                                            <td>
                                                                <Link to={`/student/update/${student._id}`}>Edit</Link>

                                                                <button
                                                                    onClick={() => handleDeleteStudent(student?._id)}
                                                                    className='mx-2 btn btn-link' >Delete</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div >
    );
};

export default Students;