import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='grid grid-cols-3 justify-between items-center p-5'>
            <h1 className='text-3xl font-bold'><Link to='/'>Task Management</Link></h1>
            <ul className='flex gap-12 font-bold'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/all-tasks'>All Task</Link></li>
                <li><Link to='/add-a-task'>Add A Task</Link></li>
            </ul>
            <div className='flex justify-end'>
               <span><Link to='/'>Profile</Link></span>
            </div>
        </nav>
    );
};

export default Navbar;