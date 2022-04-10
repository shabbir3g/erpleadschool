import React from 'react';
import { Link } from 'react-router-dom';

const SideNavigation = () => {
    return (
        <>
            <div className="dashboard-sidebar col-md-2 p-0 bg-secondary bg-opacity-25">
                <ul className="list-group">
                    <li className='list-group-item bg-secondary bg-opacity-10'><Link className='text-dark text-decoration-none' to="/students"> -View Students</Link></li>
                    <li className='list-group-item  bg-secondary bg-opacity-10'><Link className='text-dark text-decoration-none' to="/student/add"> -Add Student</Link></li>


                </ul>
            </div>
        </>
    );
};

export default SideNavigation;